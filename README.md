# TypeScript Decorators

## `TIL`

### Decorators

-   Supports annotating or modifying classes and class members
-   Experimental feature of TS

-   tsconfig.json

```json
"experimentalDecorators": true,
"emitDecoratorMetadata": true
```

-   Usage

```typescript
class User {
    constructor(public name: string) {}

    @testDecorator
    printName(): void {
        console.log(this.name);
    }
}

function testDecorator(target: User, key: string, desc: PropertyDescriptor): void {
    console.log('Target', target); // User -> prototype
    console.log('Key', key); // printName -> property/method/accessor
    console.log('Descriptor', desc); // property descriptor
}
```

```typescript
class User {
    constructor(public name: string) {}

    printName(@parameterDecorator greetings: string): void {
        console.log(greetings + '! ' + this.name);
    }
}

function parameterDecorator(target: User, key: string, index: number): void {
    console.log(key, index); // printName 0
}

new User('smith').printName('Hello');
```
