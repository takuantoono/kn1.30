(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'chineseKingdom') {
    var p = $gameVariables.value($gameVariables.value(60) + 120)
	var com = $gameVariables.value($gameVariables.value(60) + 43)
	var ed = $gameActors.actor($gameVariables.value(60)).isStateAffected(83)
	var pp = 0; var ppp = 0;
	if($gameParty.members()[$gameVariables.value(54)].isStateAffected(118)) pp += 15;
	if($gameSwitches.value(399)) ppp += 40;
	if($gameParty.members()[$gameVariables.value(54)]._equips[0]._itemId == 20 || $gameParty.members()[$gameVariables.value(54)]._equips[1]._itemId == 20) {
	pp += 5;
	if($gameParty.members()[$gameVariables.value(54)].isClass($dataClasses[5]))pp += 10;
	};
	if(com != 0 && !ed){
	var id = $gameVariables.value($gameVariables.value(60) + 68)
	if(id == 0 && $gameVariables.value(92) < (3 + p + pp + ppp) && !$gameActors.actor($gameVariables.value(60)).isStateAffected(1)  && $gameVariables.value(91) > 0) $gameSwitches.setValue(177, true)
	if(id == 1 && $gameVariables.value(92) < (15 + p + pp + (ppp * 2)) && $gameVariables.value(6) < 50 && $gameVariables.value(91) > 0) $gameSwitches.setValue(177, true)
	if(id == 2 && $gameVariables.value(92) < (25 + p + pp + (ppp * 2)) && $gameVariables.value(91) < 1) $gameSwitches.setValue(177, true)
	};
    }
  };



Window_ActorCommand.prototype.addSkillCommands = function() {
    var skillTypes = this._actor.addedSkillTypes();
    skillTypes.sort(function(a, b) {
        return a - b;
    });
    skillTypes.forEach(function(stypeId) {
        var name = $dataSystem.skillTypes[stypeId];
        if(stypeId == 1){
        var sktype = 'magic'
        }
        if(stypeId == 2){
        var sktype = 'skill'
        }
        if(stypeId == 4){
        var sktype = 'summon'
        }
        this.addCommand(name, sktype, true, stypeId);
    }, this);
};

Scene_Menu.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    $gameSwitches.setValue(535, true);
    this._statusWindow.refresh();
};



Game_Troop.prototype.expTotal = function() {
    return this.deadMembers().reduce(function(r, enemy) {
    var ppexp = enemy.exp();
    if($gameSwitches.value(522) && $gameVariables.value(293)>5){
    if($gameVariables.value(293)==6)ppexp *= 1.4;
    if($gameVariables.value(293)==7)ppexp *= 1.7;
    if($gameVariables.value(293)==8)ppexp *= 2;
    if($gameVariables.value(293)==9)ppexp *= 2.3;
    if($gameVariables.value(293)==10)ppexp *= 3;
    }
        return r + ppexp;
    }, 0);
};

Scene_Title.prototype.drawGameTitle = function() {
    var x = 20;
    var y = Graphics.height / 4 + 55;
    var maxWidth = Graphics.width - x * 2;
    var text = $dataSystem.gameTitle;
    this._gameTitleSprite.bitmap.outlineColor = 'black';
    this._gameTitleSprite.bitmap.outlineWidth = 8;
    this._gameTitleSprite.bitmap.fontSize = 42;
    this._gameTitleSprite.bitmap.drawText(text, x, y, maxWidth, 48, 'center');
};


BattleManager.setup = function(troopId, canEscape, canLose) {
    this.initMembers();
    this._canEscape = canEscape;
    this._canLose = canLose;
    $gameTroop.setup(troopId);
    $gameScreen.onBattleStart();
    this.makeEscapeRatio();
    
    var name = 'Window';
    $gameSystem.windowskinName = 'Window2';
    ImageManager.loadSystem(name);
    //this.setWaitMode('image');
};

