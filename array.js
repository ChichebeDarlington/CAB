/*
Array.from and Array.of - NOT ON THE PROTOTYPE
Array.of creates a new array instance from a variable number of arguments
*/

const sample = ["sample 1", "sample 2", "sample 3"];
// console.log(sample);
// console.log(sample.map);
// console.log(sample.from);
// console.log(sample.of);

// Array.of
const ndienyi = Array.of("Okoko", "Maduka", "Alili");
// console.log(ndienyi);

// Array.from
/*
Returns Array Object with a length property or an iterable object.
It turns array like/ish into array - string, Nodelist, Set
*/

const chebewebdev = "chebewebdev";
// console.log(Array.from(chebewebdev));

function calcTotal() {
  let total = Array.from(arguments).reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
  console.log(total);
}

console.log(typeof 7, 7);
console.log(typeof "7", "7");

calcTotal(90, 98, 65);
