//__ verb [where, when, while] your [noun] is/are [adjective].
const part1 = ["always", "never", "don't", "try to", ""];
const part2 = ["take your time", "try your best", "be courageous", "be creative", "eat healthy"];
const part3 = ["when", "while", "because", "even when", "especially when", "in case", "even if"];
const part4singular = ["life", "sleep", "food", "water", "family", "future", "dad", "mom", "brother", "sister", "hand", "day", "bank account"]
const part4plural = ["cards", "friends", "bullets", "feet", "clothes", "classes", "muscles"];
const part5 = ["dry", "shitty", "broken", "easy", "hard", "hurting", "black", "cold", "low", "high", "glitched out"];

const getRandWord = arr => {
    const randix = Math.floor(Math.random()*arr.length);
    return arr[randix];
}

const getRandMessage = () => {
    let message = [];
    const p1 = getRandWord(part1);
    if (p1 != "")
        message.push(p1);
    message.push(getRandWord(part2));
    message.push(getRandWord(part3));
    message.push("your");
    const pluralOrNot = Math.floor(Math.random()*2);
    if (pluralOrNot == 1) {
        message.push(getRandWord(part4singular),"is");
    }
    else if (pluralOrNot == 0) {
        message.push(getRandWord(part4plural),"are");
    }
    message.push(getRandWord(part5));
    let finalMessage = message.join(" ");
    finalMessage = finalMessage[0].toUpperCase() + finalMessage.substring(1);
    finalMessage += "."
    return finalMessage;
}

console.log(getRandMessage());