import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Task, TaskServiceService } from './task-service.service';
import { StatComponent } from "./stat/stat.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CapitalizePipe } from "./capitalize.pipe";
import { animate, keyframes, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzFormModule, NzButtonModule, NzIconModule, NzCardModule, FormsModule, StatComponent, TaskFormComponent, CapitalizePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations:[
    trigger("beforeEnter",[
      transition(':enter',[animate("3s",keyframes([
        style({
          opacity:0,
          borderColor:'lightgray',
        }),
        style({
          opacity:0.5,
          borderColor:'gray',
        }),
        style({
          opacity:0.75,
          borderColor:'lightblue',
        }),
        style({
          opacity:1,
          borderColor:'blue',
        }),
      ]))]),
      transition(':leave',[animate("1s",keyframes([
        style({
          opacity:1,
          borderColor:'lightgray',
        }),
        style({
          opacity:0.75,
          borderColor:'gray',
        }),
        style({
          opacity:0.5,
          borderColor:'lightblue',
        }),
        style({
          opacity:0,
          borderColor:'blue',
        }),
      ]))])
    ]),
  ]
})
export class AppComponent implements OnInit {
updateTask($event: Task) {
  this.update($event);
}
  deleteTask(id: number|undefined) {
    this.taskService.deleteTask(id!).subscribe(tasks => {
      this.tasks.set(tasks);
    });
  }

  isEdit: WritableSignal<boolean> = signal(false);

  completedTask =computed(()=>this.tasks().filter(t=>t.completed===true).length);
  unCompletedTask =computed(()=>this.tasks().filter(t=>t.completed===false).length);
  taskLength =computed(()=>this.tasks().length);

  edit(task: Task) {
    this.currentTask.set(task);
    this.isEdit.update(state => !state);
  }
  update(task: Task) {
    this.taskService.putTask(task).subscribe(tasks => {
      this.tasks.set(tasks);
      this.isEdit.update(state=>state?!state:state);
    });
  }
  addTask(task:Task) {
    if (task.title && (!this.isEdit())) {
      this.taskService.addTask(task).subscribe(tasks =>  {
        this.tasks.set(tasks);
      });
      this.currentTask.set({title:"",content:""});
    }
  }
  title = 'todo-list';
  tasks =signal<Task[]>([]) ;

  currentTask=signal<Task>({
    content: "",
    title: ""
  });


  constructor(private taskService: TaskServiceService) {

  }
  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.taskService.getAllTask().subscribe(tasks => {
      this.tasks.set(tasks);
    })
  }

}
