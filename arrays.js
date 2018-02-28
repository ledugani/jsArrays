console.log();

// Challenge #1
var test1 = "mom";
var palindrome = test1.split("").reverse().join("");

if (test1 === palindrome) {
    console.log("true");
} else {
    console.log("false");
}

// Example A
var animals = ['fish', 'dog', 'cat'];
var animalzElement = document.getElementById('animalz');
for (var i=0; i<animals.length; i++) {
    // console.log(animals[i])
    animalzElement.innerHTML += '<h5>' + animals[i] + '</h5>';
}

// Challenge #2
var book1 = "Catch 22";
var book2 = "Slaughterhouse 5";
var book3 = "Fahrenheit 451";
var myBooks = [book1, book2, book3];

for (var j=0; j<myBooks.length; j++) {
    console.log(
        myBooks[j].split(" ").pop()
    );
}

// /*- Zoe's way -*/
// var book = "catch 22";
// var bookSplit = book.split("");
// var realNumz = [];
// for(var k=0; k<bookSplit.length; k++) {
//     if (bookSplit[k]*1) {
//         realNumz.push(bookSplit[k]);
//     }
// }
// console.log("answer", realNumz.join(""))