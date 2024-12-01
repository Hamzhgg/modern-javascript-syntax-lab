// Exercise 1
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const doubledNums = nums.map(num => num * 2);
console.log(doubledNums); // [26, 174, 4, 178, 24, 8, 180, 126]

console.log('---------------------------------------------');

// Exercise 2
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping); // 'Pineapple'
console.log(secondTopping); // 'Olives'

console.log('---------------------------------------------');

// Exercise 3
const car = {
    make: 'Audi',
    model: 'q5',
};
  
const {make, model} = car;

console.log('Exercise 3:', make, model);
  console.log('---------------------------------------------');
  
// Exercise 4
const controversialPizzaToppings = [...pizzaToppings];

console.log('Exercise 4:', controversialPizzaToppings);

console.log('---------------------------------------------');

// Exercise 5
const myCar = {...car};
myCar.model = 'q7';
console.log('Exercise 5:', car, myCar);


  console.log('---------------------------------------------');

// Exercise 6
const propertyName = 'username';
const userProfile = {
  [propertyName]: 'JohnDoe',
};
console.log(userProfile); // { username: 'JohnDoe' }

console.log('---------------------------------------------');

// Exercise 7
//# Idont know how to do it

// Exercise 8
function describeAnimal(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
  }
  
  describeAnimal(); // 'The cat is white.'
  describeAnimal('dog', 'brown'); // 'The dog is brown.'
  
  console.log('---------------------------------------------');

//Exercise 9
let pizza = 'tasty';
console.log(pizza === 'tasty' ? 'yum' : 'yuck'); // 'yum'

console.log('---------------------------------------------');

// Exercise 10
const localLangConfig = null;
const LANG = localLangConfig || 'en';
console.log('Language setting:', LANG);

console.log('---------------------------------------------');

const userSavedTheme = null;
const theme = userSavedTheme || 'light';
console.log('Website theme:', theme); // 'light'

console.log('---------------------------------------------');

const adventurer = {
    name: 'Alice',
  };
  
  // Using optional chaining
  console.log(adventurer.cat?.age); // undefined
  