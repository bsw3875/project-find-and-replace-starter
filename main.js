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
    // Write a loop which loops over the rowElements array (which is already
    // provided in the starter code).
    for (let rowIndex = 0; rowIndex < rowElements.length; rowIndex += 1) {
        const currentRow = rowElements[rowIndex];
        console.log(currentRow)
        // Inside this loop, use the getCellElements() function (already provided in the starter
        // code) and assign the resulting array of cell elements to a variable.
        let cellElements = getCellElements(currentRow)
        // Write a nested loop which loops over the array of cell elements.
        for (counter = 1; counter < 4; counter++)
            console.log("Count from 1 to 3");
        for (counterTwo = 1; counterTwo < 4; counterTwo++)
            console.log(counterTwo);
        // For each cell element, check if a cell contains the user-provided search
        // string. Use the string method includes().
        let string = "cell-elements";
        let check = string.includes(".cell");

        //If a cell does contain the user-provided search string, use innerHTML and the string
        // method replace() to replace the user-provided search string with the user-provided
        // replacement string. 
        function getCellElements()
        string = newFunction(string)
        let result = string.replace(/Alice/, "Jane");
        document.getCellElements("user-replacement").innerHTML = result;
    }

    //function newFunction(string) {
    // let(string = document.getCellElements("user-search")).innerHTML
    // return string
    // }



    // Calling replace() function 
    //let newstring = string.replace(); 


    //document.write(newstring); 


}

)







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
