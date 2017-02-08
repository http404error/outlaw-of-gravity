ig.module( 'game.levels.intro3' )
.requires( 'impact.image','game.entities.player','game.entities.exit' )
.defines(function(){
LevelIntro3=/*JSON[*/{"entities":[{"type":"EntityPlayer","x":96,"y":288},{"type":"EntityExit","x":288,"y":0}],"layer":[{"name":"collision","width":20,"height":11,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0],[1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0],[1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"world","width":40,"height":22,"linkWithCollision":false,"visible":1,"tilesetName":"media/walls32.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0],[7,0,0,19,14,14,14,14,14,14,14,14,14,14,20,0,0,9,0,0,7,0,0,19,14,14,14,14,14,14,14,14,14,14,20,0,0,9,0,0],[7,0,0,9,0,0,0,0,0,0,0,0,0,0,7,0,0,9,0,0,7,0,0,9,0,0,0,0,0,0,0,0,0,0,7,0,0,9,0,0],[7,19,14,15,0,0,0,0,0,0,0,0,0,0,13,14,20,9,0,0,7,19,14,15,0,0,0,0,0,0,0,0,0,0,13,14,20,9,0,0],[7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0],[13,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,15,0,0,13,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,15,0,0],[0,0,0,0,0,0,1,2,2,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,13,14,14,14,14,14,14,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14,14,14,14,14,14,15,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,15,0,0],[0,0,1,2,2,2,2,2,2,3,0,0,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,13,14,14,14,14,14,14,15,0,0,13,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,3,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14,14,14,14,14,14,15,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelIntro3Resources=[new ig.Image('media/walls32.png')];
});