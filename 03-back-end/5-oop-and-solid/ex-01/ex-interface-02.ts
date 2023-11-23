interface MyInterface {
    myNumber: number;
    myFunc(myParam:number): string
};

class MyClass implements MyInterface {
    
    constructor(
    public myNumber:number,
    ) {};

    myFunc(myParam: number):string{
        return (this.myNumber + myParam).toString();
    } 
};

const obj = new MyClass(10);

console.log(obj.myFunc(5));


