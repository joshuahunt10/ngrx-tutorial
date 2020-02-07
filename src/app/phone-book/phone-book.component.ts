import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromReducer from './reducers/phone-book.reducer';
import * as fromActions from './actions/phone-book.actions';
import * as fromSelectors from './selectors/phone-book.selectors';
import { Contact } from './models/phone-book.model';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.less']
})
export class PhoneBookComponent implements OnInit {
  contactsList$: Observable<Contact[]>;

  constructor(
    private store: Store<fromReducer.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(fromActions.loadContactsRequest());
    this.contactsList$ = this.store.pipe(
      select(fromSelectors.selectAllContactsList)
    )
  }

}
