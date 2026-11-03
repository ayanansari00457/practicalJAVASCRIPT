
 // Name: Ayan Ansari
 // Roll No.: 2510303149
 // Assignment: 14, Task 3

let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Tick " + count);

  if (count === 3) {
    clearInterval(intervalId);
  }
}, 200);
