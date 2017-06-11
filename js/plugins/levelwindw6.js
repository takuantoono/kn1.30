(function() {



Scene_Map.prototype.updateCallMenu = function() {
    if (this.isMenuEnabled()) {
        if (this.isMenuCalled()) {
            this.menuCalling = true;
        }
        if (this.menuCalling && !$gamePlayer.isMoving()) {
        if($gameVariables.value(156)==1) $gameVariables.setValue(156, 2);
        $gameMap._interpreter.setup($dataCommonEvents[83].list);
            //this.callMenu();
        }else{
        if (Input.isTriggered('pagedown') && !$gamePlayer.isMoving()) {
        $gameMap._interpreter.setup($dataCommonEvents[160].list);
        }else{
        if (Input.isTriggered('pageup') && !$gamePlayer.isMoving()) {
        $gameMap._interpreter.setup($dataCommonEvents[163].list);
        }else{
        if (Input.isTriggered('shift') && !$gamePlayer.isMoving()) {
        $gameMap._interpreter.setup($dataCommonEvents[161].list);
        }
        }
        }
        }
    } else {
        this.menuCalling = false;
    }
};

Scene_Menu.prototype.initialize = function() {
if($gameVariables.value(156)==1) $gameVariables.setValue(156, 2);
    Scene_MenuBase.prototype.initialize.call(this);
};


})();
