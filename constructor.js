class player{
    constructor(name, speab,strength){
        this.name = name;
        this.speab = speab;
        this.strength = strength;
    }
    detail(){
        console.log(this.name + " is the player you choose"
        + "his strength is " + this.strength)
    }
}
const player1 = new player("Bhoomi", 8, 7);
const player2 = new player("girish", 7, 6);
console.log(player1.name)
player1.detail();
player2.detail();