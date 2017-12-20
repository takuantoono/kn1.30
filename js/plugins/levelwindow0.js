(function() {

Game_Party.prototype.onPlayerWalk = function() {
    $gameParty.members()[$gameVariables.value(882)].onPlayerWalk();
};

Game_Actor.prototype.turnEndOnMap = function() {
        this.onTurnEnd();
        if (this.result().hpDamage > 0) {
            this.performMapDamage();
        }
};

BattleManager.updateTurnEnd = function() {
    this.startInput();
    $gameScreen.erasePicture(10);
};



Game_Actor.prototype.nifeLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.nife) actor.nife = 1;
    $gameVariables.setValue(num, actor.nife);
};

Game_Actor.prototype.nifeAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.nife) actor.nife = 1;
    actor.nife += 1;
};

Game_Actor.prototype.swordLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.sword) actor.sword = 1;
    $gameVariables.setValue(num, actor.sword);
};

Game_Actor.prototype.swordAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.sword) actor.sword = 1;
    actor.sword += 1;
};

Game_Actor.prototype.twoSWLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoSW) actor.twoSW = 1;
    $gameVariables.setValue(num, actor.twoSW);
};

Game_Actor.prototype.twoSWAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoSW) actor.twoSW = 1;
    actor.twoSW += 1;
};

Game_Actor.prototype.axeLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.axe) actor.axe = 1;
    $gameVariables.setValue(num, actor.axe);
};

Game_Actor.prototype.axeAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.axe) actor.axe = 1;
    actor.axe += 1;
};

Game_Actor.prototype.twoAxeLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoAxe) actor.twoAxe = 1;
    $gameVariables.setValue(num, actor.twoAxe);
};

Game_Actor.prototype.twoAxeAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoAxe) actor.twoAxe = 1;
    actor.twoAxe += 1;
};

Game_Actor.prototype.twoAxeLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoAxe) actor.twoAxe = 1;
    $gameVariables.setValue(num, actor.twoAxe);
};

Game_Actor.prototype.twoAxeAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoAxe) actor.twoAxe = 1;
    actor.twoAxe += 1;
};

Game_Actor.prototype.staffLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.staff) actor.staff = 1;
    $gameVariables.setValue(num, actor.staff);
};

Game_Actor.prototype.staffAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.staff) actor.staff = 1;
    actor.staff += 1;
};

Game_Actor.prototype.bowLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.bow) actor.bow = 1;
    $gameVariables.setValue(num, actor.bow);
};

Game_Actor.prototype.bowAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.bow) actor.bow = 1;
    actor.bow += 1;
};

Game_Actor.prototype.handLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.hand) actor.hand = 1;
    $gameVariables.setValue(num, actor.hand);
};

Game_Actor.prototype.handAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.hand) actor.hand = 1;
    actor.hand += 1;
};

Game_Actor.prototype.maceLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.mace) actor.mace = 1;
    $gameVariables.setValue(num, actor.mace);
};

Game_Actor.prototype.maceAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.mace) actor.mace = 1;
    actor.mace += 1;
};

Game_Actor.prototype.twoMaceLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoMace) actor.twoMace = 1;
    $gameVariables.setValue(num, actor.twoMace);
};

Game_Actor.prototype.twoMaceAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoMace) actor.twoMace = 1;
    actor.twoMace += 1;
};

Game_Actor.prototype.spearLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.spear) actor.spear = 1;
    $gameVariables.setValue(num, actor.spear);
};

Game_Actor.prototype.spearAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.spear) actor.spear = 1;
    actor.spear += 1;
};

Game_Actor.prototype.twoSPLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoSP) actor.twoSP = 1;
    $gameVariables.setValue(num, actor.twoSP);
};

Game_Actor.prototype.twoSPAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoSP) actor.twoSP = 1;
    actor.twoSP += 1;
};

Game_Actor.prototype.gunLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.gun) actor.gun = 1;
    $gameVariables.setValue(num, actor.gun);
};

Game_Actor.prototype.gunAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.gun) actor.gun = 1;
    actor.gun += 1;
};



Window_BattleLog.prototype.displayCritical = function(target) {
    if (target.result().critical) {
        if (target.isActor()) {
        AudioManager.playSe({"name":"Monster2","volume":90,"pitch":150,"pan":0})
        $gameScreen.startFlash([255,0,0,255], 30)
            this.push('addText', TextManager.criticalToActor);
        } else {
            this.push('addText', TextManager.criticalToEnemy);
        }
        
    }
};

Game_Battler.prototype.initTp = function() {
    //this.setTp(Math.randomInt(25));
};


Game_BattlerBase.prototype.canUse = function(item) {
if ($gameSwitches.value(706)) return false;
    if (!item) {
        return false;
    } else if (DataManager.isSkill(item)) {
        return this.meetsSkillConditions(item);
    } else if (DataManager.isItem(item)) {
        return this.meetsItemConditions(item);
    } else {
        return false;
    }
};

