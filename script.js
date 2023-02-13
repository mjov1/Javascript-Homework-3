
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


