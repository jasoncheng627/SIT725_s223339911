function changeText() { //define a function called changeText
  var textsArray = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"]; //array of 5 texts, index starts at 0
  var number = getRandomNumberBetween(0, textsArray.length - 1); //get a random index from 0 to 4
  console.log("Index: ", number); //print the chosen index to the browser console for debugging
  document.getElementById("heading").innerHTML = textsArray[number]; //find the element with id heading and replace its content with the chosen text.
} //end of the changeText function

function getRandomNumberBetween(min, max) { //function that returns a random whole number between min and max
  return Math.floor(Math.random() * (max - min + 1) + min); //random() gives 0-0.999, scale it to the range, then floor rounds down to a whole number
} //end of the getRandomNumberBetween function