var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.printName = function () {
        console.log(this.name);
    };
    __decorate([
        testDecorator
    ], User.prototype, "printName");
    return User;
}());
function testDecorator(target, key, desc) {
    console.log('Target', target); // User
    console.log('Key', key); // printName
    console.log('Descriptor', desc.value); // property descriptor
}
