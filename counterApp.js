// document.getElementById("count-el").innerHTML = 10;


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

//global variables
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

//functions

//button increment
function increment() {
    count += 1;
    countEl.textContent = count;
}

function decrement() {
    count -= 1;
    countEl.textContent = count;
}

function reset() {
    count = 0;
    countEl.textContent = count;
}

function save() {
    let entry = " " + count + " -";
    saveEl.textContent += entry;

}