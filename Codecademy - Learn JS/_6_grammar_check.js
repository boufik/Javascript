let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';
let storyWords = story.split(' ');

// 1. For Each: Count words
let count = 0;
storyWords.forEach(word => count += 1);
let count2 = storyWords.reduce(((acc, curr) => acc += 1), 0);
console.log(storyWords.length, count, count2, '\n');

// 2. Filter: 'Delete' a word
let unnecessaryWord = 'literally';
storyWords = storyWords.filter(word => word != unnecessaryWord);

// 3. Map: Replace words
let misspelledWord = 'beautifull';
storyWords = storyWords.map(word => word === misspelledWord ? 'beautiful' : word);

// indexOf: replace words
let badWord = 'freaking';
let badWordIndex = storyWords.indexOf(badWord);
storyWords[badWordIndex] = 'really';
console.log(`Bad word index = ${badWordIndex}\n`);

// 5. Length Check
lengthCheck = storyWords.every(word => word.length <= 10);
console.log('All words under 11 letters:', lengthCheck, '\n');

// 6. Find Index: replace words
index = storyWords.findIndex(word => word.length > 10);
prev = storyWords[index];
storyWords[index] = 'stunning';
console.log(`Word '${prev}' in index ${index} has a length of ${prev.length} > 10 letters, so:\nIt is replaced with the word 'stunning'\n`);

console.log(storyWords.join(' '));
