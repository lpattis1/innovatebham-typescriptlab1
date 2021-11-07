// Global variables
var personName = "Lauren";
var numberOfStates = 50;
var sum = 5 + 4;
// ----------------------
// Functions / Objects
// Say Hello Function - returns an alert that states "hello world" once when called.
function sayHello(greet) {
    console.log(greet);
    return;
}
sayHello("Hello World");
// Check Age Function - checks whether or not a user is old enough to view a page.
function checkAge(name, age) {
    if (age >= 21) {
        console.log("Corngrats, " + name + "! You are old enough to view this page.");
    }
    else {
        console.log("Sorry, " + name + ", you are not old enough to view this page.");
    }
}
var people = [
    {
        name: "Charles",
        age: 21
    },
    {
        name: "Abby",
        age: 27
    },
    {
        name: "Jake",
        age: 18
    },
    {
        name: "Jessie",
        age: 17
    },
];
checkAge(people[0].name, people[0].age);
checkAge(people[1].name, people[1].age);
checkAge(people[2].name, people[2].age);
checkAge(people[3].name, people[3].age);
// Get Length Function - checks the length of a string, etc.
function getLength(word) {
    console.log(word.length);
}
getLength(personName);
// ----------------------
// Arrays
// An array of vegetables
var veggies = ["Asparagus", "Broccoli", "Spinach", "Kale"];
veggies.forEach(function (veggie, i) {
    console.log(i + 1 + " : " + veggie);
});
var petOne = {
    name: "Bailey",
    breed: "Chihuahua"
};
var petTwo = {
    name: "Pacey",
    breed: "Mini Schnauzer"
};
console.log(petOne, petTwo);
// ------------------------
// People array
var ppl = [
    {
        name: "Johnny",
        age: 15
    },
    {
        name: "Brad",
        age: 46
    },
    {
        name: "Big Brain Bill",
        age: 24
    },
    {
        name: "Becky",
        age: 22
    },
    {
        name: "Karen",
        age: 51
    },
    {
        name: "Dr. Doom",
        age: 34
    },
];
for (var i = 0; i < ppl.length; i++) {
    checkAge(ppl[i].name, ppl[i].age);
}
// --------------------
// Check string length
var checkedStr = getLength("Hello world");
if (checkedStr % 2 === 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}
