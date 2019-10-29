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
    this.saxonArmy =  [];
    
}

//  War Add Viking

War.prototype.addViking = function (Viking) {
    this.vikingArmy.push(Viking);
};

// War Add Saxon

War.prototype.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
};

// War Viking Attack

War.prototype.vikingAttack = function (){
    
    function random (arr){
        var result = Math.floor(Math.random() * arr.length);
        return result;
    }
    var randomSaxonIndex = random(this.saxonArmy);

    var randomVikingIndex = random (this.vikingArmy);

    this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength);

    if( this.saxonArmy[randomSaxonIndex].health <= 0 ) {
        this.saxonArmy.splice(randomSaxonIndex, 1);
        return 'A Saxon has died in combat';
    } 
};

// War Saxon Attack

War.prototype.saxonAttack = function (){
    
    function random (arr) {
        var result = Math.floor(Math.random() * arr.length );
        return result;
    }
    var randomSaxonIndex = random(this.saxonArmy);

    var randomVikingIndex = random(this.vikingArmy);
    
    var damage = this.saxonArmy[randomSaxonIndex].strength;
    this.vikingArmy[randomVikingIndex].receiveDamage(damage);


    if ( this.vikingArmy[randomVikingIndex].health <= 0 ) {
        this.vikingArmy.splice(randomVikingIndex, 1);
        
    } else {
        return this.vikingArmy[randomVikingIndex].name  + ' has received ' + damage + ' points of damage';

        
    }
    

};

War.prototype.showStatus = function () {
    if ( this.saxonArmy.length <= 0 ) {

        return 'Vikings have won the war of the century!';
        
    } else if ( this.vikingArmy.length <= 0 )  {

        return 'Saxons have fought for their lives and survive another day...';
    } else if ( this.saxonArmy.length > 0 && this.vikingArmy.length > 0 ) {
        return 'Vikings and Saxons are still in the thick of battle.';
    }
};