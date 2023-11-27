import Person from "./class-ex-03";
import Subject from "./class-ex-07";
import Employee from "./interface-exercise";

class Teacher extends Person implements Employee{
    private _subject: Subject;
    private _registration = String();
    private _admissionDate: Date;

    constructor(name: string, birthDate: Date, private _salary: number, subject: Subject) {
        super(name, birthDate);
    
        this._subject = subject;
        this.salary = _salary;
        this._admissionDate = new Date();
        this.registration = this.generateRegistration();
      }

    get subject(): Subject {
        return this._subject;
    }
    set subject(value: Subject) {
        this._subject = value;
    }

    public get registration() {
        return this._registration;
    }
    public set registration(value) {
        this._registration = value;
    }

    public get admissionDate(): Date {
        return this._admissionDate;
    }
    public set admissionDate(value: Date) {
        if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

        this._admissionDate = value;
    }

    get salary(): number {
        return this._salary;
    }
    
    set salary(value: number) {
        if (value < 0) throw new Error('O salário não pode ser negativo.');
    
        this._salary = value;
    }

    generateRegistration():string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `PRF${randomStr}`;
    }

}

const theacher1 = new Teacher('Ana',new Date('06/01/1990'), -2.000, new Subject('Matemática'))

console.log(theacher1)