function blueStar() {
    console.log("blueStar(): factory evaluated");

    // Target is the object to which the decorator is applied
    // The propertyKey is the name of the method to which the decorator is applied. 
    /*
        The descriptor is an object that contains information about the method. It has properties that can be used to modify the method's behavior. 
        A PropertyDescriptor typically includes:
        
        value: The actual function of the method.
        writable: Indicates if the property is writable.
        enumerable: Indicates if the property is enumerable.
        configurable: Indicates if the property can be redefined.
    */
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        if (!target.stickers) { // This is needed because there can be class that do not have the stickers property
            target.stickers = [];
        }
        target.stickers.push('Blue Star');
        console.log("blueStar(): called");
    };
}

function redHeart() {
    console.log("redHeart(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        if (!target.stickers) {
            target.stickers = [];
        }
        target.stickers.push('Red Heart');
        console.log("redHeart(): called");
    };
}

class ToyCar {
    stickers: Array<string>;

    @blueStar()
    @redHeart()
    drive() {
        console.log("The toy car is driving!");
        if (this.stickers) {
            console.log("Stickers on the car:", this.stickers.join(', '));
        }
    }
}
  
const myToyCar = new ToyCar();
myToyCar.drive();

function user() {
    console.log("Came To user factory!");

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`The method user() decorator is applied: ${propertyKey}`);

        console.log(`The user: ${target.username}`);
    }
}
  
function subscription() {
    console.log("Came To subscription factory!");

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`The method subscription() decorator is applied: ${propertyKey}`);

        if(!target.subscription) {
            target.subscription = true;
        }

        console.log(`Setting subscription for the user: ${target.subscription}`);
    }
}

class UserSubscription {
    username: string;
    subscription: boolean;

    constructor(usrName: string) {
        this.username = usrName;
    }

    @subscription()
    @user()
    userData() {}
}

const userSubscription = new UserSubscription("Kraken");
userSubscription.userData();