import { Component, input } from '@angular/core';
import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [],
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.css',
  animations:[
    trigger('flyInOut', [
      state(
        'in',
        style({
          width: '*',
          transform: 'translateX(0)',
          opacity: 1,
        }),
      ),
      transition(':enter', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate(
            '0.5s ease',
            style({
              transform: 'translateX(0)',
              width: '*',
            }),
          ),
          animate(
            '0.5s ease',
            style({
              opacity: 1,
            }),
          ),
        ]),
      ])
  ])
  ]
})
export class StatComponent{

  completedTask=input<number>(0);
  lengthTask=input<number>(0);
  unCompletedTask=input<number>(0);

}
