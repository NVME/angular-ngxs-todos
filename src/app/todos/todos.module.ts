import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { SummaryComponent } from './summary/summary.component';
import { TodoService } from './services/todo.service';
import { MaterialModule } from '../app.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent, FormComponent, SummaryComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    TodoService
  ],
  exports:[
    ListComponent, FormComponent, SummaryComponent
  ]

})
export class TodosModule { }
