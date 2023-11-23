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

const studdent1 = new Studdent('149237', 'Jonatas', [8,10,9,10], [8,10]);

console.log(studdent1)

console.log(studdent1.averageNotes())