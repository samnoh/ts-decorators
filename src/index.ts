class User {
    constructor(public name: string) {}

    @testDecorator
    printName(): void {
        console.log(this.name);
    }
}

function testDecorator(target: any, key: string, descriptor: any): void {
    console.log('Target', target); // User
    console.log('Key', key); // printName
    console.log('Descriptor', descriptor); // property descriptor
}
