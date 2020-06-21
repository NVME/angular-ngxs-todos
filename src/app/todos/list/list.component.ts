import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Select} from '@ngxs/store';
import { TodoState } from '../store/todo.state';
import { TodoItem } from '../model/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  @Select(TodoState.getTodoList) todos$:Observable<TodoItem[]>
  constructor(private store :Store) { }

  ngOnInit(): void {
  }


}
