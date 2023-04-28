// this
// points to the left of the dot

const Okoro = {
  firstName: "Okoro",
  lastName: "Nkakwu",
  fullName() {
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

const Agbala = {
  firstName: "Agbala",
  lastName: "Oke",
  fullName() {
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

// Okoro.fullName();
// Agbala.fullName();

/*
In reg functions (not arrow) "this "
determined by "HOW" a function is invoked (left of the dot(.) )

defaults to global -windows
arrow functions - pump the breaks
*/

function showThis() {
  console.log(this);
}

const Okoro1 = {
  firstName: "Okoro1",
  showThis,
};

const Agbala1 = {
  firstName: "Agbala1",
  showThis,
};

// Okoro1.showThis();
// Agbala1.showThis();
// showThis();

// factory function

function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love MERN stack`
      );
    },
  };
}

// const Uzoagbala = createPerson("Uzoagbala", "Mmavu");
// Uzoagbala.fullName();

// const Omeje = createPerson("Omeje", "Nsukka");
// Omeje.fullName();

// const Utam = createPerson("Utam", "Ajo nwa");
// Utam.fullName();

// construction function
// new - creates new Object, points to it, omit return

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love Nodejs stack`
    );
  };
}

// const Agaba = new Person("Agaba", "Ubiam");
// Agaba.fullName();
// console.log(Agaba.constructor);

// const Odumeje = {};
// console.log(Odumeje.constructor);

// const list = [];
// console.log(list.constructor);

// const sayHi = function () {};
// console.log(sayHi.constructor);

// const Etum = new Person("Etum", "Utazi");
// Etum.fullName();

// const Ezenwanyi = new Etum.constructor("Ezenwanyi", "Mmuo");
// Ezenwanyi.fullName();

function Account(name, defaultBalance) {
  this.name = name;
  this.balance = defaultBalance;
  this.bank = "ACCESS";
}

const odogwu = new Account("Odugwu", 5000);

Account.prototype.bank = "STANBIC IBTC";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hi ${this.name}, your balance is ${this.balance}`);
};

// console.log(odogwu.deposit(90));
// console.log(odogwu.bank);
// console.log(Account.prototype);