Game_Battler.prototype.gainHp = function(value) {
    this._result.hpDamage = -value;
    this._result.hpAffected = true;
    this._flashDamageCol = false;
    this.setHp(this.hp + value);
};

Game_Action.prototype.setSubject = function(subject) {
    if (subject.isActor()) {
        this._subjectActorId = subject.actorId();
        this._subjectEnemyIndex = -1;
    } else {
        this._subjectEnemyIndex = subject.index();
        this._subjectActorId = 0;
    }
};


var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'chineseKingdom') {
    var p = $gameVariables.value($gameVariables.value(60) + 120)
	var com = $gameVariables.value($gameVariables.value(60) + 43)
	var ed = $gameActors.actor($gameVariables.value(60)).isStateAffected(83)
	var pp = 0; var ppp = 0;
	var su = 1;
	if($gameParty.members()[$gameVariables.value(54)].isStateAffected(253)) su = 3;
	if($gameParty.members()[$gameVariables.value(54)].isStateAffected(118)) pp += 15;
	if($gameSwitches.value(399) && !$gameParty.members()[$gameVariables.value(54)].isStateAffected(253)) ppp += 40;
	if($gameParty.members()[$gameVariables.value(54)]._equips[0]._itemId == 20 || $gameParty.members()[$gameVariables.value(54)]._equips[1]._itemId == 20) {
	pp += 5;
	if($gameParty.members()[$gameVariables.value(54)].isClass($dataClasses[5]))pp += 10;
	};
	if(com != 0 && !ed){
	var id = $gameVariables.value($gameVariables.value(60) + 68)
	if(id == 0 && $gameVariables.value(92) < (4 + p + pp + ppp) / su && $gameVariables.value(91) > 0) $gameSwitches.setValue(177, true)
	if(id == 1 && $gameVariables.value(92) < (15 + p + pp + (ppp * 2)) / su && $gameVariables.value(6) < 50 && $gameVariables.value(91) > 0) $gameSwitches.setValue(177, true)
	if(id == 2 && $gameVariables.value(92) < (25 + p + pp + (ppp * 2)) / su && $gameVariables.value(91) < 1) $gameSwitches.setValue(177, true)
	};
    };
    
    if (command === 'picChara') {
    var no = $gameVariables.value(809);
	var name = $gameVariables.value(519);
	var x =  $gameVariables.value(520);
	var y = $gameVariables.value(521);
	var wide = $gameVariables.value(522);
	var hight = $gameVariables.value(532);
	var suke = $gameVariables.value(803);
	var type = $gameVariables.value(805);
	$gameScreen.showPicture(no, name, 0, x, y, wide, hight, suke, type);
    };
    if (command === 'picChara2') {
    var no = $gameVariables.value(809);
	var name = $gameVariables.value(519);
	var x =  $gameVariables.value(520);
	var y = $gameVariables.value(521);
	var wide = $gameVariables.value(522);
	var hight = $gameVariables.value(532);
	var suke = 0;
	var type = $gameVariables.value(805);
	$gameScreen.showPicture(no, name, 0, x, y, wide, hight, suke, type);
    };
    if (command === 'picChara3') {
    var no = $gameVariables.value(809);
	var name = $gameVariables.value(519);
	var x =  $gameVariables.value(520);
	var y = $gameVariables.value(521);
	var wide = $gameVariables.value(522);
	var hight = $gameVariables.value(532);
	var suke = $gameVariables.value(803);
	var type = $gameVariables.value(805);
	$gameScreen.showPicture(no, name, 1, x, y, wide, hight, suke, type);
    };
    if (command === 'picMove') {
    var no = $gameVariables.value(809);
	var x =  $gameVariables.value(520);
	var y = $gameVariables.value(521);
	var wide = $gameVariables.value(522);
	var hight = $gameVariables.value(532);
	var suke = $gameVariables.value(803);
	var time = $gameVariables.value(519);
	var type = $gameVariables.value(805);
	$gameScreen.movePicture(no,0,x, y, wide, hight, suke,type,time);
    };
    
    
    if (command === 'resetWeight') {
    $gameVariables.setValue(146, 0);
    var i = 0;
    var items = Object.keys($gameParty._items);
    var id = items[i];
    var item
    var num
    while (id) {
    item = $dataItems[id];
    num = $gameParty._items[id]
    if(item && item.meta.Weight)$gameVariables.setFloatValue(146, $gameVariables.value(146) + item.meta.Weight * num);
    i = i + 1
    var id = items[i];
    }
    i = 0;
    items = Object.keys($gameParty._weapons);
    id = items[i];
    while (id) {
    item = $dataWeapons[id];
    num = $gameParty._weapons[id]
    if(item && item.meta.Weight && item.wtypeId != 14)$gameVariables.setFloatValue(146, $gameVariables.value(146) + item.meta.Weight * num);
    i = i + 1
    var id = items[i];
    }
    i = 0;
    items = Object.keys($gameParty._armors);
    id = items[i];
    while (id) {
    item = $dataArmors[id];
    num = $gameParty._armors[id]
    if(item && item.meta.Weight && item.wtypeId != 7)$gameVariables.setFloatValue(146, $gameVariables.value(146) + item.meta.Weight * num);
    i = i + 1
    var id = items[i];
    }

    };
  };

