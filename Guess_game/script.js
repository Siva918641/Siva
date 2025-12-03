// Adding functions to the HTML
//selecting the elements 
var inputBox = document.getElementById("inputBox")
var result = document.getElementById ("result")
var guesscount = document.getElementById("guesscount")
var guessLimit = 3

//Generating random number
var randomnumber = Math.floor(Math.random()*10)+1 
if (randomnumber>5)
{
    randomnumber = randomnumber-5
}

//event handler function

function checktheNumber() 
{
    if (inputBox.value == randomnumber) //this function will be called once the guess is right
    {
        alert("Brilliant! Even Dumbledore would be proud of such magic.")
        result.textContent = "Hogwarts applauds your magical talent!"
    }

    else 
    {
        guessLimit = guessLimit-1
        if (guessLimit == 0) 
        {
            alert("Alas! The enchanted number escapes you… it was: "+randomnumber)
            result.textContent = "Hedwig hoots...try again, young wizard!"
        }

        guesscount.textContent = "Hogwarts Allowance Remaining: "+guessLimit
    }
}

