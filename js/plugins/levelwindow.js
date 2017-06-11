(function() {



Scene_Save.prototype.onSavefileOk = function() {
	$gameVariables.setValue(493, 0);
    Scene_File.prototype.onSavefileOk.call(this);
    $gameSystem.onBeforeSave();
    if (DataManager.saveGame(this.savefileId())) {
        this.onSaveSuccess();
    } else {
        this.onSaveFailure();
    }
};

Window_EventItem.prototype.updatePlacement = function() {
    if (this._messageWindow.y >= Graphics.boxHeight / 2) {
    var yy = 0;
    if($gameSwitches.value(520))yy = 48;
        this.y = 0 + yy;
    } else {
        this.y = Graphics.boxHeight - this.height;
    }
};

Window_EquipSlot.prototype.drawItem = function(index) {
    if (this._actor) {
        var rect = this.itemRectForText(index);
        this.changeTextColor(this.systemColor());
        this.changePaintOpacity(this.isEnabled(index));
        this.drawText(this.slotName(index), rect.x, rect.y, 108, this.lineHeight());
        this.drawItemName(this._actor.equips()[index], rect.x + 108, rect.y);
        this.changePaintOpacity(true);
    }
};


Window_Status.prototype.drawBlock1 = function(y) {
    this.drawActorName(this._actor, 6, y);
    this.drawActorClass(this._actor, 192, y);
    this.drawActorNickname(this._actor, 432, y);
this.changeTextColor(this.systemColor());
this.drawText("JP", 650, y, 35, 'right');
this.resetTextColor();
this.drawText(this._actor._jp[this._actor._classId], 690, y, 40, 'right');
};


var BattleManager_updateBattleEnd = BattleManager.updateBattleEnd;
BattleManager.updateBattleEnd = function() {
BattleManager_updateBattleEnd.call(this);

var num = $gameVariables.value(15) - $gameTroop.turnCount() / 5;
$gameVariables.setValue(15,num);
var num = $gameVariables.value(16) - $gameTroop.turnCount() / 2 - 1;
$gameVariables.setValue(16,num);
var num = $gameVariables.value(20) + $gameTroop.turnCount() + 2;
$gameVariables.setValue(20,num);
if(!$gameSwitches.value(25)) $gameSwitches.setValue(33,true);
$gameSwitches.setValue(326,true);
};



Game_Actor.prototype.displayLevelUp = function(newSkills) {
num = $gameVariables.value(434)
$gameSwitches.setValue(17,true)
if(this._actorId==1){
$gameVariables.setValue(435,num)
$gameSwitches.setValue(18,true)
}
if(this._actorId==2){
$gameVariables.setValue(436,num)
$gameSwitches.setValue(19,true)
}
if(this._actorId==3){
$gameVariables.setValue(437,num)
$gameSwitches.setValue(20,true)
}
if(this._actorId==4){
$gameVariables.setValue(438,num)
$gameSwitches.setValue(21,true)
}
if(this._actorId==5){
$gameVariables.setValue(439,num)
$gameSwitches.setValue(22,true)
}
num += 1
$gameVariables.setValue(434,num)
};



BattleManager.displayDropItems = function() {
    var items = this._rewards.items;
    if (items.length > 0) {
$gameSwitches.setValue(23,true)
 //$gameMessage.newPage();
        items.forEach(function(item) {
num = $gameVariables.value(441)
num += 1
$gameVariables.setValue(441,num)
id = $gameVariables.value(441) +441
$gameVariables.setValue(id,item.name)
        });
    }
    $gameSwitches.setValue(251, true)
};

Window_BattleStatus.prototype.numVisibleRows = function() {
    return 5;
};

Window_ActorCommand.prototype.numVisibleRows = function() {
    return 5;
};

Game_Interpreter.prototype.command301 = function() {
    if (!$gameParty.inBattle()) {
        var troopId;
        if (this._params[0] === 0) {  // Direct designation
            troopId = this._params[1];
        } else if (this._params[0] === 1) {  // Designation with a variable
            troopId = $gameVariables.value(this._params[1]);
        } else {  // Same as Random Encounter
            troopId = $gamePlayer.makeEncounterTroopId();
        }
        if ($dataTroops[troopId]) {
            BattleManager.setup(troopId, this._params[2], this._params[3]);
            BattleManager.onEncounter();
            BattleManager.setEventCallback(function(n) {
                this._branch[this._indent] = n;
            }.bind(this));
            $gamePlayer.makeEncounterCount();
            SceneManager.push(Scene_Battle);
        }
    }
    return true;
};

BattleManager.onEncounter = function() {
    this._preemptive = (Math.random() < this.ratePreemptive());
    this._surprise = (Math.random() < this.rateSurprise() && !this._preemptive);
};

	Game_BattlerBase.prototype.meetsUsableItemConditions = function(item) {
	if(BattleManager.isInputting()){
	if(item.meta.class){
	if(item.meta.class==3){
	if(!BattleManager.actor().isClass($dataClasses[3])) return false;
	if(item.meta.god){
	
	if(item.meta.god==1 && !BattleManager.actor().isStateAffected(25))return false;
	if(item.meta.god==2 && !BattleManager.actor().isStateAffected(26))return false;
	if(item.meta.god==3 && !BattleManager.actor().isStateAffected(27))return false;
	if(item.meta.god==4 && !BattleManager.actor().isStateAffected(28))return false;
	if(item.meta.god==5 && !BattleManager.actor().isStateAffected(29))return false;
	if(item.meta.god==6 && !BattleManager.actor().isStateAffected(30))return false;
	if(item.meta.god==7 && !BattleManager.actor().isStateAffected(31))return false;
	if(item.meta.god==8 && !BattleManager.actor().isStateAffected(32))return false;
	
	}
	}
	}
	}
    return this.canMove() && this.isOccasionOk(item);
	};
	

})();
