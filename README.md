# TypeScript Decorators

## TIL

### Decorators

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

function testDecorator(target: any, key: string, descriptor: any): void {
    console.log('Target', target); // User -> prototype
    console.log('Key', key); // printName -> property/method/accessor
    console.log('Descriptor', descriptor); // property descriptor
}
```
