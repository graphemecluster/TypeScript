//// [esDecorators-classDeclaration-methods-nonStaticAbstract.ts]
declare let dec: any;

const method3 = "method3";

abstract class C {
    @dec(1) abstract method1(): void;
    @dec(2) abstract ["method2"](): void;
    @dec(3) abstract [method3](): void;
}


//// [esDecorators-classDeclaration-methods-nonStaticAbstract.js]
const method3 = "method3";
class C {
}
