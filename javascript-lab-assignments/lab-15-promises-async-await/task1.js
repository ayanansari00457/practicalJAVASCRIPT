
 // Name: Ayan Ansari
 // Roll No.: 2510303149
 // Assignment: 15, Task 1

function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 0 && marks <= 100) {
      resolve(marks);
    } else {
      reject(new Error("Marks out of range"));
    }
  });
}

checkMarks(80)
  .then((value) => console.log(value));
