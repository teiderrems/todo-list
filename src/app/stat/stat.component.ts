import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [],
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.css'
})
export class StatComponent{

  completedTask=input<number>(0);
  lengthTask=input<number>(0);
  unCompletedTask=input<number>(0);

}
