function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["evensAreAwesome"].elements.length; 
        loopCounter++) {
        if (document.forms["evensAreAwesome"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["evensAreAwesome"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}


/*User provides three inputs for function that can be used to build a range
*Add starting number from input as first number in range to make sure it is considered for eligibility*/
function findEvens (startingNum, endingNum, step) {
    
        var arr = ([startingNum]);
    
        /*use while loop to build array of all values between starting number and ending number input by user*/
        while ((startingNum + step) <= endingNum) {
        startingNum = startingNum + step;
            arr.push(startingNum);
        }
        /*From the array created above (called 'arr') extract the even numbers by using the modulus operator
        *push those numbers to a new array called evensInRange*/
        var evensInRange = [];
        for (var i = 0; i < arr.length; ++i) {
            if ((arr[i] % 2) === 0) {
            evensInRange.push(arr[i]);
            }
        }
    }



function validateItems() {
    clearErrors();

    var startingNum = document.forms["evensAreAwesome"]["startingNum"].value;
    var endingNum = document.forms["evensAreAwesome"]["endingNum"].value;
    var step = document.forms["evensAreAwesome"]["step"].value;

    if (startingNum == "" || isNaN(startingNum)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["evensAreAwesome"]["startingNum"]
           .parentElement.className = "form-group has-error";
        document.forms["evensAreAwesome"]["startingNum"].focus();
        return false;
    }
    /*This alert message is generating inconsistently and needs to be revisited. */
    if (endingNum <= startingNum) {
        alert("Ending Number must be larger than Starting Number!");
        document.forms["evensAreAwesome"]["endingNum"]
            .parentElement.className = "form-group has-error";
        document.forms["evensAreAwesome"]["endingNum"].focus();
        return false;
   }
   if (endingNum == "" || isNaN(endingNum)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["evensAreAwesome"]["endingNum"]
          .parentElement.className = "form-group has-error";
       document.forms["evensAreAwesome"]["endingNum"].focus();
       return false;
    }
   if (step == "" || isNaN(step)) {
    alert("Step must be filled in with a number.");
    document.forms["evensAreAwesome"]["step"]
       .parentElement.className = "form-group has-error";
    document.forms["evensAreAwesome"]["step"].focus();
    return false;
   }
   if (step <= 0) {
    alert("Step must be a positive number!");
    document.forms["evensAreAwesome"]["startingNum"]
       .parentElement.className = "form-group has-error";
    document.forms["evensAreAwesome"]["step"].focus();
    return false;
   }

   /*push variables entered by user to the findEvens function to return the resulting array of even numbers*/
    findEvens (startingNum, endingNum, step);

   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Do It Again!";
   document.getElementById("summary").innerText = "Here are the even numbers between " + startingNum + " and " + endingNum + " by the " + step + "'s: ";
   document.getElementById("calculateEvens").innerText = "This is supposed to be showing the results of the evensInRange array created by the findEvens function"; /*but when I add 
    *any reference to the evensInRange variable, my program stops working */

   return false;
}

