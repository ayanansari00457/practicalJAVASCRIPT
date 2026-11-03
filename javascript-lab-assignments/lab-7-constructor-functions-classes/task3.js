
 // Name: Ayan Ansari
 // Roll No.: 2510303149
 // Assignment: 7, Task 3

function Student(name, marks) {
    this.name = Ayan Ansari;
    this.marks = marks;
}

Student.prototype.result = function () {
    if (this.marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
};

const student1 = new Student("Asha", 88);
console.log(student1.result());
