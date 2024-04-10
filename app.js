console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(number) {
    return (plusNumber) => {
        return plusNumber + number;
    }
}
let plus15 = plus(15);
console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];
users.forEach((user) => {
    console.log(user.name);
});

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let mappedUsers = users.map((element) => {
    return {
        name : element.name,
        socre : element.score
    };
});
console.log(mappedUsers);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let filteredUsers = users.filter((element) => {
    console.log(element);
    return element.isActive;
});

console.log(filteredUsers);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
users.sort((a, b) => {
  return b.score - a.score;
});
console.log(users);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");
let reducedValue = users.reduce((accumulator, curValue, index) => {
  console.log(index, accumulator, curValue.score);
  return accumulator + curValue.score;
}, 0);

let value = users.reduce((acc, curr) => acc + curr.score, 0);
console.log(`Sum: ${reducedValue}`);
let averageScore = reducedValue / users.length;
console.log(`Average: ${averageScore}`);