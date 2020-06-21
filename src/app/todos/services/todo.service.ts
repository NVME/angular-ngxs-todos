import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { TodoItem } from '../model/todo.model';

@Injectable()
export class TodoService {
   private todos: Array<TodoItem>= []
   constructor() {}

   getAllTodos():Observable<TodoItem[]>{
        return of(this.todos)
   }

   addTodos(task:string):Observable<TodoItem>{
       const new_todo= {
            id:this.todos.length+1,
            task,
            isCompleted:false
        }
        this.todos.push(new_todo)
        return of(new_todo)
   }
   
   finishTodo(id:number):Observable<any>{
       this.todos=this.todos.map(t=>t.id===id?{...t, isCompleted:!t.isCompleted}:t)
       return of(true)
   }
}