import { TodoItem } from '../model/todo.model';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators'
import { TodoService } from '../services/todo.service';
import { AddTodo, GetTodos } from './todo.actions';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';


export class TodoStateModel {
    list: Array<TodoItem>
}


@State<TodoStateModel>({
    name: 'todos',
    defaults: {
        list: [
            { id: 1, task: 'This is my first task', isCompleted: false },
            { id: 2, task: 'This is my second task', isCompleted: true }
        ],
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

    @Action(AddTodo)
    addTodo({ getState, patchState }: StateContext<TodoStateModel>, { task }: AddTodo) {
        this.todoService.addTodos(task).pipe(
            tap(todo => {
                const state = getState()
                const todos = [...state.list]
                patchState({
                    list: [todo, ...todos]
                })
            }
            )
        )
    }
    @Action(GetTodos)
    getTodos({ patchState }: StateContext<TodoStateModel>) {
        this.todoService.getAllTodos().pipe(
            tap(todos => {
                patchState({
                   list:todos
                })
            }
            )
        )

    }

}