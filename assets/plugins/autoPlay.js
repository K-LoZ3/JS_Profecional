function autoPLay() {}

autoPLay.prototype.run = function(player) {
   player.mute();
   player.play();
}

export default autoPLay;