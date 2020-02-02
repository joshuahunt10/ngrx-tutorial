import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './reducers/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './effects/todos.effects';
import { TodosComponent } from './todos.component';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodos.todosFeatureKey, fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects])
  ]
})
export class TodosModule { }
