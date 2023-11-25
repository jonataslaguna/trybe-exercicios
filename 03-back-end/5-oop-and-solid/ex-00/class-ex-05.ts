class Data {
 private _day: number;
 private _month: number;
 private _year: number;

 constructor(
    day:number,
    month: number,
    year: number,
 ){
    const dateStr = `${year}-${month}-${day}`

    if (new Date(dateStr).getDate() !== day) {
        this._day = 1;
        this._month = 1;
        this._year = 1900;
      } else {
        this._day = day;
        this._month = month;
        this._year = year;
      }
 }

 get month(): number {
    return this._month; 
}

 getMonthName() {
    const months = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro',
      ];
  
      return months[this._month - 1];
}

isLeapYear() {
    return this._year % 4 === 0;
}


}

const test = new Data(6, 1, 1996);

console.log(test.isLeapYear())