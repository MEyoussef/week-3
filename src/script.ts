// Edit The Interface To Fix The Problems
interface Member {
  id: number | string;
  username: string;
  country?: string;
  state: boolean;
  getName(): string;
}

// Do Not Edit The Code Below
let user: Member = { // Property 'country' is missing in type
  id: 100,
  username: "Elzero",
  state: true,
  getName() { // 'getName' does not exist in type 'Member'
    return this.username;
  }
}

user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property
// Create Interface Here
interface Client {
  id: number;
  username: string;
  active: boolean;
  discount: number;
  getPrice(price): number;
}
// Do Not Edit The Code Below
let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  }
}

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}

interface Superman extends Man, Bird {
  bodyType: string;
  origin: string;
}

let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton"
}
// Create Class Here
class Player {
  name: string;
  type: string;
  level: number | string;
  playing?: boolean;
  constructor(name: string, type: string, level: number | string, playing?: boolean) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.playing = playing;
  }
  details() {
    if(this.name === "Osama" || this.name === "Amr") {
      return `VIP ${this.name}, Type Is ${this.type} Level Is ${this.level}`;
    } else {
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
  i: number;
  u: string;
  t: string;
  constructor (id: number, username: string, title: string) {
    this.i = id;
    this.u = username;
    this.t = title;
  }
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.i);
console.log(tester.u);


// class Show {
//   constructor (private _title: string) {}
// }

// let tester = new Show("Elzero");

// console.log(tester.title); // Property 'title' does not exist on type 'Show'
// tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
// console.log(tester.title); // Property 'title' does not exist on type 'Show'

interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here
class Player2 {
  id: number;
  title: string;
  level: number | string
  constructor(id: number, title: string, level: number | string) {
    this.id = id;
    this.title = title;
    this.level = level;
  }
  logIn(): void {
    console.log("Logged In")
  }
  logOut(msg: string): void {
    console.log(`Logged Out, ${msg}`);
  }
}
let player100 = new Player2(100, "Elzero", 95);

console.log(player100.id); // 100
console.log(player100.title); // "Elzero"
console.log(player100.level); // 95
player100.logIn(); // Logged In
player100.logOut("Good Bye"); // Logged Out, Good Bye