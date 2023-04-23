"use strict";
// Do Not Edit Here
let myData;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here
// Do Not Edit Here
let myInfo;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
function yesOrNo(val) {
    if (val > 10) {
        return true;
    }
    else {
        return false;
    }
}
// Do Not Edit Here
// console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
function isHeOld(age) {
    if (age > 40) {
        return "YES";
    }
    else {
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
let post = [100, "Title", true]; // Good
// post.push("Elzero"); // Error => Cant Add
// Create Destructuring Here
const [id, title, state] = post;
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true
// 7
function Insane(number) {
    return number - (Game.Medium - Game.Easy / 2);
}
// Create Enums + Function Here
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = 20] = "Insane";
})(Game || (Game = {}));
Insane(Game.Insane);
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
const user = {
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
//# sourceMappingURL=script.js.map