Sprite_Timer.prototype.updatePosition = function() {
    this.x = 60;
    this.y = 70;
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
    if($gameSwitches.value(684))ppexp *= 2;
    ppexp = Math.round(ppexp);
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
    for (var i = 10; i < 150; i++) {
            	$gameScreen.erasePicture(i);
        		}
        		$gameSwitches.setValue(858, false);
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
        if(!animation)return;
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
    return damage * 1.5 + 5;
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


BattleManager.endTurn = function() {
    this._phase = 'turnEnd';
    this._preemptive = false;
    this._surprise = false;
    this.allBattleMembers().forEach(function(battler) {
        battler.clearResult();
    }, this);
};

BattleManager.endTurn2 = function() {
    this.allBattleMembers().forEach(function(battler) {
        battler.onTurnEnd();
        this.refreshStatus();
        this._logWindow.displayAutoAffectedStatus(battler);
        this._logWindow.displayRegeneration(battler);
    }, this);
};

Game_Battler.prototype.onTurnEnd = function() {
    this.regenerateAll();
    this.updateStateTurns();
    this.updateBuffTurns();
    this.removeStatesAuto(2);
};

Game_BattlerBase.prototype.updateStateTurns = function() {
    this._states.forEach(function(stateId) {
    	if($gameSwitches.value(479) && this.isActor()){
    	}else{
        if (this._stateTurns[stateId] > 0) {
        if(!$gameParty.inBattle() && $dataStates[stateId].meta.heranai){
        }else{
        this._stateTurns[stateId]--;
        }
        }
        }
    }, this);
};

Game_Battler.prototype.removeStatesAuto = function(timing) {
    this.states().forEach(function(state) {
        if (this.isStateExpired(state.id) && state.autoRemovalTiming === timing) {
        if($gameSwitches.value(479) && this.isActor()){
        }else{
            this.removeState(state.id);
         }
        }
    }, this);
};

Game_Battler.prototype.removeBattleStates = function() {
    this.states().forEach(function(state) {
        if (state.removeAtBattleEnd) {
        if($gameSwitches.value(479) && this.isActor()){
        }else{
            this.removeState(state.id);
            }
        }
    }, this);
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
    if(!$gameSwitches.value(574)){
    //this.createParallax();
    //this.createTilemap();
    //this.createCharacters();
    //this.createShadow();
    //this.createDestination();
    //this.createWeather();
    }else{
    this.createTilemap();
    this.createCharacters();
    this.createShadow();
    this.createDestination();
    }
};



Spriteset_Map.prototype.update = function() {
    Spriteset_Base.prototype.update.call(this);
    if(!$gameSwitches.value(574)){
    //this.updateTileset();
    //this.updateParallax();
    //this.updateTilemap();
    //this.updateShadow();
    //this.updateWeather();
    }else{
    this.updateTileset();
    this.updateTilemap();
    this.updateShadow();
    }
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


Game_BattlerBase.prototype.param = function(paramId) {
    var value = this.paramBase(paramId) + this.paramPlus(paramId);
    if(this._buffs[paramId] == 1) value += 3;
    if(this._buffs[paramId] == 2) value += 5;
    if(this._buffs[paramId] == 3) value += 6;
    if(this._buffs[paramId] == 4) value += 7;
    if(this._buffs[paramId] == 5) value += 8;
    if(this._buffs[paramId] == 6) value += 10;
    value *= this.paramRate(paramId) * this.paramBuffRate(paramId);
    var maxValue = this.paramMax(paramId);
    var minValue = this.paramMin(paramId);
    return Math.round(value.clamp(minValue, maxValue));
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
if ($gameSwitches.value(837)) {
return this.loadBitmap('img/enemies/', filename, hue, true);
}else{
if ( filename.match(/3d/)) {
    return this.loadBitmap('img/pictures/textures/', filename, hue, true);
}else{
if ( filename.match(/efc/)) {
    return this.loadBitmap('img/pictures/effects/', filename, hue, true);
}else{
    return this.loadBitmap('img/pictures/', filename, hue, true);
}
}
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
    if(!$gameSwitches.value(574)){
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
    }else{
    	var direction = this.getInputDirection();
        if (direction > 0) {
            $gameTemp.clearDestination();
        } else if ($gameTemp.isDestinationValid()){
            var x = $gameTemp.destinationX();
            var y = $gameTemp.destinationY();
            direction = this.findDirectionTo(x, y);
        }
        if (direction > 0) {
            this.executeMove(direction);
        }
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
