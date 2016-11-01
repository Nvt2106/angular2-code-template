"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var authentication_service_1 = require('../_services/authentication.service');
var app_container_component_1 = require('../app-container.component');
var GoogleLoginComponent = (function () {
    function GoogleLoginComponent(router, authenticationService, appContainer) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.appContainer = appContainer;
    }
    // Angular hook that allows for interaction with elements inserted by the rendering of a view
    GoogleLoginComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        // Signout if already signed in
        gapi.load('auth2', function () {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            var auth2 = gapi.auth2.init({
                client_id: '60286824468-tiuo7kh57c7e2ja6hvsobirjpst714n1.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
            })
                .then(function () { return that.logout(); });
        });
    };
    GoogleLoginComponent.prototype.logout = function () {
        var _this = this;
        var auth2 = gapi.auth2.getAuthInstance().signOut().then(function () {
            _this.renderLogin();
        });
    };
    GoogleLoginComponent.prototype.renderLogin = function () {
        var _this = this;
        // console.log('gapi.signin2.render');
        gapi.signin2.render('gdbtn', {
            'scope': 'profile',
            'longtitle': true,
            'width': 240,
            'theme': 'light',
            'onsuccess': function (resp) { return _this.onGoogleLoginSuccess(resp); },
            'onfailure': function () { return _this.onGoogleLoginFailed(); }
        });
    };
    // Triggered after a user successfully logs in using the Google external login provider.
    GoogleLoginComponent.prototype.onGoogleLoginSuccess = function (resp) {
        var _this = this;
        // console.log('onGoogleLoginSuccess');
        var source = 'google';
        var token = resp.Zi.access_token;
        this.authenticationService.login(source, token)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.appContainer.reload();
                _this.router.navigate(['/']);
            }
            else {
            }
        });
    };
    GoogleLoginComponent.prototype.onGoogleLoginFailed = function () {
        console.log('onGoogleLoginFailed');
    };
    GoogleLoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'google-login',
            templateUrl: 'googlelogin.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, app_container_component_1.AppContainerComponent])
    ], GoogleLoginComponent);
    return GoogleLoginComponent;
}());
exports.GoogleLoginComponent = GoogleLoginComponent;
//# sourceMappingURL=googlelogin.component.js.map