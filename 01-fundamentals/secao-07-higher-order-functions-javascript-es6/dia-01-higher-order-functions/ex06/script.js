const numberChecker = (myNumber, number) => myNumber === number

const lotteryResult = (myNumber, callBack) => {
   const number = Math.floor((Math.random()*5)+1);

   return callBack(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
}

console.log(console.log(lotteryResult(2, numberChecker)));