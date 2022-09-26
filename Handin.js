
function whatToWear(temperature) {

    if(temperature >=20) {
        return "dress"

    }

    if(temperature <20 && temperature >10) {
        return "light jacket"
    }

    if (temperature <=10) {
     return "warmer coat/jacket"

    }

}
console.log(whatToWear(20))

//Dice game
function diceGame (numOfRolls) {
    amountOfsix = 0

    for (let i = 0; i < num0fRolls; i++) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

        if (randomNumber === 6)
            console.log("you just hit 6")
        else
            console.log("you hit "+randomNumber+"try again");


//part 2

    if (randomNumber === 6) {
        amountOfSix++
        if (amountOfSix === numOfRolls)
            console.log("JACKPOT");

        }
        }
        }

diceGame(2);


    // 3. build a sentiment analyzer




