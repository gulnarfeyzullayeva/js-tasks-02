// // Task-1
const groupA = ["Ali", "Aysel", "Murad"];
const groupB = ["Leyla", "Orxan", "Nigar"];
const allStudents = ["Umid", ...groupA, ...groupB];
console.log(allStudents);

// Task-2
const students = {
    name: "Ali",
    age: 20,
    city: "Baku",
    profession: "Developer",
    skills: ["HTML", "CSS", "JavaScript"]
};

const {name, age, profession} = students;
const [skill1 , skill2] = students.skills;
console.log(name, age, profession, skill1, skill2, country = "Azerbaijan");
