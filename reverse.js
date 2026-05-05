const sentence = `I am a good and hardworking person.`;

let reverse = '';

for (const letter of sentence) {
    reverse = letter + reverse;
}

// console.log(reverse);
const reversed = sentence.split('').reverse().join('');

console.log(reversed);
