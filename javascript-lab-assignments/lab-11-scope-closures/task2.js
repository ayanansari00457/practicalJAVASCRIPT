
 // Name: Ayan Ansari
 // Roll No.: 2510303149
 // Assignment: 11, Task 2

function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
