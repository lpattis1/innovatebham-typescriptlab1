// Global variables
let personName: string = "Lauren";
let numberOfStates: number = 50;
let sum: number = 5 + 4;

// ----------------------

// Functions / Objects

// Say Hello Function - returns an alert that states "hello world" once when called.
function sayHello(greet: string) {
  console.log(greet);
  return;
}

sayHello("Hello World");

// Check Age Function - checks whether or not a user is old enough to view a page.

function checkAge(name: string, age: number) {
  if (age >= 21) {
    console.log(`Corngrats, ${name}! You are old enough to view this page.`);
  } else {
    console.log(`Sorry, ${name}, you are not old enough to view this page.`);
  }
}

const people: { name: string; age: number }[] = [
  {
    name: "Charles",
    age: 21,
  },

  {
    name: "Abby",
    age: 27,
  },

  {
    name: "Jake",
    age: 18,
  },

  {
    name: "Jessie",
    age: 17,
  },
];

checkAge(people[0].name, people[0].age);
checkAge(people[1].name, people[1].age);
checkAge(people[2].name, people[2].age);
checkAge(people[3].name, people[3].age);

// Get Length Function - checks the length of a string, etc.

function getLength(word: string) {
  console.log(word.length);
}

getLength(personName);

// ----------------------

// Arrays

// An array of vegetables

const veggies: string[] = ["Asparagus", "Broccoli", "Spinach", "Kale"];

veggies.forEach((veggie: string, i: number) => {
  console.log(`${i + 1} : ${veggie}`);
});

// --------------------

// Pet object

interface Pet {
  name: string;
  breed: string;
}

const petOne: Pet = {
  name: "Bailey",
  breed: "Chihuahua",
};

const petTwo: Pet = {
  name: "Pacey",
  breed: "Mini Schnauzer",
};

console.log(petOne, petTwo);

// ------------------------

// People array

let ppl: { name: string; age: number }[] = [
  {
    name: "Johnny",
    age: 15,
  },
  {
    name: "Brad",
    age: 46,
  },
  {
    name: "Big Brain Bill",
    age: 24,
  },
  {
    name: "Becky",
    age: 22,
  },
  {
    name: "Karen",
    age: 51,
  },
  {
    name: "Dr. Doom",
    age: 34,
  },
];

for (let i = 0; i < ppl.length; i++) {
  checkAge(ppl[i].name, ppl[i].age);
}

// --------------------

// Check string length

let checkedStr: any = getLength("Hello world");

if (checkedStr % 2 === 0) {
  console.log("The world is nice and even!");
} else {
  console.log("The world is an odd place!");
}
