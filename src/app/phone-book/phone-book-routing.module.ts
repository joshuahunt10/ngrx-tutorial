import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneBookComponent } from './phone-book.component';

const routes: Routes = [{ path: '', component: PhoneBookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneBookRoutingModule { }
