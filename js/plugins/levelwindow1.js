(function() {

Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.levelA, x, y, 48);
    this.resetTextColor();
    this.drawText(actor.level, x + 24, y, 36, 'right');
    if($gameSwitches.value(380)){
    
    if(actor.isStateAffected(11)){
    this.drawIcon(481, x + 74, y);
    }else{
    this.drawIcon(483, x + 74, y);
    }
    }
};






})();
