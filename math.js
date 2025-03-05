// MANUAL TESTING WITH CONSOLE.LOG
// const sum = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(sum(-1, -10));


// DO NOT CODE FIRST

const multiply = (num1, num2) => {
  const num1AsNumber = Number(num1);
  const num2AsNumber = Number(num2);

  if(!num1AsNumber && num1AsNumber !== 0 && num1 !== undefined) {
    return 'invalid entry';
  };

  if(num2 === undefined) {
    return 0;
  }

  if(!num2AsNumber && num2AsNumber !== 0) {
    return `invalid entry`;
  }

  return num1AsNumber * num2AsNumber;
}

module.exports = multiply;