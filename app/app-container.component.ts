import { Component, OnInit, Injectable, Input } from '@angular/core';
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
  @Input()
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
      this.currentUser.username = savedUser.username;
      this.currentUser.token = savedUser.token;

      // TODO
      this.currentUser.first_name = 'Tuan';
      this.currentUser.last_name = 'Nguyen';
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
