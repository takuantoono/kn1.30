//=============================================================================
// InfoWindow.js
//=============================================================================

/*:
 * @plugindesc 情報表示ウィンドウをメニュー画面に追加するプラグイン
 * @author Me
 *
 * @help 情報表示ウィンドウをメニュー画面上に追加します。
 *
 */

(function() {

	// マップ上にウィンドウ表示するよ宣言
	var Scene_map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
	     
		Scene_map_start.call(this);
		this._InfoWindow3 = new Window_Info3();
	    this._InfoWindow = new Window_Info();
	    this._InfoWindow2 = new Window_Info2();
	    this._AutomapWindow = new Window_Automap();
	    this._CommentWindow = new Window_Comment();
        this.addWindow(this._InfoWindow3);
		this._InfoWindow3.hide();
	    this.addWindow(this._InfoWindow);
	    this._InfoWindow.hide();
	    this.addWindow(this._InfoWindow2);
	    this._InfoWindow2.hide();
	    this.addWindow(this._AutomapWindow);
	    this._AutomapWindow.hide();
	    this.addWindow(this._CommentWindow);
	    this._CommentWindow.hide();
	};
 

	
var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);

if($gameSwitches.value(269)){
		this._AutomapWindow.show();
        this._AutomapWindow.setText();
}

if($gameSwitches.value(270)){
		this._AutomapWindow.hide();
}

 if($gameSwitches.value(265)){
		this._InfoWindow3.show();
        this._InfoWindow3.setText();
}

if($gameSwitches.value(266)){
		this._InfoWindow3.hide();
}

if($gameSwitches.value(550)){
		this._CommentWindow.show();
		this._CommentWindow.setText();
}

if($gameSwitches.value(551)){
		this._CommentWindow.hide();
}

if($gameSwitches.value(267)){
	if($gameSwitches.value(68)){
		this._InfoWindow.hide();
	    this._InfoWindow2.show();
        this._InfoWindow2.setText();
	}else{
		this._InfoWindow2.hide();
	    this._InfoWindow.show();
        this._InfoWindow.setText();
	}
}

