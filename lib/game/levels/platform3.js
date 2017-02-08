ig.module( 'game.levels.platform3' )
.requires( 'impact.image','game.entities.platform','game.entities.exit','game.entities.player','game.entities.spike' )
.defines(function(){
LevelPlatform3=/*JSON[*/{"entities":[{"type":"EntityPlatform","x":128,"y":224,"settings":{"movePos":3,"moveNeg":0,"restricted":"x"}},{"type":"EntityPlatform","x":256,"y":64,"settings":{"movePos":0,"moveNeg":1,"restricted":"y"}},{"type":"EntityPlatform","x":512,"y":64,"settings":{"restricted":"x","moveNeg":4,"movePos":0}},{"type":"EntityPlatform","x":448,"y":192,"settings":{"movePos":0,"moveNeg":2,"restricted":"y"}},{"type":"EntityPlatform","x":416,"y":320,"settings":{"movePos":0,"moveNeg":2,"restricted":"x"}},{"type":"EntityExit","x":512,"y":288},{"type":"EntityPlatform","x":576,"y":0,"settings":{"restricted":"x","moveNeg":4,"movePos":0}},{"type":"EntityPlayer","x":576,"y":288},{"type":"EntitySpike","x":192,"y":0,"settings":{"spikeDir":"right"}},{"type":"EntitySpike","x":160,"y":32,"settings":{"spikeDir":"right"}},{"type":"EntitySpike","x":128,"y":64,"settings":{"spikeDir":"right"}},{"type":"EntitySpike","x":96,"y":96,"settings":{"spikeDir":"right"}},{"type":"EntitySpike","x":64,"y":128,"settings":{"spikeDir":"right"}},{"type":"EntitySpike","x":32,"y":160,"settings":{"spikeDir":"right"}},{"type":"EntityPlatform","x":256,"y":96,"settings":{"restricted":"x","moveNeg":5,"movePos":0}}],"layer":[{"name":"collision","width":20,"height":11,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0]]},{"name":"world","width":40,"height":22,"linkWithCollision":false,"visible":1,"tilesetName":"media/walls32.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,5,5,5,5,5,5,5,6,0,0],[0,0,0,0,0,0,0,0,0,0,13,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,17,17,17,17,17,17,17,17,18,0,0],[0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,13,15,0,0,0,0,0,0,10,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0,10,12,0,0,0,0,0,0,4,5,5,5,5,5,5,5,5,6,0,0,0,0,0,0],[0,0,0,0,0,0,13,15,0,0,0,0,0,0,0,0,16,18,0,0,0,0,0,0,16,17,17,17,17,17,17,17,17,18,0,0,0,0,0,0],[0,0,0,0,1,3,4,5,5,5,5,5,5,5,5,5,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,13,15,16,17,17,17,17,17,17,17,17,17,17,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,6,0,0,0,0,1,3,0,0,0,0],[0,0,13,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,12,0,0,0,0,7,9,0,0,0,0],[1,3,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,3,0,0,10,12,0,0,0,0,7,9,0,0,0,0],[13,15,0,0,0,0,0,0,0,0,0,0,13,14,14,14,14,14,14,14,14,14,14,14,14,15,0,0,10,12,0,0,0,0,7,9,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,12,0,0,0,0,7,9,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,18,0,0,0,0,7,9,0,0,0,0],[0,0,0,0,0,0,0,0,4,5,5,5,5,5,5,6,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0],[0,0,0,0,0,0,0,0,16,17,17,17,17,17,17,18,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,1,2,26,9,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,13,14,20,9,0,0,0,0],[1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0],[13,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,15,0,0,0,0],[0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,4,5,5,5,5,6,0,0,0,0,0,0,0,0,1,3,0,0],[0,0,13,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,15,0,0,16,17,17,17,17,18,0,0,0,0,0,0,0,0,13,15,0,0]]}]}/*]JSON*/;
LevelPlatform3Resources=[new ig.Image('media/walls32.png')];
});