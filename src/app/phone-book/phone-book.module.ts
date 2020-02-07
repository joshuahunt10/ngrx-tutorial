import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducer from './reducers/phone-book.reducer';
import { PhoneBookRoutingModule } from './phone-book-routing.module';
import { PhoneBookComponent } from './phone-book.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { CreateContactComponent } from './components/create-contact/create-contact.component';
import { PhoneBookEffects } from './effects/phone-book.effects';


@NgModule({
  declarations: [
    PhoneBookComponent,
    ContactListComponent,
    CreateContactComponent
  ],
  imports: [
    CommonModule,
    PhoneBookRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromReducer.phoneBookFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([PhoneBookEffects])
  ]
})
export class PhoneBookModule { }
