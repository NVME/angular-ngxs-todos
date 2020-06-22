import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddTodo } from '../store/todo.actions';

@Component({
  selector: 'app-todo-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  taskInput = new FormControl('')

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  addTodo():void{

     const task= this.taskInput.value
     if(task){
       this.store.dispatch(new AddTodo(task)).subscribe(
        
         ()=> this.taskInput.setValue('')
       )
     }   
  }


}