BattleManager.endBattle = function(result) {
    this._phase = 'battleEnd';
    if (this._eventCallback) {
        this._eventCallback(result);
    }
    if (result === 0) {
        $gameSystem.onBattleWin();
    } else if (this._escaped) {
        $gameSystem.onBattleEscape();
    }
    $gameVariables.setValue(484, 0);
    var name = 'Window';
    $gameSystem.windowskinName = 'Window';
    ImageManager.loadSystem(name);
    //this.setWaitMode('image');
};


Window_BattleStatus.prototype.windowWidth = function() {
    return Graphics.boxWidth -192;
};

Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
	this.drawActorFace(actor, rect.x -30, rect.y, 144, 40);
    this.drawActorName(actor, rect.x + 117, rect.y, 120);
    this.drawActorIcons(actor, rect.x + 236, rect.y, 32);
};

Window_BattleStatus.prototype.basicAreaRect = function(index) {
    var rect = this.itemRectForText(index);
    rect.width -= this.gaugeAreaWidth() + 105;
    return rect;
};

Window_BattleStatus.prototype.gaugeAreaRect = function(index) {
    var rect = this.itemRectForText(index);
    rect.x += rect.width - this.gaugeAreaWidth() + 37;
    rect.width = this.gaugeAreaWidth();
    return rect;
};

Game_BattlerBase.prototype.die = function() {
    this._hp = 0;
    //this.clearStates();
    this.clearBuffs();
};

Sprite_Actor.prototype.setActorHome = function(index) {
    this.setHome(300 + index * 32, 360 + index * 48);
};

Sprite_Battler.prototype.setupAnimation = function() {
    while (this._battler.isAnimationRequested()) {
        var data = this._battler.shiftAnimation();
        var animation = $dataAnimations[data.animationId];
        var mirror = data.mirror;
        var delay = animation.position === 3 ? 0 : data.delay;
        this.startAnimation(animation, mirror, delay);
        for (var i = 0; i < this._animationSprites.length; i++) {
            var sprite = this._animationSprites[i];
            sprite.visible = true;//this._battler.isSpriteVisible();
        }
    }
};

BattleManager.startTurn = function() {
$gameSwitches.setValue(382,true);
    this._phase = 'turn';
    this.clearActor();
    $gameTroop.increaseTurn();
    this.makeActionOrders();
    $gameParty.requestMotionRefresh();
    this._logWindow.startTurn();
};



Game_Action.prototype.applyCritical = function(damage) {
    return damage * 2 + 5;
};

Window_NumberInput.prototype.updateButtonsVisiblity = function() {
    this.showButtons();
};

Game_Actor.prototype.showRemovedStates = function() {
    this.result().removedStateObjects().forEach(function(state) {
        if (state.message4) {
        if ($gameParty.inBattle()) {
            $gameMessage.add(this._name + state.message4);
        }else{
        var nyanya = $gameVariables.value(283);
        if(nyanya==0) nyanya = "";
        $gameVariables.setValue(283, nyanya + this._name + state.message4 + "\n");
        $gameSwitches.setValue(498, true);
        }
        }
    }, this);
};

Spriteset_Battle.prototype.createLowerLayer = function() {
    Spriteset_Base.prototype.createLowerLayer.call(this);
    //this.createBackground();
    this.createBattleField();
    this.createBattleback();
    
    this.createEnemies();
    this.createActors();
};


Game_Battler.prototype.onTurnEnd = function() {
    this.clearResult();
    if($gameSwitches.value(625))return;
    this.regenerateAll();
    this.updateStateTurns();
    this.updateBuffTurns();
    if($gameParty.inBattle())this.removeStatesAuto(2);
};


Game_Actor.prototype.stepsForTurn = function() {
    return 10;
};

Scene_Map.prototype.updateEncounterEffect = function() {
    if (this._encounterEffectDuration > 0) {
        this._encounterEffectDuration = 0;
    }
};

Scene_Map.prototype.launchBattle = function() {
    BattleManager.saveBgmAndBgs();
    this.stopAudioOnBattleStart();
    SoundManager.playBattleStart();
    this.startEncounterEffect();
    //this._mapNameWindow.hide();
};

Scene_Map.prototype.startEncounterEffect = function() {
    //this._spriteset.hideCharacters();
    this._encounterEffectDuration = this.encounterEffectSpeed();
};

