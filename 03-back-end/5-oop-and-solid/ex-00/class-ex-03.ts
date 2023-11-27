class Studdent {
    private _registration: string;
    private _name: string;
    private _testResults: number[] = Array();
    private _workNotes: number[] = Array();
    
    constructor(
        registration: string, 
        name: string,
        testResults: number[],
        workNotes: number[]
    ){
        this._registration = registration;
        this._name = name;
        this.testResults = testResults;
        this.workNotes = workNotes;
    }

     get registration(): string {
        return this._registration;
    }

     set registration(value: string) {
        this._registration = value;
    }

     get name(): string {
        return this._name;
    }

     set name(value: string) {
        this._name = value;
    }

     get testResults(): number[] {
        return this._testResults;
    }

     set testResults(value: number[]) {
        if(value.length === 4) {
           this._testResults = value;
        }
    }

     get workNotes(): number[] {
        return this._workNotes;
    }

     set workNotes(value: number[]) {
        if(value.length === 2) {
            this._workNotes = value;
         }
    }

    sumNotes():number {
        return [...this.testResults, ...this.workNotes]
        .reduce((previousNote, note) => previousNote + note, 0);
    }

    averageNotes() {
        const sumGrades = this.sumNotes();
        const length = this.testResults.length + this.workNotes.length;
        const average = (sumGrades / length).toFixed(2)
        return average;
    }
}


export default class Person {
    private _name: string = '';
    private _birthDate: Date;

    constructor(
        name: string,
        birthDate: Date
    ) {
        this._birthDate = birthDate;
        this._name = name;
        this.validatePerson();
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    set birthDate(value: Date) {
        this._birthDate = value;
    }

    static getAge(value: Date){
        const diff = Math.abs(new Date().getTime() - value.getTime());
        const yearMs = 31_536_000_000;
        return Math.floor(diff / yearMs );
    }

    private validateName(value: string): void {
        if(value.length < 3) throw new Error ('O nome precisa ter mais que 2 caracteres')
    }

    private validabirthDate(value: Date): void {
        if(value.getTime() > new Date().getTime()) throw new Error ('A data não pode ser uma data no futuro');

        if(Person.getAge(value) > 120) throw new Error ('Idade inválida');
    }

    private validatePerson(): void {
        this.validateName(this.name);
        this.validabirthDate(this.birthDate);
     }
}

/* const person = new Person('Jonatas', new Date('1900/01/06')) */


