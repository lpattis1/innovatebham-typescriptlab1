let myName: string = "Lauren";
let myCareer: string = "Web Developer";
let myDescription: string =
  "I am a developer from Birmingham, Alabama. In my spare time I enjoy video games, spending time with my family and dog, reading, writing, and hiking.";
let myInterests: string[] = [
  "Video Games",
  "Web Development",
  "Playing with my dog",
  "Reading and writing",
  "Hiking",
  "Music",
];
let previousJobs: { company: string; position: string }[] = [
  {
    company: "Morisset Contracting",
    position: "Painter",
  },

  {
    company: "Ruby Tuesday",
    position: "Hostess",
  },

  {
    company: "Brag House",
    position: "Graphic Designer",
  },
];

let mySkills: string[] = [
  "Web development",
  "Problem solving",
  "Graphic design",
  "Adaptive",
];

console.log(`My name: ${myName.toUpperCase()}`);
console.log(`My career: ${myCareer}`);
console.log(`Description: ${myDescription}`);
console.log(`My interests:`);
console.log(myInterests[0]);
console.log(myInterests[1]);
console.log(myInterests[2]);
console.log(myInterests[3]);
console.log(myInterests[4]);
console.log(myInterests[5]);
console.log(`Previous jobs:`);
console.log(previousJobs[0]);
console.log(previousJobs[1]);
console.log(previousJobs[2]);

const displayPosition = (company: string, position: string) => {
  console.log(`Company: ${company}, Position: ${position}`);
};

const displaySkill = (skill: string, isCool: boolean) => {
  if (isCool) {
    console.log(`BAM: ${skill}`);
  } else {
    console.log(`Not cool: ${skill}`);
  }
};

displayPosition(previousJobs[0].company, previousJobs[0].position);
displayPosition(previousJobs[1].company, previousJobs[1].position);
displayPosition(previousJobs[2].company, previousJobs[2].position);

displaySkill(mySkills[0], true);
displaySkill(mySkills[1], false);
displaySkill(mySkills[2], true);
displaySkill(mySkills[3], false);
