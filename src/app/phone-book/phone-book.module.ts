import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneBookRoutingModule } from './phone-book-routing.module';
import { PhoneBookComponent } from './phone-book.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PhoneBookComponent],
  imports: [
    CommonModule,
    PhoneBookRoutingModule,
    ReactiveFormsModule
  ]
})
export class PhoneBookModule { }
