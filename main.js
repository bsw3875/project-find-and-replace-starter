// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE
replaceAllButton.addEventListener('click', function () {
    console.log('replace-all-button, clicked');
    let find = findInput.value
    console.log(find)
    let replace = replaceInput.value
    console.log(replace)

})

let numbers = [10, 20, 30, 40, 50];
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    index = 0;
    array = [1, 2, 3, 4, 5, 6];
    while (index < array.length) {
        console.log(array[index]);
        index++;
    }
}
function cellFunc(x) {
    let cell = document.getElementById(x).rows[0].cells;
    document.write(cell[0].innerHTML);
}

let string = "Griffin";
let n = str.includes("McClain");
string.includes(searchvalue, start)


const content = getCellElement.innerHTML;
getCellElement.innerHTML = htmlString;
// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
