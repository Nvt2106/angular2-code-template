import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './_models/user';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'main-app',
  templateUrl: 'app-container.component.html',
  styleUrls: [ 'app-container.component.css' ]
})

@Injectable()
export class AppContainerComponent {
  alreadyLogin = false;

  currentUser: User;

  constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }
  
  ngOnInit() {
    this.reload();
  }

  reload(): void {
    let savedUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (savedUser) {
      this.currentUser = new User();
      this.currentUser.first_name = savedUser.first_name;
      this.currentUser.last_name = savedUser.last_name;
      this.currentUser.full_name = this.currentUser.getFullName();
      
      this.alreadyLogin = true;
    }
  }

  logout(): void {
    this.authenticationService.logout();

    this.alreadyLogin = false;

    this.router.navigate(['/login']);
  }

}
