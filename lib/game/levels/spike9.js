ig.module( 'game.levels.spike9' )
.requires( 'impact.image','game.entities.exit','game.entities.spike','game.entities.crate','game.entities.player' )
.defines(function(){
LevelSpike9=/*JSON[*/{"entities":[{"type":"EntityExit","x":352,"y":160},{"type":"EntitySpike","x":512,"y":96,"settings":{"spikeDir":"down"}},{"type":"EntityCrate","x":256,"y":128},{"type":"EntityPlayer","x":288,"y":96},{"type":"EntityCrate","x":576,"y":288},{"type":"EntitySpike","x":512,"y":192},{"type":"EntityCrate","x":256,"y":288},{"type":"EntityCrate","x":352,"y":288},{"type":"EntitySpike","x":168,"y":476,"settings":{"spikeDir":"right"}},{"type":"EntityCrate","x":32,"y":288}],"layer":[{"name":"collision","width":20,"height":11,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1],[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],[1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1],[0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],[1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1],[1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1],[1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1]]},{"name":"world","width":40,"height":22,"linkWithCollision":false,"visible":1,"tilesetName":"media/walls32.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,7,0,0,0,0,0,0,9,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0],[0,19,14,14,14,14,14,14,14,15,0,0,0,0,0,0,13,14,14,14,14,14,14,15,0,0,0,0,0,0,13,14,14,14,14,14,14,14,20,0],[0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,9,0,0,1,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,3,0,0,7,0],[0,9,0,0,7,19,14,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14,20,9,0,0,7,0],[0,9,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,7,0],[0,9,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,7,0],[0,9,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,7,0],[14,15,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,13,15,0,0,13,14],[0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,1,2,26,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,13,14,20,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,3,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,1,2],[0,9,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,13,14,14,15,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,7,0],[0,9,0,0,7,9,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,26,9,0,0,7,0],[0,9,0,0,7,9,0,0,13,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14,14,15,0,0,7,0],[0,9,0,0,7,25,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,9,0,0,13,14,14,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0],[0,25,2,2,2,2,2,2,2,3,0,0,0,0,0,0,1,2,2,2,2,2,2,3,0,0,0,0,0,0,1,2,2,2,2,2,2,2,26,0],[0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,7,0,0,0,0,0,0,9,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelSpike9Resources=[new ig.Image('media/walls32.png')];
});