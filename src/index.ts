@classDecorator
class User {
    constructor(public name: string) {}

    printName(@parameterDecorator greetings: string): void {
        // console.log(greetings + '! ' + this.name);
    }
}

function classDecorator(constructor: typeof User) {
    console.log(constructor);
}

function parameterDecorator(target: User, key: string, index: number): void {
    console.log(key, index);
}

new User('smith').printName('Hello');
