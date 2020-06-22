import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatChipsModule} from '@angular/material/chips'

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatListModule, 
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule

  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ]
})
export class MaterialModule { }