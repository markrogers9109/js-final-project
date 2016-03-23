



var button = document.getElementById("alert");

button.addEventListener("click", function () {
    alert("hello world");
    console.log(this); //what is the context to our callback function?
});

// create global variables to store game and win count
var gameCount = 0;
var winCount = 0;

// This function is called every time the button is clicked
function handleGoButtonClick(event) {
	var user = domInput1();
	var result;
	domInput1("");
	result = user;
	domTextOutput(result);
}

// This function sets and returns the value of Input 1
function domInput1(newval) {
	var input1Reference = document.getElementById("input1Id");
	if(newval !== undefined) {
		input1Reference.value = newval;
	}
	return input1Reference.value;
}

// This function sets and returns the value of Input 2
function domTextOutput(newval) {
	var textOutputReference = document.getElementById("textOutputId");
	if(newval !== undefined) {
		textOutputReference.innerHTML = newval;
	}
}

/* This is an Immediately Invoked Function Expression (IIFE)
   The code here runs immediately after the page loads.
   In this case, we are setting up an event handler for
   button presses.
*/
(function() {
	document.getElementById("goBtnId").onclick = handleGoButtonClick;
}());
