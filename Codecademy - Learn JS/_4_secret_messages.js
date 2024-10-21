let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Modifications
last = secretMessage.pop();
secretMessage.push('to', 'Program');
index = secretMessage.indexOf('easily');
secretMessage[index] = 'right';
first = secretMessage.shift();
secretMessage.unshift('Programming');

// Replace a phrase with a word
to_be_replaced = ['get', 'right', 'the', 'first', 'time'];
LEN = to_be_replaced.length;
index2 = secretMessage.indexOf('get');
secretMessage.splice(index2, LEN, 'know');

// Print
console.log(secretMessage.join(' '));
