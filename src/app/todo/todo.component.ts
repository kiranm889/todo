import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  id!: number;
  todo!: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService
        .retrieveTodo('in28min', this.id)
        .subscribe((data) => (this.todo = data));
    }
  }

  saveTodo() {
    if (this.id == -1) {
      //create Todo
      this.todoService.createTodo('in28min', this.todo).subscribe((data) => {
        console.log(data);
        this.router.navigate(['todos']);
      });
    } else {
      this.todoService
        .updateTodo('in28min', this.id, this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    }
  }
}
