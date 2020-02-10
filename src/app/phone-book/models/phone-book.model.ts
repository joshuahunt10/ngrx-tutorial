export interface Contact {
  id?: number,
  firstName: string,
  lastName?: string,
  number: number
}

export interface ContactsMap {
  [id: number]: Contact
}
