const Calculate = {
  factorial(inputNum) {
    if (inputNum === 0){
      return 1;
    } else {
      let factorialResult = inputNum;
      for (let i = inputNum - 1; i > 0; i--) {
        factorialResult *= i;
      }
      return factorialResult;
    }
  }
}

module.exports = Calculate;
