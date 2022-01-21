var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = ul.querySelectorAll("li");

function inputValueLength() {
	return input.value.length
}

// This function creates a new list item after which resets 
// the input value
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// Creating a delete button to go along with each new 
	// list item that we type in our input
	var deleteButton = document.createElement("button");
	li.appendChild(deleteButton);
	deleteButton.innerHTML = "Delete";

	deleteButton.addEventListener("click", function() {
		li.parentNode.removeChild(li)
	});

	// Toggles on/off the .done class from our CSS file
	// for each of the new list item 
	li.addEventListener("click", function() {
		li.classList.toggle("done")
	});
}

// This function adds a delete button for each of the ul's
// already existing list item
Array.from(list).forEach( function(item) {
	var deleteButton = document.createElement("button");
	item.appendChild(deleteButton);
	deleteButton.innerHTML = "Delete";

	deleteButton.addEventListener("click", function() {
		item.parentNode.removeChild(item)
	});

	// Toggles on/off the .done class from our CSS file
	// for each of the ul's already existing list item 
	item.addEventListener("click", function() {
		item.classList.toggle("done")
	});
})


function addListAfterClick() {
	if (inputValueLength() > 0) {
		createListElement()
	}
}

function addListAfterEnter(event) {
	if (inputValueLength() > 0 && event.which === 13) {
		createListElement()
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);


