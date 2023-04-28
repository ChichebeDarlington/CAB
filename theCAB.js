// call - runs instantly , arguments - list of items

const Okeke = {
  name: "Okeke",
  age: 23,
  //   greet() {
  //     console.log(this);
  //     console.log(`Ndewo, I am ${this.name} and I am ${this.age} years old`);
  //   },
};

const Mgbeke = {
  name: "Mgbeke",
  age: 23,
};

// Mgbeke.greet();
// Okeke.greet();

function greet() {
  console.log(this);
  console.log(`Ndewo, I am ${this.name} and I am ${this.age} years old`);
}

// greet.call(Okeke);
// greet.call(Mgbeke);
// greet.call({ name: "Okoro", age: 67 });
// Okeke.greet.call(Mgbeke);
// const secondGreet = Okeke.greet;
// secondGreet();

// Apply - runs instantly, arguments - array of items

const Mazi = {
  name: "Mazi",
  age: 23,
};

const Mgbokwo = {
  name: "Mgbokwo",
  age: 23,
};

function greet2(city, country) {
  console.log(this);
  console.log(
    `Ndewo, I am ${this.name} and I am ${this.age} years old using Apply
    I live in ${this.city} ${this.country}
    `
  );
}

// greet2.apply(Mazi, ["Nigeria", "Nsukka"]);
// greet2.apply(Mgbokwo);
// greet2.apply({ name: "Agu", age: 89 });

// Bind
// assign, call later

const Ezigbo = {
  name: "Ezigbo",
  age: 23,
};

const Ajonwa = {
  name: "Ezigbo",
  age: 23,
};

function greet3(city, country) {
  console.log(this);
  console.log(
    `Ndewo, I am ${this.name} and I am ${this.age} years old using Apply
      I live in ${this.city} ${this.country}
      `
  );
}

// const greetEzigbo = greet3.bind(Ezigbo, ["Nigeria", "Nsukka"]);
// greetEzigbo();
