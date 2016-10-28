import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'test-material-controls',
  templateUrl: 'material-controls.component.html',
  styleUrls: ['material-controls.component.css'],
})

export class MaterialControlsComponent {
  isDarkTheme: boolean = false;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  constructor() {
    // Update the value for the progress-bar on an interval.
    // setInterval(() => {
    //   this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    // }, 200);
  }
}
