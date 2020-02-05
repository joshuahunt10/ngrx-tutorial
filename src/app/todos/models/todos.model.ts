export interface Todo {
  id?: number
  text: string,
  complete: boolean
}

export interface TodoMap {
  [id: number]: Todo
}
