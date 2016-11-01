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
var FacebookLoginComponent = (function () {
    function FacebookLoginComponent(router, authenticationService, appContainer) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.appContainer = appContainer;
        FB.init({
            appId: '1050842591695353',
            cookie: false,
            xfbml: true,
            version: 'v2.5' // use graph api version 2.5
        });
    }
    FacebookLoginComponent.prototype.onFacebookLoginClick = function () {
        var _this = this;
        FB.login(function (response) {
            _this.statusChangeCallback(response);
        });
    };
    FacebookLoginComponent.prototype.statusChangeCallback = function (resp) {
        var _this = this;
        if (resp.status === 'connected') {
            // connect here with your server for facebook login by passing access token given by facebook
            var source = 'facebook';
            var token = resp.authResponse.accessToken;
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
        }
        else if (resp.status === 'not_authorized') {
        }
        else {
        }
    };
    ;
    FacebookLoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'facebook-login',
            templateUrl: 'facebooklogin.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, app_container_component_1.AppContainerComponent])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());
exports.FacebookLoginComponent = FacebookLoginComponent;
//# sourceMappingURL=facebooklogin.component.js.map