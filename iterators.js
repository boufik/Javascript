// 1. For Each
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

// 2. Map
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => number * number);
console.log(squareNumbers);

// 3. Filter
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => typeof thing === 'number');
console.log(onlyNumbers);

// 4. Reduce with 2 parameters: a callback function and a value for accumulator initialization
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce(((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue}), 10);
console.log(newSum);

// 5. Some
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some(word => word.length < 6));

// 6. Every
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(interestingWords.every(word => word.length > 5));
