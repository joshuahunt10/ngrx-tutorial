import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from '../models/phone-book.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {
  private phoneBookUrl = 'api/phonebook'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.phoneBookUrl)
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.phoneBookUrl, contact, this.httpOptions)
  }
}
