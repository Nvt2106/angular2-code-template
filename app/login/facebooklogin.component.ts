import { Component, ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

import { AppContainerComponent } from '../app-container.component';

declare const FB:any;

@Component({
    moduleId: module.id,
    selector: 'facebook-login',
    templateUrl: 'facebooklogin.component.html'
})

export class FacebookLoginComponent {

    constructor(private router: Router,
        private authenticationService: AuthenticationService,
        private appContainer: AppContainerComponent,
        private appRef: ApplicationRef) {

        FB.init({
            appId      : '1050842591695353',
            cookie     : false,  // enable cookies to allow the server to access the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });
    }

    onFacebookLoginClick() {
        FB.login(response => {
            this.statusChangeCallback(response);
        });
    }

    statusChangeCallback(resp) {
        if (resp.status === 'connected') {
            // connect here with your server for facebook login by passing access token given by facebook
            var source = 'facebook';
            var token = resp.authResponse.accessToken;

            this.authenticationService.login(source, token)
                .subscribe(result => {
                    if (result === true) {
                        // login successful
                        this.appContainer.reload();
                        
                        this.router.navigate(['/']);

                        this.appRef.tick();
                    } else {
                        // login failed
                        // TODO
                    }
                });
            
        } else if (resp.status === 'not_authorized') {
            
        } else {
            
        }
    };
}