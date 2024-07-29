import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export type Task={
  id?:number;
  title?:string;
  content?:string;
  completed?:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  tasks:Task[]=[{
    id:1,
    content:"learn angular",
    title:"learn angular",
    completed:false
  },{
    id:2,
    content:"learn next",
    title:"learn next",
    completed:false
  }];

  constructor() { }

  getAllTask():Observable<Task[]>{
    return of(this.tasks)
  }

  getTaskById(id:number):Observable<Task |undefined>{
    return of(this.tasks.find(t=>t.id===id));
  }

  addTask(task:Partial<Task>):Observable<Task[]>{
    task.completed=false;
    task.id=Date.now();
    this.tasks=[...this.tasks,task];
    return of(this.tasks);
  }

  putTask(task:Task):Observable<Task[]>{
    this.tasks=this.tasks.map(t=>{
      if (t.id===task.id) {
        t.completed=task.completed;
        t.content=task.content;
        t.title=task.title;
      }
      return t;
    })
    return of(this.tasks);
  }

  deleteTask(id:number):Observable<Task[]>{
    this.tasks=this.tasks.filter(t=>t.id!==id);
    return of(this.tasks);
  }
}
