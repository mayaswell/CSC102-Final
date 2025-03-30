//Some global variables for the whole sheet.
let change = 50;
let intervalID = 0;
//Some global constants because I was experimenting with them. These change the images in functions later
const a = "King Julian Alert.jpg";
const b = "WHAT1.png"
//This first function changes the image when you click on the main Julian image
function changeKing()
{
    document.getElementById("imgMeme").src = a;
}
//This function is what makes the image move
function move()
{
//A local variable for just this function
let image = document.getElementById("imgMeme");
//These next two lines change if the buttons are able to be clicked
document.getElementById("moveIt").disabled =true;
document.getElementById("notMoveIt").disabled = false;
//I added some grass sounds for when he walks
mySound = new sound("Sound Walk.wav")
mySound.play();
//This interval is what makes him move. It adds the change to the position and repeats
intervalID = setInterval(function(){
    
    image.style.left = change + "px";

    change += 5;// this is the same as change = change + 5;
//This next line is what puts the distance in the h2 element
    document.getElementById("distance").innerHTML = image.style.left;
}, 5);//  = # of ms before repeating (I left this because I couldn't simplify it further)
}
//This function is what makes the image stop. It does this by reloaded the page
function notMove()
{
    document.getElementById("moveIt").disabled =false;
    document.getElementById("notMoveIt").disabled = true;
    clearInterval(intervalID);
    location.reload();
}
//This function is the sound function that we will be using for a while now, apparently
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}
/*This function is what changes the main image when the user clicks the hidden button. It also sets a small
delay before starting the alerts so that you can see the image change*/
function what() {
    document.getElementById("imgMeme").src = b;
    timeoutID = setTimeout(betrayal,100);
}
//This is the function that starts the alerts and then reloads the page
function betrayal () {
    alert("HEY!");
    alert("How could you?");
    alert("I'm not mad.");
    alert("Just disappointed.");
    alert("Let's just pretend it didn't happen.");
    location.reload();
}