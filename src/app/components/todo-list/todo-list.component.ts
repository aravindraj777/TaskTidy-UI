import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit{

  newTodoTitle=""
  todos$!:Todo[]

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  
}
