
// Solution to exercise 1 starts here

let character = "A";

if (typeof character === 'string') {
    if (character === "a" || character === "A" || character === "e" || character === "E" || character === "i" || character === "I" || character === "o" || character === "O" || character === "u" || character === "U") {
        console.log("Vowel")
    } else {
        console.log("Consonant")
    }
} else {
    console.log("Invalid Character")
}

// Solution to exercise 1 ends here

// Solution to exercise 2 starts here

let a = 12;
let b = 10;
let c = 3;

if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    if (a + b > c && a + c > b && b + c > a) {
        console.log("This is a possible triangle")
    } else {
        console.log("This is not a possible triangle")
    }
} else {
    console.log("Invalid variables")
}

// Solution to exercise 2 ends here

// Solution to exercise 3 starts here

let points = 69;

switch (typeof points === "number") {
    case (points >= 0 && points < 50):
        console.log("Not enought points");
        break;
    case (points >= 50 && points <= 59):
        console.log("6");
        break;
    case (points >= 60 && points <= 69):
        console.log("7");
        break;
    case (points >= 70 && points <= 79):
        console.log("8");
        break;
    case (points >= 80 && points <= 89):
        console.log("9");
        break;
    case (points >= 90 && points <= 100):
        console.log("10");
        break;
    default:
        console.log("Invalid Points");
}

// Solution to exercise 3 ends here


// Solution to exercise 4 starts here

{
    let a= "c";

switch (a) {
    case a = "c":
    case a = "k":
        console.log("circle")
        break;
    case a = "p":
    case a = "m":
    case a = "n":
        console.log("square")
        break;
    default:
        console.log("triangle")
}
}

