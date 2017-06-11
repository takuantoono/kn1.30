(function() {

Window_NumberInput.prototype.updatePlacement = function() {
    var messageY = this._messageWindow.y;
    var spacing = 8;
    this.width = this.windowWidth();
    this.height = this.windowHeight();
    this.x = (Graphics.boxWidth - this.width) / 2;
    if (messageY >= Graphics.boxHeight / 2) {
        this.y = messageY - this.height -100 - spacing;
    } else {
        this.y = messageY + this._messageWindow.height + spacing;
    }
};

Window_MenuCommand.prototype.makeCommandList = function() {
    this.addMainCommands();
    this.addFormationCommand();
    this.addOriginalCommands();
    this.addOptionsCommand();
    //this.addSaveCommand();
    this.addGameEndCommand();
};

Window_BattleStatus.prototype.numVisibleRows = function() {
    return 6;
};



})();
