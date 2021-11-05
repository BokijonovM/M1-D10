/*DOM EXERCISES

        31) Get the element with an id of "container" from the page
        32) Get every <td> element from the page
        33) Use a loop for printing the text inside of every <td> element in the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add a class of "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a unordered list
        40) Write a function to empty a list
*/

// Exercises 31
const getDivElementsFromHTML = document.querySelectorAll("div")


// Exercises 32
const GetEveryTDElementFromPage = document.querySelectorAll("td")


// Exercises 33 have a problem and isn't correct
// i tried but cannot completed


// Exercises 34
const changeHeadingPage = function(){
    let pageHeading = document.getElementById("page-heading")
    pageHeading.innerHTML = "I am new header here"
}
// let output34 = changeHeadingPage()
// console.log(output34)


// Exercises 35
const addNewRowToTable = function(){
    let getTableId = document.getElementById("add-new-row")
    let newTableRow = document.createElement("TH")
    newTableRow.innerText = "Country"
    getTableId.appendChild(newTableRow)
}
// let output35 = addNewRowToTable()
// console.log(output35)


// Exercises 36
const changeStyleEachRow = function(){
    let rowId = document.getElementById("add-new-row")
    rowId.classList.add("test")
}
// et output36 = changeStyleEachRow()
// console.log(output36)
// Exercises 31
// Exercises 31
// Exercises 31