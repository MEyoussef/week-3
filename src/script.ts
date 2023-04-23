// 1
// Write Your Code Here
type n = number;
// Do Not Edit Here
let myData: n;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here

// 2
// Write Your Code Here
type mix = number | boolean;
// Do Not Edit Here
let myInfo: mix;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here

// // 3
// Write Your Code Here

// Do Not Edit Here
type Info = mix & any
function showInfo(data: Info) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));

type Full = Info;
function showFullInfo(data: Full) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
  console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));

// 4
type possible_results = true | false;
function yesOrNo(val: number): possible_results {
  if (val > 10) {
    return true;
  } else {
    return false;
  }
}

// Do Not Edit Here
// console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False

// 5
type custom = "YES" | "NO";
function isHeOld(age: number): custom | number {
  if (age > 40) {
    return "YES";
  } else {
    return "NO";
  }
}

// Do Not Edit Here
// console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"

// 6
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
let post: readonly [number, string, boolean] = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here
const [id, title, state] = post;
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true

// 7
function Insane(number: number): number {
  return number - (Game.Medium - Game.Easy / 2);
}
// Create Enums + Function Here
enum Game {
  Easy = 100,
  Medium = Easy - 20, // 80
  Hard = Medium - Easy / 2, // 30
  Insane = Medium - Hard * 2,
}
Insane(Game.Insane);
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20

// 8
type ageThing = number | string;
const user: {
  username: string;
  age: ageThing;
  website?: string;
  skills: {
    frontEnd: string[];
    backEnd: any[];
  };
} = {
  username: "Elzero",
  age: 40,
  website: "Elzero.org",
  skills: {
    frontEnd: ["HTML", "CSS", "JS"],
    backEnd: ["PHP", "Python"],
  },
};

console.log(user.username);
console.log(user.age);
console.log(user.skills.backEnd);
console.log("####".repeat(20));
// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);

console.log(user.username);
console.log(user.age);
console.log(user.skills.backEnd);
