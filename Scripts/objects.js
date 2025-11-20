let lastname = "Heredia"; // Primitive -> One person lastname
let lastnameList = ["Heredia", "Murrillo", "Rollins"];

// Object Literal
// pairs of key-value
let objectName = {
    key: "value"
};

let student1 = {
    name: "Thomas",
    lastname: "Lawson",
    age: 25,
    id: "12AXC",
    gender: "male",
    email: "thomas@sdgku.edu"
};

let student2 = {
    name: "Angel",
    lastname: "Heredia",
    age: 27,
    id: "45BXC",
    gender: "male",
    email: "maria@sdgku.edu"
};

let student3 = {
    name: "Tony",
    lastname: "Hawk",
    age: 32,
    id: "98TYZ",
    gender: "male",
    email: "tony@sdgku.edu"
};

let students = [student1, student2, student3];

console.log(students);

// How to access to an object value?
// How to print the student1's name?
console.log(student1.name);

// Create one single sentence with student1 name, age, and email
console.log(`Name: ${student1.name} is Age: ${student1.age} years old and is a Gender: ${student1.gender} and their email is Email: ${student1.email}`);


/// ACTIVITY:
// 1. Create two more student objects
// 2. Create an array to store student1, student2, and student