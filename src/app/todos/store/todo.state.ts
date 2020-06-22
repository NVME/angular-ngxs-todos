import { TodoItem } from '../model/todo.model';
import { State, Selector, Action, StateContext, UpdateState } from '@ngxs/store';
import { tap } from 'rxjs/operators'
import { TodoService } from '../services/todo.service';
import { AddTodo, GetTodos, UpdateTodo } from './todo.actions';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { state } from '@angular/animations';
import { Summary } from '../model/summary.model';

export class TodoStateModel {
    list?: Array<TodoItem>
    isLoaded: boolean
    summary?: Summary
}

@State<TodoStateModel>({
    name: 'todos',
    defaults: {
        isLoaded: false
    }
}
)
@Injectable()
export class TodoState {

    constructor(private todoService: TodoService) { }

    @Selector()
    static getTodoList(state: TodoStateModel) {
        return state.list
    }

    @Selector()
    static getSummary(state: TodoStateModel) {
        return state.summary
    }

    @Selector()
    static areTodosLoaded(state: TodoStateModel) {
        return state.isLoaded;
    }

    @Action(AddTodo)
    addTodo({ getState, patchState }: StateContext<TodoStateModel>, { task }: AddTodo) {
        this.todoService.addTodos(task).pipe(
            tap(todo => {
                const state = getState()
                const todos = [...state.list]
                patchState({
                    // list: [todo, ...todos],
                    summary: {
                        totalCount: state.summary?.totalCount + 1,
                        todoCount: state.summary?.todoCount + 1,
                        completeCount: state.summary?.completeCount
                    }
                })
            }
            )
        ).subscribe(v => v)

    }

    @Action(UpdateTodo)
    updateTodo({ getState, patchState }: StateContext<TodoStateModel>, { id }: UpdateTodo) {
        this.todoService.finishTodo(id)
        const new_todos = this.todoService.getAllTodos()
        const state = getState()
        console.log('atction here', state.list.map<TodoItem>((t) =>
            t.id === id
                ?
                { id: t.id, task: t.task, isCompleted: !t.isCompleted }
                :
                t)
        )
        return patchState({
            list: new_todos,
            summary: {
                totalCount: new_todos.length,
                completeCount: new_todos.filter(t => t.isCompleted)?.length,
                todoCount: new_todos.filter(t => !t.isCompleted)?.length
            }
        })

    }
    @Action(GetTodos)
    getTodos({ setState }: StateContext<TodoStateModel>, action: GetTodos) {
        const todos = this.todoService.getAllTodos()
        return setState({
            ...state,
            isLoaded: true,
            list: todos,
            summary: {
                totalCount: todos?.length,
                completeCount: todos?.filter(t => t.isCompleted)?.length,
                todoCount: todos?.filter(t => !t.isCompleted)?.length
            }
        })
    }
}