// Get the element with id="level"
var levelElement = document.getElementById("level");

// Initialize a variable to keep track of the DOM level
var level = 0;

// Traverse up the DOM tree from the element to the <html> element
while (levelElement !== null) {
  level++;
  levelElement = levelElement.parentNode;
}

// Print the final answer using alert()
alert("The level of the element is: " + level);
