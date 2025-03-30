//This is the function that makes the Palindrome Checker work
function palcheck(){
//This variable takes the text provided by user for later use by JS
    var string1 = document.getElementById("origText").value;
//Converts the string to lowercase
    var lCase = string1.toLowerCase();
//Removes the spaces from string
    var noSpace = lCase.replace(/ /g, '');
//Splits the string so we can reverse it
    var splitStr = noSpace.split("");
//Reverses the split string
    var reverseStr = splitStr.reverse();
//Joins the reversed string again
    var joinStr = reverseStr.join("");
//This if statment lets the user know if they didn't type anything
    if (noSpace<1)
    {
        document.getElementById("palStatus").innerHTML = "I can't check for palindromes if you don't type anything :(";
    }
//This if statment lets the user know if they found a palindrome
    else if (noSpace == joinStr)
    {
        document.getElementById("palStatus").innerHTML = "You got one! That's a Palindrome!";
    }
//This else statment covers if the user enters something that isn't a palindrome
    else
        {
            document.getElementById("palStatus").innerHTML = "Nope! Keep searching!";
        }
}