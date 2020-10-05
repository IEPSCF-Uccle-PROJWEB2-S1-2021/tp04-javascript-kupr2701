
const minimun = function (a, b) {
  if (b < a) {
    return b;
  }
  return a;
}


const maximun = function (a, b) {
  if (b <= a) {
    return a;
  }
  return b;
}

function reduce(numbers, fn) {
  let result = numbers[0];
  if (numbers.length < 2) {
    return null;
  } else {
    result = fn( numbers[1] , result )
  } if (numbers.length > 2) {
    for (let i = 2; i < numbers.length; ++i) {
      result = fn(numbers[i],result);
    }
  }
  return result;

}
const myTestNumbers = [5, 8, 13, 21, 34, 610, 55, 3, 89, 144, 233, 377];
const out = reduce(myTestNumbers, minimun);
const out1 = reduce(myTestNumbers, maximun);
console.log(out);
console.log(out1);


const bool = function (n) {
   return n >= 30;
   }

function filter(numbers, fn) {
  const result = []; let i=0;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (fn(element)) {
      result[i] = element;
      ++i;
    } else {
      continue;
    }

  }
  return result;
}
const myTestNumbers2 = [5, 8, 13, 21, 34, 610, 55, 3, 89, 144, 233, 377];
const out2 = filter(myTestNumbers2, bool);
console.log(out2);