Spriteset_Map.prototype.createLowerLayer = function() {
    Spriteset_Base.prototype.createLowerLayer.call(this);
    //this.createParallax();
    //this.createTilemap();
    //this.createCharacters();
    //this.createShadow();
    //this.createDestination();
    //this.createWeather();
};

Spriteset_Map.prototype.update = function() {
    Spriteset_Base.prototype.update.call(this);
    //this.updateTileset();
    //this.updateParallax();
    //this.updateTilemap();
    //this.updateShadow();
    //this.updateWeather();
};

Scene_Map.prototype.createDisplayObjects = function() {
    this.createSpriteset();
    //this.createMapNameWindow();
    this.createWindowLayer();
    this.createAllWindows();
};

Scene_Map.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    if (!SceneManager.isNextScene(Scene_Battle)) {
        this._spriteset.update();
        //this._mapNameWindow.hide();
        //SceneManager.snapForBackground();
    }
    $gameScreen.clearZoom();
};

Scene_Title.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    //SceneManager.snapForBackground();
};

Scene_Map.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SceneManager.clearStack();
    if (this._transfer) {
        this.fadeInForTransfer();
        //this._mapNameWindow.open();
        $gameMap.autoplay();
    } else if (this.needsFadeIn()) {
        this.startFadeIn(this.fadeSpeed(), false);
    }
    this.menuCalling = false;
};

Scene_Map.prototype.stop = function() {
    Scene_Base.prototype.stop.call(this);
    $gamePlayer.straighten();
    //this._mapNameWindow.close();
    if (this.needsSlowFadeOut()) {
        this.startFadeOut(this.slowFadeSpeed(), false);
    } else if (SceneManager.isNextScene(Scene_Map)) {
        this.fadeOutForTransfer();
    } else if (SceneManager.isNextScene(Scene_Battle)) {
        this.launchBattle();
    }
};




Game_BattlerBase.prototype.paramBuffRate = function(paramId) {
	if(this._buffs[paramId] > 2) return (this._buffs[paramId] - 2) * 0.10 + 1.6;
    return this._buffs[paramId] * 0.30 + 1.0;
};

Game_BattlerBase.prototype.buffIconIndex = function(buffLevel, paramId) {
    if (buffLevel > 0) {
    	if (buffLevel > 2) {
        return (buffLevel - 3) * 8 + paramId + 832;
        }else{
        return Game_BattlerBase.ICON_BUFF_START + (buffLevel - 1) * 8 + paramId;
        }
    } else if (buffLevel < 0) {
        return Game_BattlerBase.ICON_DEBUFF_START + (-buffLevel - 1) * 8 + paramId;
    } else {
        return 0;
    }
};
Game_BattlerBase.prototype.isMaxBuffAffected = function(paramId) {
    return this._buffs[paramId] === 6;
};


Scene_Battle.prototype.onSkillCancel = function() {
    this._skillWindow.hide();
    this._actorCommandWindow.activate();
    $gameSwitches.setValue(381,false);
};

ImageManager.loadPicture = function(filename, hue) {
if ( filename.match(/3d/)) {
    return this.loadBitmap('img/pictures/textures/', filename, hue, true);
}else{
    return this.loadBitmap('img/pictures/', filename, hue, true);
}
};

BattleManager.displayStartMessages = function() {
    if (this._preemptive) {
        $gameMessage.add(TextManager.preemptive.format($gameActors.actor(6)._name));
    } else if (this._surprise) {
        $gameMessage.add(TextManager.surprise.format($gameActors.actor(6)._name));
    }
};

BattleManager.displayVictoryMessage = function() {
    $gameMessage.add(TextManager.victory.format($gameActors.actor(6)._name));
};

BattleManager.displayDefeatMessage = function() {
    $gameMessage.add(TextManager.defeat.format($gameActors.actor(6)._name));
};

BattleManager.displayEscapeSuccessMessage = function() {
    $gameMessage.add(TextManager.escapeStart.format($gameActors.actor(6)._name));
};

