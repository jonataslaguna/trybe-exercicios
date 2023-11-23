class Superclass {
    public isSuper: boolean;

    constructor(){
        this.isSuper = true;
    }

    public sayHello() {
        console.log('Hello World!!')
    }
};

class SubClass extends Superclass {
    constructor() {
        super()
        this.isSuper = false;
    }
};

const myFunc = ( obj: Superclass) => {
    obj.sayHello();
    console.log(obj);
    console.log(obj.isSuper ? 'Super!' : 'Sub!');
};

const sup = new Superclass();
const sub = new SubClass();

myFunc(sup);
myFunc(sub);