import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Select} from '@ngxs/store';
import { TodoState } from '../store/todo.state';
import { TodoItem } from '../model/todo.model';
import { Observable, Subscription } from 'rxjs';
import { GetTodos , UpdateTodo } from '../store/todo.actions';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit , OnDestroy{

 @Select(TodoState.getTodoList) todos$:Observable<TodoItem[]>
 @Select(TodoState.areTodosLoaded) areTodosLoaded$:Observable<boolean>
 isLoadSub:Subscription
  constructor(private store :Store) { }

  ngOnInit(): void {
     this.isLoadSub=this.areTodosLoaded$.pipe(
       tap(isloaded=>{        
           if(!isloaded){            
            this.store.dispatch(new GetTodos())
           }
          } )
     ).subscribe()
  }
  updateTodo(id:number):void{
    console.log(id)
     this.store.dispatch(new UpdateTodo(id))
  }
  ngOnDestroy():void{
    this.isLoadSub.unsubscribe()
  }

}
