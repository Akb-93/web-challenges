console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

const matchingPassword = SUPER_SECRET_PASSWORD === receivedPassword;

if (matchingPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;
const evenNumber = number % 2 === 0;
if (evenNumber) {
  console.log("even number");
} else {
  console.log("odd number");
}
// Part 3: Hotdogs
const numberOfHotdogs = 42;
const lessThenFive = numberOfHotdogs < 5;
const moreThenFive = numberOfHotdogs >= 5 && numberOfHotdogs < 100;
const lessThenMillion = numberOfHotdogs >= 100 && numberOfHotdogs < 1000000;
const moreThenMillion = numberOfHotdogs >= 10000000;

if (lessThenFive) {
  console.log("2.0 euro");
} else if (moreThenFive) {
  console.log("1.5 euro");
} else if (lessThenMillion) {
  console.log("1,0 euro");
} else if (moreThenMillion) {
  console.log("0,10 euro");
}
// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Time to study" : "Time to party!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const coachName = "Archibald";
const greeting = "Hello " + (userName === coachName ? "Coach" : userName) + "!";

console.log(greeting);
