import { Component, Input } from '@angular/core';

import { Contact } from '../../models/phone-book.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent {
  @Input() contactsList: Contact[]
}
