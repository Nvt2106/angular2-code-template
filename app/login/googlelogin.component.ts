import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

import { AppContainerComponent } from '../app-container.component';

// Google's login API namespace
declare const gapi:any;

@Component({
    moduleId: module.id,
    selector: 'google-login',
    templateUrl: 'googlelogin.component.html'
})

export class GoogleLoginComponent {

    constructor(private router: Router,
        private authenticationService: AuthenticationService,
        private appContainer: AppContainerComponent) { }

    // Angular hook that allows for interaction with elements inserted by the rendering of a view
    ngAfterViewInit() {
        var that = this;
        // Signout if already signed in
        gapi.load('auth2', function() {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            var auth2 = gapi.auth2.init({
                client_id: '60286824468-tiuo7kh57c7e2ja6hvsobirjpst714n1.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                // Request scopes in addition to 'profile' and 'email'
                //scope: 'additional_scope'
            })
            .then(() => that.logout());
        });
    }

    logout(): void {
        var auth2 = gapi.auth2.getAuthInstance().signOut().then(() => {
            this.renderLogin();
        });
    }

    renderLogin(): void {
        // console.log('gapi.signin2.render');
        gapi.signin2.render(
            'gdbtn',
            {
                'scope': 'profile',
                'longtitle': true,
                'width': 240,
                'theme': 'light',
                'onsuccess': (resp) => this.onGoogleLoginSuccess(resp),
                'onfailure': () => this.onGoogleLoginFailed()
            });
    }

    // Triggered after a user successfully logs in using the Google external login provider.
    onGoogleLoginSuccess(resp) {
        // console.log('onGoogleLoginSuccess');
        var source = 'google';
        var token = resp.Zi.access_token;

        this.authenticationService.login(source, token)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.appContainer.reload();
                    
                    this.router.navigate(['/']);
                } else {
                    // login failed
                    // TODO
                }
            });
    }

    onGoogleLoginFailed() {
        console.log('onGoogleLoginFailed');
    }
}