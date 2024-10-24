function square(arr){
    result = []
    for(let i=0; i<arr.length; i++){
        result.push(arr[i] * arr[i]);
    }
    return result
}

console.log()
console.log("******** 1. FOR-LOOP ********")
console.log(square([1,2,3,4,5,6,7,8,9,10]));
console.log();
console.log("******** 2. STRING METHODS ********")
str1 = "Hello World";
str2 = str1.replace("Hello", "Goodbye");
str3 = str2.toUpperCase();
console.log("str1 = " + str1);
console.log("str2 = " + str2);
console.log("str3 = " + str3);
console.log("Index of 'H' and 'l' in str1: (" + str1.indexOf('H') + ", " + str1.indexOf('l') + ")")
console.log();
console.log("******** 3. CAPITALIZING THE FIRST LETTERS OF WORDS and SUBSTR METHOD ********");
sentence = "You ARe vErY goOd at programming bUT noT LIKE me!";
words = sentence.split(" ");
console.log("Sentence = " + sentence);
// words[0] = "You", words[1] = "are", ....
for(let i=0; i<words.length; i++){
    words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1).toLowerCase();
}
console.log("words = " + words);
console.log("With join: " + words.join(" "));
