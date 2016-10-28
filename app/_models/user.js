"use strict";
var User = (function () {
    function User() {
    }
    User.prototype.getFullName = function () {
        return this.first_name + ' ' + this.last_name;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map