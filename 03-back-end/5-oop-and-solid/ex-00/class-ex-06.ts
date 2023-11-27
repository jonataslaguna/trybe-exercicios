import Person from "./class-ex-03";

export default class Student extends Person {
    private _enrollment = String();
    private _examsGrades: number[] = [];
    private _assignmentsGrades: number[] = [];
  
    constructor(name: string, birthDate: Date) {
      super(name, birthDate);
      this.enrollment = this.generateEnrollment();
    }
  
    get enrollment(): string {
      return this._enrollment;
    }
  

    set enrollment(value: string) {
      if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
  
      this._enrollment = value;
    }
  
    get examsGrades(): number[] {
      return this._examsGrades;
    }
  
    set examsGrades(value: number[]) {
      if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
  
      this._examsGrades = value;
    }
  
    get assignmentsGrades(): number[] {
      return this._assignmentsGrades;
    }
  
    set assignmentsGrades(value: number[]) {
      if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
  
      this._assignmentsGrades = value;
    }
  

    generateEnrollment(): string {
      const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
  
      return `STU${randomStr}`;
    }
  }

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];

console.log(carolina);
console.log(lucas);
