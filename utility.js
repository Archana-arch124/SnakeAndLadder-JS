class Utility{

    startPosition = 0;
    endPosition = 100;
    random = 0;

    rollDie =()=> {
        this.random = Math.floor((Math.random()*6)+1);
        return this.random
    }
    optionCheck =()=> {
        this.Random = Math.floor((Math.random()*3)+1);
        return this.Random
    }
    
    mainGamePlay =()=> {

        var newPosition = this.startPosition;
        var option = 0;
        var diceNumber = 0;
        var No_Play = 1
        var Ladder = 2;
        var Snake = 3;
        while(newPosition < this.endPosition){

        var diceNumber =this.rollDie();
        var option = this.optionCheck();

        console.log(` Dice after rolling!,the Number we got is: ${diceNumber}`);
        
        switch(option){

            case No_Play:
                console.log(` No-Play `);
                newPosition = newPosition;
                break;

            case Ladder:
                console.log(` Ladder `);
                if(newPosition+diceNumber <= 100)   
                newPosition = newPosition + diceNumber;
                break;
            
            case Snake:
                console.log(` Snake `);
                if(newPosition-diceNumber <= 100)   
                newPosition = newPosition - diceNumber;
                break;
            }
            console.log(` NewPosition is : ${newPosition}`);
        }

    }
}  
module.exports = new Utility()