BattleManager.displayEscapeFailureMessage = function() {
    $gameMessage.add(TextManager.escapeStart.format($gameActors.actor(6)._name));
    $gameMessage.add('\\.' + TextManager.escapeFailure);
};


Window_MenuStatus.prototype.numVisibleRows = function() {
    return 5;
};

Game_Battler.prototype.speed = function() {

if(this._actorId>0){
if($gameActors.actor(this._actorId)._spd == false){
	$gameActors.actor(this._actorId)._spd = true;
    if($gameActors.actor(this._actorId).isStateAffected(160) && $dataSkills[this._actions[0]._item._itemId].stypeId == 1) this._speed += 20;
    //console.log($gameActors.actor(this._actorId)._name + this._speed)
    }
}
    return this._speed;
};



Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 180;
    var width2 = Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x2, y, 100);
    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
    this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
};

Scene_Skill.prototype.useItem = function() {
    Scene_ItemBase.prototype.useItem.call(this);
    this._statusWindow.refresh();
    $gameVariables.setValue(586, $gameParty.numItems($dataItems[4]))
    this._helpWindow.refresh();
    this._itemWindow.refresh();
};


Game_Party.prototype.ratePreemptive = function(troopAgi) {
    //var rate = this.agility() >= troopAgi ? 0.05 : 0.03;
    if (this.hasRaisePreemptive()) {
        var rate = this.agility() * 4 / troopAgi / 10;
    } else {
        var rate = this.agility() / troopAgi / 10;
    }
    if($gameSwitches.value(479))rate=0;
    if($gameSwitches.value(461))rate=0;
    if($gameSwitches.value(104))rate = 0;
    if($gameSwitches.value(332))rate=1;
    return rate;
};

Game_Party.prototype.rateSurprise = function(troopAgi) {
    //var rate = this.agility() >= troopAgi ? 0.03 : 0.05;
    if (this.hasCancelSurprise()) {
        var rate = troopAgi / 5 / this.agility() / 10;
    } else {
        var rate = troopAgi / this.agility() / 10;
    }
    if($gameSwitches.value(479))rate=0;
    if($gameSwitches.value(461))rate=0;
    if($gameSwitches.value(332))rate=0;
    if($gameSwitches.value(104))rate = 1
    return rate;
};

Game_Player.prototype.moveByInput = function() {
    if (!this.isMoving() && this.canMove()) {
        var direction = this.getInputDirection();
        if (direction > 0) {

            $gameTemp.clearDestination();
        } else if ($gameTemp.isDestinationValid()){
        //    var x = $gameTemp.destinationX();
        //    var y = $gameTemp.destinationY();
        //    direction = this.findDirectionTo(x, y);
        }
        if (direction == 8) {
            $gameSwitches.setValue(86,true)
        }
	if (direction == 2) {
            $gameSwitches.setValue(85,true)
        }
        if (direction == 4) {
            $gameSwitches.setValue(83,true)
        }
        if (direction == 6) {
            $gameSwitches.setValue(84,true)
        }
    }
};

Game_Action.prototype.itemEffectCommonEvent = function(target, effect) {
$gameVariables.setValue(421,this.subject()._actorId)
};

Game_Action.prototype.applyGlobal = function() {
    this.item().effects.forEach(function(effect) {
        if (effect.code === Game_Action.EFFECT_COMMON_EVENT) {
$gameVariables.setValue(421,this.subject()._actorId)
            $gameTemp.reserveCommonEvent(effect.dataId);
        }
    }, this);
};

Scene_Map.prototype.updateScene = function() {
    this.checkGameover();
    if (!SceneManager.isSceneChanging()) {
        this.updateTransferPlayer();
    }
    if (!SceneManager.isSceneChanging()) {
        this.updateEncounter();
    }
    if (!SceneManager.isSceneChanging()) {
        this.updateCallMenu();
    }
    if (!SceneManager.isSceneChanging()) {
        this.updateCallDebug();
    }
};

Game_Event.prototype.stopCountThreshold = function() {
if($gameSwitches.value(31)){
return 0
}
else{
    return 240 * (5 - this.moveFrequency());
}
};


})();
