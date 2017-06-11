(function() {

Window_BattleLog.prototype.displayAction = function(subject, item) {
    var numMethods = this._methods.length;
    if (DataManager.isSkill(item)) {
        if (item.message1) {
        var equips = subject.equips();
        if(item.id == 1 && subject.isActor()){
        if((subject._dualWieldSpriteIndex-1)>0){
        var wepid = subject._dualWieldSpriteIndex - 1;
        }else{
        var wepid = 0;
        }
         this.push('addText', subject.name() + ' : ' + $dataWeapons[equips[wepid].id].name);
        }else{
            this.push('addText', subject.name() + item.message1.format(item.name));
        }
        }
        if (item.message2) {
            this.push('addText', item.message2.format(item.name));
        }
    } else {
        this.push('addText', TextManager.useItem.format(subject.name(), item.name));
    }
    if (this._methods.length === numMethods) {
        this.push('wait');
    }
};



Scene_Item.prototype.create = function() {
    Scene_ItemBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createCategoryWindow();
    this.createItemWindow();
    this.createActorWindow();
    $gameVariables.setValue(511, " ");
    $gameVariables.setValue(509, " ");
    $gameVariables.setValue(173, 0);
    this._helpWindow.refresh();
};





Window_Selectable.prototype.callUpdateHelp = function() {
    if (this.active && this._helpWindow) {
    
    if($gameVariables.value(173)!=0){
    
    actor = $gameVariables.value(173);
    if(actor.isStateAffected(11)){
      $gameVariables.setValue(511, $dataItems[15].name);
      $gameVariables.setValue(509, $gameParty.numItems($dataItems[15]));
    }
    if(actor.isStateAffected(12)){
    	$gameVariables.setValue(511, $dataItems[19].name);
    	$gameVariables.setValue(509, $gameParty.numItems($dataItems[19]));
    }
    }
        this.updateHelp();
    }
};

Scene_Map.prototype.updateMainMultiply = function() {
    this.updateMain();
    if (this.isFastForward()) {
        this.updateMain();
    }
};

Scene_Map.prototype.updateMain = function() {
    var active = this.isActive();
    $gameMap.update(active);
    $gamePlayer.update(active);
    //$gameTimer.update(active);
    $gameScreen.update();
};


Game_Map.prototype.update = function(sceneActive) {
    this.refreshIfNeeded();
    if (sceneActive) {
        this.updateInterpreter();
    }
    //this.updateScroll();
    this.updateEvents();
    //this.updateVehicles();
    //this.updateParallax();
};

Game_CharacterBase.prototype.update = function() {
    if (this.isStopping()) {
        this.updateStop();
    }
    if (this.isJumping()) {
       // this.updateJump();
    } else if (this.isMoving()) {
        this.updateMove();
    }
    //this.updateAnimation();
};

Game_Player.prototype.update = function(sceneActive) {
    var lastScrolledX = this.scrolledX();
    var lastScrolledY = this.scrolledY();
    var wasMoving = this.isMoving();
    //this.updateDashing();
    if (sceneActive) {
        this.moveByInput();
    }
    Game_Character.prototype.update.call(this);
    //this.updateScroll(lastScrolledX, lastScrolledY);
    //this.updateVehicle();
    if (!this.isMoving()) {
        this.updateNonmoving(wasMoving);
    }
    //this._followers.update();
};


})();
