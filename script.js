//Использовался следующий код на языке JavaScript (решение до числа 23):
var inputNumber = prompt("Введите число");
var initialFactorial = 1;
for (var i = 1; i <= inputNumber; i++) {
  initialFactorial *= i;
}

var fact = initialFactorial;

var countOfZeros = 0;
for (var m = 0; m <= initialFactorial; m++) {
  if (fact % 10 != 0) break;
  else {
    fact /= 10;
    countOfZeros += 1;
  }
}

alert(countOfZeros);
console.log("inputNumber: " + inputNumber);
console.log("factorial: " + initialFactorial);
console.log("countOfZeros: " + countOfZeros);



