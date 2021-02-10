class Utility{

    startPosition = 0;
    endPosition = 100;
    random = 0;

    rollDie =()=> {
        this.random = Math.floor((Math.random()*6)+1);
        return this.random
        
    }
}
module.exports = new Utility()
