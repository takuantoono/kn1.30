(function() {


Window_BattleStatus.prototype.numVisibleRows = function() {
if($gameSwitches.value(116)){
    return 6;
}
else{
    return 5;
}
};

BattleManager.displayRewards = function() {
    this.displayExp();
    this.displayGold();
    this.displayDropItems();
    this.displayAp();
};

BattleManager.displayAp = function() {
    var ap = $gameVariables.value(97);
    if (ap > 0) {
        var text =  ap + " APを獲得"
        $gameMessage.add('\\.' + text);
        ap += $gameVariables.value(98);
        $gameVariables.setValue(98, ap);
    }
};

Window_Base.prototype.drawTextEx2 = function(text, x, y) {
    if (text) {
        var textState = { index: 0, x: x, y: y, left: x };
        textState.text = this.convertEscapeCharacters(text);
        textState.height = this.calcTextHeight(textState, false);
        this.resetFontSettings();
        this.contents.fontSize = 18
        while (textState.index < textState.text.length) {
           this.processCharacter(textState);
        }
        return textState.x - x;
    } else {
        return 0;
    }
};

Game_BattlerBase.prototype.isOccasionOk = function(item) {
    if ($gameParty.inBattle()) {
        return item.occasion === 0 || item.occasion === 1;
    } else {
      if ($gameSwitches.value(209)) {
        return false
      }else{
        return item.occasion === 0 || item.occasion === 2;
      }
    }
};

Window_Message.prototype.updateShowFast = function() {
    //if (this.isTriggered()) {
    //    this._showFast = true;
    //}
};


})();
