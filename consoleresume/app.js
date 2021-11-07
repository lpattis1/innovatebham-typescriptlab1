var myName = "Lauren";
var myCareer = "Web Developer";
var myDescription = "I am a developer from Birmingham, Alabama. In my spare time I enjoy video games, spending time with my family and dog, reading, writing, and hiking.";
var myInterests = [
    "Video Games",
    "Web Development",
    "Playing with my dog",
    "Reading and writing",
    "Hiking",
    "Music",
];
var previousJobs = [
    {
        company: "Morisset Contracting",
        position: "Painter"
    },
    {
        company: "Ruby Tuesday",
        position: "Hostess"
    },
    {
        company: "Brag House",
        position: "Graphic Designer"
    },
];
var mySkills = [
    "Web development",
    "Problem solving",
    "Graphic design",
    "Adaptive",
];
console.log("My name: " + myName.toUpperCase());
console.log("My career: " + myCareer);
console.log("Description: " + myDescription);
console.log("My interests:");
console.log(myInterests[0]);
console.log(myInterests[1]);
console.log(myInterests[2]);
console.log(myInterests[3]);
console.log(myInterests[4]);
console.log(myInterests[5]);
console.log("Previous jobs:");
console.log(previousJobs[0]);
console.log(previousJobs[1]);
console.log(previousJobs[2]);
var displayPosition = function (company, position) {
    console.log("Company: " + company + ", Position: " + position);
};
var displaySkill = function (skill, isCool) {
    if (isCool) {
        console.log("BAM: " + skill);
    }
    else {
        console.log("Not cool: " + skill);
    }
};
displayPosition(previousJobs[0].company, previousJobs[0].position);
displayPosition(previousJobs[1].company, previousJobs[1].position);
displayPosition(previousJobs[2].company, previousJobs[2].position);
displaySkill(mySkills[0], true);
displaySkill(mySkills[1], false);
displaySkill(mySkills[2], true);
displaySkill(mySkills[3], false);
