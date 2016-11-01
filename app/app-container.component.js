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
var user_1 = require('./_models/user');
var authentication_service_1 = require('./_services/authentication.service');
var AppContainerComponent = (function () {
    function AppContainerComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.alreadyLogin = false;
    }
    AppContainerComponent.prototype.ngOnInit = function () {
        this.reload();
    };
    AppContainerComponent.prototype.reload = function () {
        var savedUser = JSON.parse(localStorage.getItem('currentUser'));
        if (savedUser) {
            this.currentUser = new user_1.User();
            this.currentUser.first_name = savedUser.first_name;
            this.currentUser.last_name = savedUser.last_name;
            this.currentUser.full_name = this.currentUser.getFullName();
            this.alreadyLogin = true;
        }
    };
    AppContainerComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.alreadyLogin = false;
        this.router.navigate(['/login']);
    };
    AppContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main-app',
            templateUrl: 'app-container.component.html',
            styleUrls: ['app-container.component.css']
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService])
    ], AppContainerComponent);
    return AppContainerComponent;
}());
exports.AppContainerComponent = AppContainerComponent;
//# sourceMappingURL=app-container.component.js.map