import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent {
  message: string | undefined;
  todos: Todo[] | undefined;

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit() {
    this.todoService.retrieveAllTodos('king').subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }

  // [
  //   new Todo(1,'learn to dance',false,new Date()),
  //   new Todo(2,'learn to lead',false,new Date()),
  //   new Todo(3,'learn to program',true,new Date()),]
  // {id:1,description:'learn to dance'},{id:2,description:'learn to lead'},{id:3,description:'learn to program'}]

  deleteTodo(id: number) {
    console.log(`delete Todo ${id}`);
    this.todoService.deleteTodo('in28min', id).subscribe((response) => {
      console.log(response);
      this.message = `Delete of Todo ${id} SuccessFul !`;
    });
  }

  updateTodo(id: number) {
    console.log(`update ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
