// function blueStar() {
//     console.log("blueStar(): factory evaluated");
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
//     // Target is the object to which the decorator is applied
//     // The propertyKey is the name of the method to which the decorator is applied. 
//     /*
//         The descriptor is an object that contains information about the method. It has properties that can be used to modify the method's behavior. 
//         A PropertyDescriptor typically includes:
//         value: The actual function of the method.
//         writable: Indicates if the property is writable.
//         enumerable: Indicates if the property is enumerable.
//         configurable: Indicates if the property can be redefined.
//     */
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         if (!target.stickers) { // This is needed because there can be class that do not have the stickers property
//             target.stickers = [];
//         }
//         target.stickers.push('Blue Star');
//         console.log("blueStar(): called");
//     };
// }
// function redHeart() {
//     console.log("redHeart(): factory evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         if (!target.stickers) {
//             target.stickers = [];
//         }
//         target.stickers.push('Red Heart');
//         console.log("redHeart(): called");
//     };
// }
// class ToyCar {
//     stickers: Array<string>;
//     @blueStar()
//     @redHeart()
//     drive() {
//         console.log("The toy car is driving!");
//         if (this.stickers) {
//             console.log("Stickers on the car:", this.stickers.join(', '));
//         }
//     }
// }
// const myToyCar = new ToyCar();
// myToyCar.drive();
function user() {
    console.log("Came To user factory!");
    return function (target, propertyKey, descriptor) {
        console.log("The method user() decorator is applied: ".concat(propertyKey));
        console.log("The user: ".concat(target.username));
    };
}
function subscription() {
    console.log("Came To subscription factory!");
    return function (target, propertyKey, descriptor) {
        console.log("The method subscription() decorator is applied: ".concat(propertyKey));
        if (!target.subscription) {
            target.subscription = true;
        }
        console.log("Setting subscription for the user: ".concat(target.subscription));
    };
}
var UserSubscription = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _userData_decorators;
    return _a = /** @class */ (function () {
            function UserSubscription(usrName) {
                this.username = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.username = usrName;
            }
            UserSubscription.prototype.userData = function () { };
            return UserSubscription;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userData_decorators = [subscription(), user()];
            __esDecorate(_a, null, _userData_decorators, { kind: "method", name: "userData", static: false, private: false, access: { has: function (obj) { return "userData" in obj; }, get: function (obj) { return obj.userData; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var userSubscription = new UserSubscription("Kraken");
userSubscription.userData();
