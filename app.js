let mystudents = [
    {
      name: "omar",
      age: 20,
      major: "cs",
    },
    {
      name: "anas",
      age: 23,
      major: "MIs",
    },
    {
      name: "sara",
      age: 22,
      major: "IT",
    },
    {
      name: "ali",
      age: 24,
      major: "SE",
    },
    {
      name: "reem",
      age: 21,
      major: "CS",
    },
    {
      name: "khaled",
      age: 25,
      major: "MIS",
    },
    {
      name: "lina",
      age: 23,
      major: "Data Science",
    },
    {
      name: "mohammed",
      age: 26,
      major: "AI",
    },
    {
      name: "fatima",
      age: 22,
      major: "Cybersecurity",
    },
    {
      name: "ahmad",
      age: 24,
      major: "Cloud Computing",
    },
    {
      name: "nour",
      age: 21,
      major: "IT",
    },
    {
      name: "tariq",
      age: 25,
      major: "Software Engineering",
    }
  ];

//   filter the array
  function check(student) {
    return student.age > 23;
}

let filteredStudents = mystudents.filter(check);
console.log(filteredStudents);


// reverse the array
  const result = mystudents.reverse()

console.log(result)
