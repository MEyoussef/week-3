"use strict";
// Do Not Edit The Code Below
let user = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        return this.username;
    }
};
user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property
// Do Not Edit The Code Below
let client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    }
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
let creature = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
};
// Create Class Here
class Player {
    constructor(name, type, level, playing) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.playing = playing;
    }
    details() {
        if (this.name === "Osama" || this.name === "Amr") {
            return `VIP ${this.name}, Type Is ${this.type} Level Is ${this.level}`;
        }
        else {
            return `${this.name}, Type Is ${this.type} Level Is ${this.level}`;
        }
    }
}
// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
class Shorten {
    constructor(id, username, title) {
        this.i = id;
        this.u = username;
        this.t = title;
    }
}
let tester = new Shorten(100, "Elzero", "Developer");
console.log(tester.i);
console.log(tester.u);
//# sourceMappingURL=script.js.map