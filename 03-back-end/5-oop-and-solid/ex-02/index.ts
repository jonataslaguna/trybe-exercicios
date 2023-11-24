abstract class Character {

    talk(): void {};

    specialMove(): void {};
};

class MeleeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
        super();
    };

    talk(){
        console.log(`Hi, I'm ${this._name}. I attack at close range.`);
    };

    specialMove(){
        console.log(`${this._name} used ${this._specialMoveName}!`);
    };
};

class LongRangeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
        super();
    };

    talk(){
        console.log(`Hi, I'm ${this._name}. I can attack from a long range.`);
    };

    specialMove(){
        console.log(`${this._name} used ${this._specialMoveName}!`);
    };
};

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');

const samus =  new LongRangeCharacter('Samus', 'Zero Laser');


yoshi.talk();
yoshi.specialMove();
samus.talk();
samus.specialMove();