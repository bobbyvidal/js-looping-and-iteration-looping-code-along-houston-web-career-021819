// Code your solutions in this file

function tailsNeverFails() {
    let counter = 0;
    while (Math.random() >= 0.5) {
        counter++;
    }
    console.log(`You got ${counter} tails in a row!`);
    return(`You got ${counter} tails in a row!`);
}

names = ['Ada', 'Brendan', 'Ali'];
function printBadges(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
    }
return names}
printBadges(names);
