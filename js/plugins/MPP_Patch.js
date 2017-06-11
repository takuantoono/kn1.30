//=============================================================================
// MPP_Patch.js
//=============================================================================

/*:
 * @plugindesc 【2016/08/11】不具合修正プラグイン
 * @author 木星ペンギン
 *
 * @help 1.ダメージスプライトの更新が２度行われている不具合の修正
 * 2.画面スクロール中、マップとキャラクターの同期がとれていない不具合の修正
 * 3.サイドビュー戦闘でアクターが防御中にＨＰ吸収で戦闘不能となった場合、
 *   倒れグラフィックに変更されない不具合の修正
 * 
 * ================================
 * 制作 : 木星ペンギン
 * URL : http://woodpenguin.blog.fc2.com/
 */

(function() {

// 1.ダメージスプライトの更新が２度行われている不具合の修正
Sprite_Battler.prototype.updateDamagePopup = function() {
    this.setupDamagePopup();
    if (this._damages.length > 0) {
//        for (var i = 0; i < this._damages.length; i++) {
//            this._damages[i].update();
//        }
        if (!this._damages[0].isPlaying()) {
            this.parent.removeChild(this._damages[0]);
            this._damages.shift();
        }
    }
};

// 2.画面スクロール中、タイルマップとキャラクターの座標が同期できていない不具合の修正
Spriteset_Map.prototype.updateTilemap = function() {
    this._tilemap.origin.x = Math.round($gameMap.displayX() * $gameMap.tileWidth());
    this._tilemap.origin.y = Math.round($gameMap.displayY() * $gameMap.tileHeight());
};

// 3.サイドビュー戦闘でアクターが防御中にＨＰ吸収で戦闘不能となった場合、
//   倒れグラフィックに変更されない不具合の修正
var _Sprite_Actor_refreshMotion = Sprite_Actor.prototype.refreshMotion;
Sprite_Actor.prototype.refreshMotion = function() {
    var actor = this._actor;
    if (actor) {
        var stateMotion = actor.stateMotionIndex();
        if (stateMotion === 3) {
            this.startMotion('dead');
            return;
        }
    }
    _Sprite_Actor_refreshMotion.call(this);
};


})();
