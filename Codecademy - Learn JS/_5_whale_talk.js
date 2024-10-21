let input = "Hello humans";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

// Letters 'e' and 'u' will be double times in our resultArray
// while the other 3 vowels ('a', 'i', 'o') will appear once
for(let i=0; i<input.length; i++){
    letter = input[i];
    if(letter === 'e' || letter === 'u'){
        resultArray.push(letter);
    }
    for(let j=0; j<vowels.length; j++){
        vowel = vowels[j];
        if(letter === vowel){
            resultArray.push(letter);
        }
    }
}

resultString = resultArray.join('');
resultString = resultString.toUpperCase();
console.log(resultString);
