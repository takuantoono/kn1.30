(function() {

Game_Action.prototype.speed = function() {
    var agi = this.subject().agi;
    var speed = agi + Math.randomInt(Math.floor(5 + agi / 4));
    if (this.item()) {
        speed += this.item().speed * (agi + 100)/100;
    }
    if (this.isAttack()) {
        speed += this.subject().attackSpeed() * (agi + 100)/100;
    }
    return speed;
};



})();
