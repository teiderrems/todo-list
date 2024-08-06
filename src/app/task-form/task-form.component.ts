import { Component, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Task } from '../task-service.service';
import { HoverDirective } from '../hover.directive';
import { FocusDirective } from '../focus.directive';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule,NzFormModule,NzCardModule,NzButtonModule,NzIconModule,HoverDirective,FocusDirective,],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["editTask"]?.currentValue) {
      this.currentTask=changes["editTask"].currentValue;
    }
  }

  currentTask: Task = {
    content: "",
    title: ""
  };
  putCurrentTask() {
    this.updateTask.emit(this.currentTask);
    this.currentTask={
      content: "",
      title: ""
    }
  }
  editTask=input<Task>();
  

  isEdit=input<boolean>(false);
  addTask=output<Task>();
  updateTask=output<Task>();

}
