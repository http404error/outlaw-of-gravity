ig.module( 'game.levels.cratehub' )
.requires( 'impact.image','game.entities.gate','game.entities.exit','game.entities.player','game.entities.text' )
.defines(function(){
LevelCratehub=/*JSON[*/{"entities":[{"type":"EntityGate","x":224,"y":160,"settings":{"location":6}},{"type":"EntityExit","x":608,"y":256,"settings":{"location":14}},{"type":"EntityExit","x":0,"y":256,"settings":{"location":0}},{"type":"EntityExit","x":64,"y":0,"settings":{"location":4}},{"type":"EntityExit","x":128,"y":0,"settings":{"location":5}},{"type":"EntityGate","x":352,"y":160,"settings":{"location":9}},{"type":"EntityGate","x":256,"y":0,"settings":{"location":7}},{"type":"EntityGate","x":160,"y":160,"settings":{"location":5}},{"type":"EntityExit","x":320,"y":0,"settings":{"location":9}},{"type":"EntityGate","x":320,"y":0,"settings":{"location":8}},{"type":"EntityExit","x":160,"y":160,"settings":{"location":6}},{"type":"EntityExit","x":416,"y":160,"settings":{"location":11}},{"type":"EntityExit","x":448,"y":0,"settings":{"location":12}},{"type":"EntityExit","x":352,"y":160,"settings":{"location":10}},{"type":"EntityPlayer","x":288,"y":224},{"type":"EntityExit","x":224,"y":160,"settings":{"location":7}},{"type":"EntityExit","x":256,"y":0,"settings":{"location":8}},{"type":"EntityGate","x":128,"y":0,"settings":{"location":4}},{"type":"EntityExit","x":512,"y":0,"settings":{"location":13}},{"type":"EntityGate","x":512,"y":0,"settings":{"location":12}},{"type":"EntityGate","x":416,"y":160,"settings":{"location":10}},{"type":"EntityGate","x":448,"y":0,"settings":{"location":11}},{"type":"EntityText","x":80,"y":32,"settings":{"mytext":1}},{"type":"EntityText","x":48,"y":260,"settings":{"mytext":"intro"}},{"type":"EntityText","x":144,"y":32,"settings":{"mytext":2}},{"type":"EntityText","x":432,"y":140,"settings":{"mytext":8}},{"type":"EntityText","x":176,"y":140,"settings":{"mytext":3}},{"type":"EntityText","x":240,"y":140,"settings":{"mytext":4}},{"type":"EntityText","x":336,"y":32,"settings":{"mytext":6}},{"type":"EntityText","x":272,"y":32,"settings":{"mytext":5}},{"type":"EntityText","x":368,"y":140,"settings":{"mytext":7}},{"type":"EntityText","x":464,"y":32,"settings":{"mytext":9}},{"type":"EntityText","x":528,"y":32,"settings":{"mytext":10}},{"type":"EntityText","x":576,"y":260,"settings":{"mytext":"world 2"}},{"type":"EntityGate","x":608,"y":256,"settings":{"location":13}},{"type":"EntityText","x":304,"y":288,"settings":{"mytext":"world 1: outside the box"}}],"layer":[{"name":"collision","width":20,"height":11,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1],[1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1],[1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1],[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1],[1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1],[1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"world","width":40,"height":22,"linkWithCollision":false,"visible":1,"tilesetName":"media/walls32.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,0],[0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,0],[0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,0],[0,19,14,15,0,0,7,9,0,0,13,14,14,14,14,15,0,0,7,9,0,0,13,14,14,14,14,15,0,0,7,9,0,0,13,14,20,0,0,0],[0,9,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,7,0,0,0],[0,9,0,0,0,0,13,15,0,0,0,0,0,0,0,0,0,0,13,15,0,0,0,0,0,0,0,0,0,0,13,15,0,0,0,0,7,0,0,0],[0,9,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0,0,0,7,0,0,0],[0,9,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,7,0,0,0],[0,9,0,0,1,2,2,2,2,3,0,0,7,9,0,0,1,2,2,2,2,3,0,0,7,9,0,0,1,2,2,2,2,3,0,0,7,0,0,0],[0,9,0,0,7,0,0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,9,0,0,7,0,0,0],[0,9,0,0,7,0,0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,9,0,0,7,0,0,0],[0,9,0,0,7,0,0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,9,0,0,7,9,0,0,7,0,0,0,0,9,0,0,7,0,0,0],[0,9,0,0,7,0,0,0,0,25,2,2,26,25,2,2,26,0,0,0,0,25,2,2,26,25,2,2,26,0,0,0,0,9,0,0,7,0,0,0],[0,9,0,0,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,0,0,7,0,0,0],[0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0],[14,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14,14,14],[0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0],[2,2,2,2,2,2,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25,2,2,2,2,2,2,2,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelCratehubResources=[new ig.Image('media/walls32.png')];
});