const reverseAndNot = (num) => {
    let covertedNum = num.toString();
    let reversed = num.toString().split('').reverse().join('');
    return reversed + covertedNum;

  }
  
  console.log(reverseAndNot(1234));