import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Contact } from '../../models/phone-book.model';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.less']
})
export class CreateContactComponent {
  @Output() saveContact = new EventEmitter();
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    number: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(10),
        Validators.minLength(10)
      ]
    ]
  })

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if(this.contactForm.valid) {
      const newContact: Contact = this.contactForm.value;
      this.saveContact.emit(newContact)
      this.contactForm.reset({firstName: '', lastName: '', number: ''})
    }
  }

}
