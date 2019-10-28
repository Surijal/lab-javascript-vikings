// Soldier
function Soldier(health, strength) {

    this.health = health;   
    this.strength = strength;
    
    Soldier.prototype.attack  = function  (){
        return strength;
    };

    this.receiveDamage = function(damage){
        this.health  -= damage;
    };

}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

/*
Viking.prototype.attack = Object.create(Soldier.prototype.attack);


Viking.prototype.constructor = Viking.attack;
*/

Viking.prototype.attack = function (){
    return this.strength;
};

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;

    if ( this.health > 0 ) {
        console.log(this.name + damage);
        /*
        return this.name + ' has received  ' + damage + ' points of damage';
        */
        return this.name + ' has received ' + damage + ' points of damage';
    } else if ( this.health <= 0 ){
        
        return this.name + ' has died in act of combat';

    } 
            
};

Viking.prototype.battleCry = function () {
    return 'Odin Owns You All!';
};

// Saxon
function Saxon( health, strength ) {

    this.health = health;
    this.strength = strength;
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

/*
Saxon.prototype.attack = Object.create(Soldier.prototype.attack);
*/

Saxon.prototype.attack = function() {
    return this.strength;
};

Saxon.prototype.receiveDamage = function (damage)  {
    this.health -= damage;

    if ( this.health > 0 ) {
        /*
        return 'A Saxon has received  ' + damage + ' points of damage';
        */
        return 'A Saxon has received ' + damage + ' points of damage';
    } else if ( this.health <= 0 ){
        return 'A Saxon has died in combat';
    }
};



// War
function War() {
    this.vikingArmy = [] ;
    this.saxonArmy =  [ ];
    
}

War.prototype.constructor = function () {
    var vikingArmy = [];
    var saxonArmy = [];
};

