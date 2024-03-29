// This is the javascript file, here we can make calculation and add interactivity
let standardNumberOfPortions = 4;
// Here we store all the objects which display the quantity needed
let elemListOfIngredients = document.querySelectorAll("dt");
// Here we write this objecs into the console, you can find the console with "ctrl+shift+i" or right click on the page and select inspect.
console.log(elemListOfIngredients);
// Here we initialize a new array
let listOfIngredients = [];
// We now fill this array with the numbers displayed
// To do this we loop through all the elements and get the innerHTML of this object
for (let index = 0; index < elemListOfIngredients.length; index++) {
    listOfIngredients[index] = elemListOfIngredients[index].innerHTML;
}
 
// This variable is used for the image slider
let picturePointer = 1;
// This command makes that every 1o second the function slide Image is called.
setInterval(slideImage, 10000);

// With this line we add a event to the input field.
// This makes that every time a key is pressed that the functions recalculateIngre is called.
document.getElementById("numOfPersons").addEventListener("keyup", recalculateIngre);

function recalculateIngre() {
    // With this line we store what the user typed into the input field
    let newNumberOfPortions = document.getElementById("numOfPersons").value;
    // Here we check if the field is empty or if the user typed in something that is Not a Number
    // If this is the case we won't continue and exit the function this is done with the return keyword.
    if (newNumberOfPortions == 0 || isNaN(newNumberOfPortions)) {
        return;
    }

    let newAmountNeeded;
    // Here we need all the things we set up at the beginning of the file. 
    // We write the new value we calculate into the objects of the Ingredientlist we got
    for (let index = 0; index < elemListOfIngredients.length; index++) {
        newAmountNeeded = newNumberOfPortions / standardNumberOfPortions * listOfIngredients[index];
        elemListOfIngredients[index].innerHTML = newAmountNeeded;
    }
    // Here we change the placeholder of the input field, that if you delete the number you typed in you still see what you have typed.
    document.getElementById("numOfPersons").placeholder = newNumberOfPortions;
}

// This is the function that gets called every 10 seconds
function slideImage() {
    //Add some code here to add an image slider functionality. Have a look at the img folder and see what's in there. Hint: you have to change the variable picturePointer in a specific wayjava 
    //Add code under here
    
    //Add code over here

    // And here we finally change the image
    document.getElementsByClassName("img-container")[0].style.backgroundImage = "url(img/Pizza_" + picturePointer + ".jpg)";
}
