function war() 
{
    //Player and Vladimir get two dice each. These variables generate random numbers from one to six, simulating a dice roll. 
    var player = Math.ceil(Math.random() * 6);
    var player1 = Math.ceil(Math.random() * 6);
    var vlad = Math.ceil(Math.random() * 6);
    var vlad1 = Math.ceil(Math.random() * 6);

    //These constants are the sums of the player's and Vladimir's dice. These are used to determine the winner of the game later.
    const psum = player + player1;
    const vsum = vlad + vlad1;

    //These variables set the images for the win, loss, and draw conditions.
    var win = "youWin.jpg";
    var loss = "youLost.jpg";
    var draw = "DRAW.jpg";

    //These variables set the images for each dice face for each possible roll (one, two, three, four, five, six) for Vladimir
    var vladOne = "Vlad 1.png";
    var vladTwo = "Vlad 2.png";
    var vladThree = "Vlad 3.png";
    var vladFour = "Vlad 4.png";
    var vladFive = "Vlad 5.png";
    var vladSix = "Vlad 6.png";

    //These variables do the same thing as the previous batch, only for the player's dice instead. Each dice face is specified here.
    var playerOne = "Player 1.png";
    var playerTwo = "Player 2.png";
    var playerThree = "Player 3.png";
    var playerFour = "Player 4.png";
    var playerFive = "Player 5.png";
    var playerSix = "Player 6.png";
//This next group of statements are what tell the program which image to print for each scenario for Vladimir's first dice
if (vlad == 1)
{
    document.getElementById("vladimirImg").src = vladOne;
}
else if (vlad == 2)
    {
        document.getElementById("vladimirImg").src = vladTwo;
    }
else if (vlad == 3)
    {
        document.getElementById("vladimirImg").src = vladThree;
    }
else if (vlad == 4)
    {
        document.getElementById("vladimirImg").src = vladFour;
    }
else if (vlad == 5)
    {
        document.getElementById("vladimirImg").src = vladFive;
    }
else if (vlad == 6)
    {
        document.getElementById("vladimirImg").src = vladSix;
    }
//This next group of statements are what tell the program which image to print for each scenario for Vladimir's second dice
if (vlad1 == 1)
{
    document.getElementById("vladimir1Img").src = vladOne;
}
else if (vlad1 == 2)
    {
        document.getElementById("vladimir1Img").src = vladTwo;
    }
else if (vlad1 == 3)
    {
        document.getElementById("vladimir1Img").src = vladThree;
    }
else if (vlad1 == 4)
    {
        document.getElementById("vladimir1Img").src = vladFour;
    }
else if (vlad1 == 5)
    {
        document.getElementById("vladimir1Img").src = vladFive;
    }
else if (vlad1 == 6)
    {
        document.getElementById("vladimir1Img").src = vladSix;
    }
//This next group of statements are what tell the program which image to print for each scenario for the player's first dice
    if (player == 1)
    {
        document.getElementById("playerImg").src = playerOne;
    }
    else if (player == 2)
        {
            document.getElementById("playerImg").src = playerTwo;
        }
    else if (player == 3)
        {
            document.getElementById("playerImg").src = playerThree;
        }
    else if (player == 4)
        {
            document.getElementById("playerImg").src = playerFour;
        }
    else if (player == 5)
        {
            document.getElementById("playerImg").src = playerFive;
        }
    else if (player == 6)
        {
            document.getElementById("playerImg").src = playerSix;
        }
//This next group of statements are what tell the program which image to print for each scenario for the player's second dice
    if (player1 == 1)
    {
        document.getElementById("player1Img").src = playerOne;
    }
    else if (player1 == 2)
        {
            document.getElementById("player1Img").src = playerTwo;
        }
    else if (player1 == 3)
        {
            document.getElementById("player1Img").src = playerThree;
        }
    else if (player1 == 4)
        {
            document.getElementById("player1Img").src = playerFour;
        }
    else if (player1 == 5)
        {
            document.getElementById("player1Img").src = playerFive;
        }
    else if (player1 == 6)
        {
            document.getElementById("player1Img").src = playerSix;
        }
//This statement is what prints if the sum of the player's dice are equal to the sum of Vladimir's dice, i.e. no one wins the game.
if (psum == vsum)
{
    document.getElementById("finalResult").src = draw;
    //I added some war sounds for a draw
    mySound = new sound("DRAW A.wav")
    mySound.play();
}
//This statement is what prints if the sum of the player's dice are greater than the sum of Vladimir's dice, i.e. winning the game.
else if (psum > vsum)
{
    document.getElementById("finalResult").src = win;
//I added some war sounds for a win
    mySound = new sound("youWinA.wav")
    mySound.play();
}
//This statement is what prints if the sum of the player's dice are less than the sum of Vladimir's dice, i.e. losing the game.
else if (psum < vsum)
{
    document.getElementById("finalResult").src = loss;
//I added some war sounds for a loss
    mySound = new sound("youLostA.wav")
    mySound.play();
}
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