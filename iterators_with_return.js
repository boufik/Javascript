// Data
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];

//  1. forEach: returns undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));
// 2. Filter: returns a new array
const longCities = cities.filter(city => city.length > 7);
// 3. reduce: returns a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
console.log(word)
// 4. map: returns a new array
const smallerNums = nums.map(num => num - 5);
console.log(smallerNums);
// 5. returns a boolean value
nums.every(num => num < 0);
