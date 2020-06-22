import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store, Select} from '@ngxs/store';
import { Summary } from '../model/summary.model';
import { TodoState } from '../store/todo.state';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styles: [
  ]
})
export class SummaryComponent implements OnInit , OnDestroy{
  
  @Select(TodoState.getSummary) summary$:Observable<Summary>
  summarySub:Subscription
  total:number
  todo:number
  completed:number
  constructor(private store:Store) { }

  ngOnInit(): void {
      this.summarySub=this.summary$.subscribe(
        s=>{
          this.total=s.totalCount
          this.todo=s.todoCount
          this.completed=s.completeCount
        }
      )

  }
  ngOnDestroy():void{
     this.summarySub.unsubscribe()
  }

}
