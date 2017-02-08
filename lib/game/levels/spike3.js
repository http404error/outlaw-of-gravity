ig.module( 'game.levels.spike3' )
.requires( 'impact.image','game.entities.spike','game.entities.player','game.entities.exit','game.entities.crate' )
.defines(function(){
LevelSpike3=/*JSON[*/{"entities":[{"type":"EntitySpike","x":160,"y":96,"settings":{"spikeDir":"down"}},{"type":"EntityPlayer","x":288,"y":160},{"type":"EntityExit","x":608,"y":32},{"type":"EntitySpike","x":128,"y":192,"settings":{"spikeDir":"right"}},{"type":"EntitySpike","x":576,"y":256,"settings":{"spikeDir":"up"}},{"type":"EntitySpike","x":544,"y":288,"settings":{"spikeDir":"left"}},{"type":"EntityCrate","x":288,"y":192},{"type":"EntityCrate","x":320,"y":192},{"type":"EntitySpike","x":0,"y":64,"settings":{"spikeDir":"down"}},{"type":"EntitySpike","x":384,"y":0,"settings":{"spikeDir":"left"}}],"layer":[{"name":"collision","width":20,"height":11,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1],[0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],[0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],[0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"world","width":40,"height":22,"linkWithCollision":false,"visible":1,"tilesetName":"media/walls32.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,7,0,0,0,0,0],[0,0,0,0,0,0,13,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,15,0,0,0,0,0,0,13,14,14,14,14,14],[1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0],[13,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,15,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],[0,0,0,0,0,0,0,0,0,0,13,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,0,0,0,0,0,0,0,0,0,0,0,7,19,14,14,14,14,14,14,14,14,14,14,20,9,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,0,0,0,1,3,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,0,0,0,13,15,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[1,3,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[13,15,0,0,0,0,0,0,0,0,0,0,13,15,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,0,0,0,0,0,13,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,26,9,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,0,0,0,0,0,0,0,0,0,0,0,13,14,14,14,14,14,14,14,14,14,14,14,14,15,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,3,0,0,0,0,0,0,7,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14,14,15,0,0,0,0,0,0,7,0],[0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,26,0],[0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0],[2,2,26,25,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,26,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelSpike3Resources=[new ig.Image('media/walls32.png')];
});