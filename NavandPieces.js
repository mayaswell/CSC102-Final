//This function is the sound function that we will be using for a while now, apparently
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
    this.sound.play();
    }
}
//This function plays the sound and changes the text to match the song
function satisfaction()
{
    mySound = new sound("Satisfaction SOUND.mp3")
    mySound.play();
    document.getElementById("pusher").innerHTML = "and then just touch me";
}