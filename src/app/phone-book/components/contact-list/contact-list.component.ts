import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../models/phone-book.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {
  @Input() contactsList: Contact[]

  constructor() { }

  ngOnInit() { }

}
