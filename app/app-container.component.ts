import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';

@Component({
  moduleId: module.id,
  selector: 'main-app',
  templateUrl: 'app-container.component.html',
  styleUrls: [ 'app-container.component.css' ]
})

export class AppContainerComponent {
  alreadyLogin = false;
  currentUser: User;
  
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (this.currentUser) {
      this.currentUser.full_name = this.currentUser.getFullName();
      
      this.alreadyLogin = true;
    }
  }
}