if($gameSwitches.value(268)){
	if($gameSwitches.value(68)){
	    this._InfoWindow2.hide();
	}else{
	    this._InfoWindow.hide();
	}
}



    };

	// ここからメニューウィンドウ作り始まります。
	function Window_Info() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info.prototype = Object.create(Window_Base.prototype);
	Window_Info.prototype.constructor = Window_Info;
	Window_Info.prototype.initialize = function() {
		var x = 0;
		var y = 0;
	    var width = 720;
	    var height = this.lineHeight()+10;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info.prototype.refresh = function() {
	    this.contents.clear();
if($gameVariables.value(493)>=1){
this.drawIcon(79, 0, 0);
}
this.changeTextColor(this.textColor(16));
if(!$gameSwitches.value(8)){
this.drawText("　　　視界" ,35,0);
this.drawText($gameVariables.value(428) ,155,1);
}
else{
if($gameVariables.value(430)==0){
this.drawText("午前" ,35,0);
}
if($gameVariables.value(430)==1){
this.drawText("午後" ,35,0);
}
if($gameVariables.value(430)==2){
this.drawText("夜　：視界" ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}
if($gameVariables.value(430)==3){
this.drawText("深夜：視界" ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}
}


if($gameVariables.value(15)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
		
        
		this.drawText("食料",200, 0);
if($gameVariables.value(15)>=$gameVariables.value(423)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(15) ,270,0);
if($gameVariables.value(15)<=0){
this.drawIcon(13, 310, 0);
}

if($gameVariables.value(16)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
	  	this.drawText("元気",370, 0);
if($gameVariables.value(16)>=$gameVariables.value(422)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(16) ,440,0);
if($gameVariables.value(16)<=0){
this.drawIcon(12, 470, 0);
}


if($gameSwitches.value(32)){
if($gameSwitches.value(238)){
if($gameVariables.value(17)>=$gameVariables.value(253)){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
}else{
if($gameVariables.value(17)<=10){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
}
if($gameSwitches.value(238)){
	  	this.drawText("任務経過",530, 0);
}else{
	  	this.drawText("任務期限",530, 0);
}
		this.resetTextColor();
		this.drawText($gameVariables.value(17) ,630,0);

	};
	
}


	// フォントサイズ
	Window_Info.prototype.standardFontSize = function() {
    	return 20;
    };
	// ウィンドウの透明度
	Window_Info.prototype.standardBackOpacity = function() {
    	return 255;
	};
    // ウィンドウの余白
	Window_Info.prototype.standardPadding = function() {
    	return 6;
	};
	// ウィンドウの色調
	Window_Info.prototype.updateTone = function() {
    	this.setTone(64, 0, 128);
	};
	




function Window_Info2() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info2.prototype = Object.create(Window_Base.prototype);
	Window_Info2.prototype.constructor = Window_Info2;
	Window_Info2.prototype.initialize = function() {
		var x = 0;
		var y = 0;
	    var width = 420;
	    var height = this.lineHeight()*2+6;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info2.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info2.prototype.refresh = function() {
	    this.contents.clear();
if($gameVariables.value(493)>=1){
this.drawIcon(79, 0, 0);

}
this.changeTextColor(this.textColor(16));
if(!$gameSwitches.value(8)){
this.drawText("　　　視界" ,35,0);
this.drawText($gameVariables.value(428) ,155,1);
}
else{
if($gameVariables.value(430)==0){
this.drawText("午前" ,35,0);
}
if($gameVariables.value(430)==1){
this.drawText("午後" ,35,0);
}
if($gameVariables.value(430)==2){
this.drawText("夜　：視界" ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}
if($gameVariables.value(430)==3){
this.drawText("深夜：視界" ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}
}


if($gameVariables.value(15)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
		
        
		this.drawText("食料",200, 0);
if($gameVariables.value(15)>=$gameVariables.value(423)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(15) ,270,0);
if($gameVariables.value(15)<=0){
this.drawIcon(13, 310, 0);
}

if($gameVariables.value(16)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
	  	this.drawText("元気",30, 30);
if($gameVariables.value(16)>=$gameVariables.value(422)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(16) ,130,30);
if($gameVariables.value(16)<=0){
this.drawIcon(12, 160, 30);
}


if($gameSwitches.value(32)){
if($gameSwitches.value(238)){
if($gameVariables.value(17)>=$gameVariables.value(253)){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
}else{
if($gameVariables.value(17)<=10){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
}
if($gameSwitches.value(238)){
	  	this.drawText("任務経過",230, 30);
}else{
	  	this.drawText("任務期限",230, 30);
}
		this.resetTextColor();
		this.drawText($gameVariables.value(17) ,330,30);

	};
}


	// フォントサイズ
	Window_Info2.prototype.standardFontSize = function() {
    	return 20;
    };
	// ウィンドウの透明度
	Window_Info2.prototype.standardBackOpacity = function() {
    	return 255;
	};
    // ウィンドウの余白
	Window_Info2.prototype.standardPadding = function() {
    	return 6;
	};
	// ウィンドウの色調
	Window_Info2.prototype.updateTone = function() {
    	this.setTone(64, 0, 128);
	};


function Window_Automap() {
	    this.initialize.apply(this, arguments);
	}

	Window_Automap.prototype = Object.create(Window_Base.prototype);
	Window_Automap.prototype.constructor = Window_Automap;
	Window_Automap.prototype.initialize = function() {
		var x = 150;
		var y = 52;
	    var width = 500;
	    var height = this.lineHeight()*14-6;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Automap.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	Window_Automap.prototype.tiaojian = function(rid, ppap) {
	if($dataMap.events[ppap] && rid == 76 && $gameSelfSwitches.value([$gameMap._mapId, ppap, "B"])){
    return true;
    }
    if($dataMap.events[ppap] && rid == 74 && $gameSelfSwitches.value([$gameMap._mapId, ppap, "B"])){
    return true;
    }
    if($dataMap.events[ppap] && rid == 66 && $gameSelfSwitches.value([$gameMap._mapId, ppap, "B"])){
    return true;
    }
    if($dataMap.events[ppap] && rid == 72 && $gameSelfSwitches.value([$gameMap._mapId, ppap, "B"])){
    return true;
    }
    if(rid == 69 || rid == 68 || rid == 70 || rid == 81){
    return true;
    }
    return false;
	};
	
	// ウィンドウに載せる内容
	Window_Automap.prototype.refresh = function() {
	    this.contents.clear();
var x = 0;
var y = 0;
var id = 0;
var idd = 0;
var sid = 0;
var tid = 0;
var rid = 0;
for (var i = 0; i < 400; i++) {
if($gameVariables.value(2)[i]=="Z"){
x = i % 20;
y = i / 20;
x = Math.floor(x);
y = Math.floor(y);
xx = x * 24;
yy = y * 24;
if($gameSwitches.value(169)){
x = (x+6)
y = (y+7)
}
if($gameSwitches.value(421)){
x = (x+1)
y = (y+1)
}
id = $gameMap.tileId(x, y, 0);
rid = $gameMap.regionId(x, y);
var ppap = $gameMap.eventIdXy(x, y);
if(this.tiaojian(rid, ppap)){
this.drawIcon(335, xx + 3, yy + 3);
}else{
if(id == 1569) this.drawIcon(320, xx + 3, yy + 3);
if(id == 1577) this.drawIcon(321, xx + 3, yy + 3);
if(id == 1570) this.drawIcon(322, xx + 3, yy + 3);
if(id == 1578) this.drawIcon(323, xx + 3, yy + 3);
if(id == 1579) this.drawIcon(324, xx + 3, yy + 3);
if(id == 1571) this.drawIcon(325, xx + 3, yy + 3);
if(id == 1580) this.drawIcon(326, xx + 3, yy + 3);
if(id == 1581) this.drawIcon(327, xx + 3, yy + 3);
if(id == 1583) this.drawIcon(328, xx + 3, yy + 3);
if(id == 1582) this.drawIcon(329, xx + 3, yy + 3);
if(id == 1584) this.drawIcon(330, xx + 3, yy + 3);
if(id == 1585) this.drawIcon(331, xx + 3, yy + 3);
if(id == 1586) this.drawIcon(332, xx + 3, yy + 3);
if(id == 1587) this.drawIcon(333, xx + 3, yy + 3);
if(id == 1576) this.drawIcon(334, xx + 3, yy + 3);
if(id == 1552) this.drawIcon(335, xx + 3, yy + 3);
}

if($gameSwitches.value(97)){
tid = $gameMap.terrainTag(x, y);
if(tid == 3) this.drawIcon(335, xx + 3, yy + 3);
tid = $gameMap.terrainTag(x-1, y);
if(tid == 1) this.drawIcon(346, xx + 3, yy + 3);
tid = $gameMap.terrainTag(x+1, y);
if(tid == 1) this.drawIcon(346, xx + 24, yy + 3);
tid = $gameMap.terrainTag(x, y-1);
if(tid == 1) this.drawIcon(345, xx + 3, yy + 3);
tid = $gameMap.terrainTag(x, y+1);
if(tid == 1) this.drawIcon(345, xx + 3, yy + 24);

tid = $gameMap.eventIdXy(x-1, y);
if($gameVariables.value(829)==x && $gameVariables.value(830)==y){
 this.drawIcon(336, xx + 3, yy + 3);
}
}


if($dataMap.events[ppap] && $gameSwitches.value(283)){
if($dataMap.events[ppap].meta.wana>0){
 this.drawIcon(348, xx + 3, yy + 3);
}
}

if($dataMap.events[ppap]){
if($dataMap.events[ppap].meta.ent && $gameSelfSwitches.value([$gameMap._mapId, ppap, "E"])){
     this.drawIcon(351, xx + 3, yy + 3);
    }
if($dataMap.events[ppap].meta.hate && $gameSelfSwitches.value([$gameMap._mapId, ppap, "E"])){
     this.drawIcon(823, xx + 3, yy + 3);
    }
}


idd = $gameMap.tileId(x-1, y, 0)
rid = $gameMap.regionId(x-1, y);
ppap = $gameMap.eventIdXy(x-1, y);
if(this.tiaojian(rid, ppap)){
}else{
if(idd==1578 || idd==1579 || idd==1581 || idd==1582 ||
 idd==1584 || idd==1585 || idd==1587 || idd==1576) this.drawIcon(346, xx + 3, yy + 3);
}
idd = $gameMap.tileId(x+1, y, 0)
rid = $gameMap.regionId(x+1, y);
ppap = $gameMap.eventIdXy(x+1, y);
if(this.tiaojian(rid, ppap)){
}else{
if(idd==1570 || idd==1579 || idd==1580 || idd==1583 ||
 idd==1584 || idd==1585 || idd==1586 || idd==1576) this.drawIcon(346, xx + 24, yy + 3);
}
idd = $gameMap.tileId(x, y-1, 0)
rid = $gameMap.regionId(x, y-1);
ppap = $gameMap.eventIdXy(x, y-1);
if(this.tiaojian(rid, ppap)){
}else{
if(idd==1577 || idd==1571 || idd==1582 || idd==1583 ||
 idd==1585 || idd==1586 || idd==1587 || idd==1576) this.drawIcon(345, xx + 3, yy + 3);
}
idd = $gameMap.tileId(x, y+1, 0)
rid = $gameMap.regionId(x, y+1);
ppap = $gameMap.eventIdXy(x, y+1);
if(this.tiaojian(rid, ppap)){
}else{
if(idd==1569 || idd==1571 || idd==1580 || idd==1581 ||
 idd==1584 || idd==1586 || idd==1587 || idd==1576) this.drawIcon(345, xx + 3, yy + 24);
 }
 
 
rid = $gameMap.regionId(x, y);
if(rid == 15)this.drawIcon(336, xx + 3, yy + 3);

if(x == $gamePlayer.x && y == $gamePlayer.y){
if($gamePlayer._direction == 8)this.drawIcon(341, xx + 3, yy + 3);
if($gamePlayer._direction == 2)this.drawIcon(342, xx + 3, yy + 3);
if($gamePlayer._direction == 4)this.drawIcon(343, xx + 3, yy + 3);
if($gamePlayer._direction == 6)this.drawIcon(344, xx + 3, yy + 3);

}

}
}

}


	// フォントサイズ
	Window_Automap.prototype.standardFontSize = function() {
    	return 12;
    };
	// ウィンドウの透明度
	Window_Automap.prototype.standardBackOpacity = function() {
    	return 50;
	};
    // ウィンドウの余白
	Window_Automap.prototype.standardPadding = function() {
    	return 6;
	};
	// ウィンドウの色調
	Window_Automap.prototype.updateTone = function() {
    	this.setTone(64, 0, 128);
	};
	



function Window_Info3() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info3.prototype = Object.create(Window_Base.prototype);
	Window_Info3.prototype.constructor = Window_Info3;
	Window_Info3.prototype.initialize = function() {
		var x = 0;
		var y = 82;
	    var width = 440;
	    if($gameVariables.value(705)==5){
	    	var height = 310;
	    }else{
	    	var height = 250;
	    }
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info3.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info3.prototype.refresh = function() {
	    this.contents.clear();
	    var actor = $gameParty.members()[0];
	    this.drawActorSuperSimpleStatus(actor, 0,0,200);
	    var actor = $gameParty.members()[1];
	    this.drawActorSuperSimpleStatus(actor, 0,60,200);
	    var actor = $gameParty.members()[2];
	    this.drawActorSuperSimpleStatus(actor, 0,120,200);
	    var actor = $gameParty.members()[3];
	    this.drawActorSuperSimpleStatus(actor, 0,180,200);
	    if($gameVariables.value(705)==5){
	    	var actor = $gameParty.members()[4];
	    	this.drawActorSuperSimpleStatus(actor, 0,240,200);
	    }
}


	// フォントサイズ
	Window_Info3.prototype.standardFontSize = function() {
    	return 12;
    };
	// ウィンドウの透明度
	Window_Info3.prototype.standardBackOpacity = function() {
    	return 155;
	};
    // ウィンドウの余白
	Window_Info3.prototype.standardPadding = function() {
    	return 6;
	};
	// ウィンドウの色調
	Window_Info3.prototype.updateTone = function() {
    	this.setTone(64, 128, 128);
	};

Window_Base.prototype.drawActorSuperSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 290;
    var x3 = x + 180;
    var width2 = 70;
    this.drawActorName(actor, x3, y);
    
    this.drawActorIcons(actor, x3+180, y + 10);
    this.drawActorClass(actor, x2, y);
    this.drawActorHp(actor, x3, y + lineHeight / 2 , width2);
    this.drawActorMp(actor, x3 + 100, y + lineHeight / 2, width2);
    this.drawActorFace(actor, 1, y, 144, 58);
    
};


function Window_Comment() {
	    this.initialize.apply(this, arguments);
	}

	Window_Comment.prototype = Object.create(Window_Base.prototype);
	Window_Comment.prototype.constructor = Window_Comment;
	Window_Comment.prototype.initialize = function() {
		var x = 30;
		var y = 152;
	    var width = 730;
	    var height = 60;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};
	

	Window_Comment.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Comment.prototype.refresh = function() {
	    this.contents.clear();
	    if($gameVariables.value(310) <= $gameVariables.value(705)){
	    var actor = $gameActors.actor($gameVariables.value(310));
	    this.drawActorFace(actor, 1, 0, 144, 58);
	    }
	    var text = $gameVariables.value(308);
	    this.drawText(text,150, 0);
	    if($gameVariables.value(310) <= $gameVariables.value(705)){
	    var num = $gameVariables.value(311);
	    if(num == 1) this.drawIcon(717, 670, 0);
	    if(num == 2) this.drawIcon(717, 670, 0);
	    if(num == 3) this.drawIcon(718, 670, 0);
	    if(num == 4) this.drawIcon(362, 670, 0);
	    if(num == 5) {
	    this.drawIcon(362, 670, 0);
	    this.drawIcon(362, 685, 0);
	    }
	    }
}


	// フォントサイズ
	Window_Comment.prototype.standardFontSize = function() {
    	return 22;
    };
	// ウィンドウの透明度
	Window_Comment.prototype.standardBackOpacity = function() {
    	return 50;
	};
    // ウィンドウの余白
	Window_Comment.prototype.standardPadding = function() {
    	return 6;
	};
	// ウィンドウの色調
	Window_Comment.prototype.updateTone = function() {
    	this.setTone(64, 128, 128);
	};



})();