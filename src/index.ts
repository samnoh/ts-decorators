class User {
    constructor(public name: string) {}

    printName(@parameterDecorator greetings: string): void {
        // console.log(greetings + '! ' + this.name);
    }
}

function parameterDecorator(target: User, key: string, index: number): void {
    console.log(key, index);
}

new User('smith').printName('Hello');

//

@classDecorator
class Greeter {
    property = 'property';
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    };
}

console.log(new Greeter('world'));
