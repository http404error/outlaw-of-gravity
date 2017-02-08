ig.module(
	'game.main'
)
.requires(
    'impact.game',
    'impact.font',
    //'impact.debug.debug',

    'game.entities.player',
    'game.entities.crate',
    'game.entities.exit',
    'game.entities.spike',
    'game.entities.platform',
    'game.entities.gate',
    'game.entities.text',

    'game.levels.intro1',
    'game.levels.intro2',
    'game.levels.intro3',

    'game.levels.cratehub',
    'game.levels.crate1',
    'game.levels.crate2',
    'game.levels.crate3',
    'game.levels.crate4',
    'game.levels.crate5',
    'game.levels.crate6',
    'game.levels.crate7',
    'game.levels.crate8',
    'game.levels.crate9',
    'game.levels.crate10',

    'game.levels.spikehub',
    'game.levels.spike1',
    'game.levels.spike2',
    'game.levels.spike3',
    'game.levels.spike4',
    'game.levels.spike5',
    'game.levels.spike6',
    'game.levels.spike7',
    'game.levels.spike8',
    'game.levels.spike9',
    'game.levels.spike10',

    'game.levels.platformhub',
    'game.levels.platform1',
    'game.levels.platform2',
    'game.levels.platform3',
    'game.levels.platform4',
    'game.levels.platform5',
    'game.levels.platform6',
    'game.levels.platform7',
    'game.levels.platform8',
    'game.levels.platform9',
    'game.levels.platform10',

    'game.levels.endhub',
    'game.levels.end1',
    'game.levels.end2',
    'game.levels.end3',

    'game.levels.credits',

    'plugins.director.director'
)
.defines(function () {

    levels = [LevelIntro1, LevelIntro2, LevelIntro3];
    levels.push(LevelCratehub, LevelCrate1, LevelCrate2, LevelCrate3, LevelCrate4, LevelCrate5, LevelCrate6, LevelCrate7, LevelCrate8, LevelCrate9, LevelCrate10);
    levels.push(LevelSpikehub, LevelSpike1, LevelSpike2, LevelSpike3, LevelSpike4, LevelSpike5, LevelSpike6, LevelSpike7, LevelSpike10, LevelSpike8, LevelSpike9);
    levels.push(LevelPlatformhub, LevelPlatform1, LevelPlatform2, LevelPlatform3, LevelPlatform4, LevelPlatform5, LevelPlatform7, LevelPlatform8, LevelPlatform6, LevelPlatform9, LevelPlatform10);
    levels.push(LevelEndhub, LevelEnd1, LevelEnd2, LevelEnd3, LevelCredits);

    /*
     * removeEntitiesByIndices
     * lvl: level object to remove from
     * indices: array of object indices to remove
     */
    var removeEntitiesByIndices = function(lvl, indices) {
        lvl.entities = $.grep(lvl.entities, function(entity, idx) {
            return $.inArray(idx, indices) == -1;
        });
    };

    // Sort functions
    // moving objects last (rendered on top)
    var sortFromTop = function(a, b) {
        if (!(a instanceof EntityMovingObject) && (b instanceof EntityMovingObject)) {
            return -1;
        } else if ((a instanceof EntityMovingObject) && !(b instanceof EntityMovingObject)) {
            return 1;
        } else {
            return a.pos.y - b.pos.y;
        }
    };
    var sortFromBottom = function(a, b) {
        if (!(a instanceof EntityMovingObject) && (b instanceof EntityMovingObject)) {
            return -1;
        } else if ((a instanceof EntityMovingObject) && !(b instanceof EntityMovingObject)) {
            return 1;
        } else {
            return b.pos.y - a.pos.y;
        }
    };
    var sortFromLeft = function(a, b) {
        if (!(a instanceof EntityMovingObject) && (b instanceof EntityMovingObject)) {
            return -1;
        } else if ((a instanceof EntityMovingObject) && !(b instanceof EntityMovingObject)) {
            return 1;
        } else {
            return a.pos.x - b.pos.x;
        }
    };
    var sortFromRight = function(a, b) {
        if (!(a instanceof EntityMovingObject) && (b instanceof EntityMovingObject)) {
            return -1;
        } else if ((a instanceof EntityMovingObject) && !(b instanceof EntityMovingObject)) {
            return 1;
        } else {
            return b.pos.x - a.pos.x;
        }
    };

    DropLoader = ig.Loader.extend({
        end: function() {

            // Change tileset for levels
            var curr;
            for( var i = 0; i < levels.length; i++) {
                curr = levels[i];

                curr.layer[0].tilesize = tileSize;
                curr.layer[1] = new ig.BackgroundMap( tileSize / 2, curr.layer[1].data, 'media/walls' + tileSize + '.png' );

                // Adjust entity location for large version
                if( tileSize == 64 ) {
                    for( var j = 0; j < curr.entities.length; j++ ) {
                        curr.entities[j].x *= 2;
                        curr.entities[j].y *= 2;
                    }
                }
            }
            this.parent();
        }
    });

    MyGame = ig.Game.extend({
        init: function () {

            // Bind keys
            ig.input.bind(ig.KEY.MOUSE1, 'click');
            ig.input.bind(ig.KEY.UP_ARROW, 'keyUp');
            ig.input.bind(ig.KEY.DOWN_ARROW, 'keyDown');
            ig.input.bind(ig.KEY.LEFT_ARROW, 'keyLeft');
            ig.input.bind(ig.KEY.RIGHT_ARROW, 'keyRight');
            ig.input.bind(ig.KEY.N, 'nextLevel');
            ig.input.bind(ig.KEY.B, 'backLevel');
            ig.input.bind(ig.KEY.R, 'restartLevel');

            // Set default vars
            this.font = new ig.Font( 'media/aressence.png' );
            this.swipeDir = null;
            this.threshold = tileSize * 2;
            this.tileSize = tileSize;
            this.gravityVector = { x: 0, y: 1 };
            this.canSwitch = true;
            this.preventSwitch = false;
            this.levels = levels;
            this.bSavedData = 0;
            this.firstTime = 1;
            this.levelsCompleted = [];      // 1 at indices of completed levels
            for (var i = 0; i < this.levels.length; i++) {
                this.levelsCompleted.push(0);
            }
            this.hubs = [3, 14, 25, 36];    // Indices of hub levels in this.levels
            this.activeHub = null;          // Current hub level object

            // Load save from localStorage
            if (localStorage["OoGSave"] !== "" && localStorage["OoGSave"] !== undefined) {
                ig.game.bSavedData = 1;
                this.levelsCompleted = localStorage["OoGSave"].split(',');
                for (i = 0; i < this.levelsCompleted.length; i++) {
                    this.levelsCompleted[i] = parseInt(this.levelsCompleted[i], 10);
                }
                // Annihilate gates
                var gatesToRemove = [];
                for (var j = 0; j < this.levelsCompleted.length; j++) {
                    if (this.levelsCompleted[j] == 1) {
                        gatesToRemove.push(j);
                    }
                }
                this.removeGates(gatesToRemove);
                // Set this.activeHub to start in your most advanced hub
                if (gatesToRemove.length > 0) {
                    this.activeHub = this.getHub(gatesToRemove[gatesToRemove.length - 1]);
                }
            }

            // Load levels into Director
            this.myDirector = new ig.Director(this, this.levels);

            function pause() {
                $("#swiper").hide();
                $("#canvas").hide();
                $("#pauseButton").hide();
                $("#menu").show();
                if (!ig.game.fistTime) {
                    $("#restart").show();
                    $("#hub").show();
                }
            }

            function play() {
                $("#swiper").show();
                $("#canvas").show();
                $("#pauseButton").show();
                $("#menu").hide();
            }

            // Configure touch input
            $( '#swiper' ).swipe({
                longTap:function(event, target) {
                    pause();
                    if (ig.game.activeHub === null) {
                        $('#hub').css({backgroundColor: "#A0A0A0"});
                    }
                },
                swipe:function(event, direction, distance, duration, fingerCount) {
                    ig.game.swipeDir = direction;
                },
                threshold: ig.game.threshold
            });

            $( '#resume' ).swipe({
                tap:function(event,target) {
                    ig.game.bSavedData = 1;
                    ig.game.firstTime = 0;
                    play();
                    $('#resume').text("Resume");
                    $("#options").hide();
                }
            });

            $( '#restart' ).swipe({
                tap:function(event,target) {
                    ig.game.restartLevel();
                    play();
                }
            });

            $( '#hub' ).swipe({
                tap:function(event,target) {
                    if (ig.game.activeHub !== null) {
                        ig.game.myDirector.jumpTo(ig.game.activeHub);
                        ig.game.doReset();
                        play();
                    }
                }
            });

            $( '#options' ).swipe({
                tap:function(event,target) {
                    var confirmation = confirm("Do you really want to clear your game data?  Removes save data and refreshes the page.");
                    if (confirmation === true) {
                        localStorage.clear();
                        pause();
                        location.reload();
                    }
                }
            });

            $( '#pauseButton' ).swipe({
                tap:function(event,target) {
                    pause();
                }
            });

            // Change menu for pause and main
            if(ig.game.bSavedData){
                $('#resume').text("Resume");
            } else {
                $('#options').hide();
            }
            $('#hub').hide();
            $('#restart').hide();
            $("#pauseButton").hide();

            // Start game
            if (this.activeHub !== null) {
                this.myDirector.jumpTo(this.activeHub);
            } else {
                this.myDirector.firstLevel();
            }
            this.doReset();
        },

        update: function () {

            // Only allow gravity switch if nothing is moving
            var movers = this.getEntitiesByType( EntityMovingObject );
            this.canSwitch = true;
            for (var i = 0; i < movers.length; i++) {
                if ( (movers[i].vel.x) || (movers[i].vel.y) ) {
                    this.canSwitch = false;
                    break;
                }
            }

            // Set gravity and sort entities accordingly
            if (this.canSwitch && !this.preventSwitch) {
                if (ig.input.state('keyUp') || this.swipeDir == 'up') {
                    this.gravityVector = {x: 0, y: -1};
                    this.entities.sort( sortFromTop );
                } else if (ig.input.state('keyDown') || this.swipeDir == 'down') {
                    this.gravityVector = {x: 0, y: 1};
                    this.entities.sort( sortFromBottom );
                } else if (ig.input.state('keyLeft') || this.swipeDir == 'left') {
                    this.gravityVector = {x: -1, y: 0};
                    this.entities.sort( sortFromLeft );
                } else if (ig.input.state('keyRight') || this.swipeDir == 'right') {
                    this.gravityVector = {x: 1, y: 0};
                    this.entities.sort( sortFromRight );
                }
                this.swipeDir = null;
            }

            // Debug level switch
            if (ig.input.pressed('nextLevel')) {
                this.myDirector.nextLevel();
                this.doReset();
            } else if (ig.input.pressed('backLevel')) {
                this.myDirector.previousLevel();
                this.doReset();
            } else if (ig.input.pressed('restartLevel')) {
                this.restartLevel();
            }


            // Update all entities and backgroundMaps
            this.parent();
        },

        draw: function () {
            // Draw all entities and backgroundMaps
            this.parent();
            var texts = this.getEntitiesByType( EntityText );
            var player = this.getEntitiesByType( EntityPlayer )[0];
            for (var i = 0; i < texts.length; i++) {
                if (!texts[i].prox || Math.abs(player.pos.y - texts[i].pos.y) < 50*(tileSize/32)) {
                    this.font.draw( texts[i].mytext, texts[i].pos.x, texts[i].pos.y, ig.Font.ALIGN.CENTER );
                }
            }
        },

        restartLevel: function () {
            this.myDirector.reloadLevel();
            this.doReset();
        },

        levelComplete: function () {
            var clearedLevel = this.myDirector.currentLevel;
            // Unlock progress gate in hub
            this.removeGates([clearedLevel]);
            // Mark level as completed
            this.levelsCompleted[clearedLevel] = 1;
            // Return to hub if last in set, otherwise go to next level
            if ($.inArray(clearedLevel + 1, this.hubs) != -1 && this.activeHub !== null) {
                this.myDirector.jumpTo(this.activeHub);
            } else {
                this.myDirector.nextLevel();
            }
            this.doReset();

            // If we just entered a hub, mark it as completed immediately and set this.activeHub to it
            var enteredLevel = clearedLevel + 1;
            if ($.inArray(enteredLevel, this.hubs) != -1) {
                this.levelsCompleted[enteredLevel] = 1;
                this.activeHub = this.levels[enteredLevel];
            }

            // Save progress
            localStorage["OoGSave"] = this.levelsCompleted;

        },
        
        levelFailed: function () {
            this.myDirector.reloadLevel();
            this.doReset();
        },

        levelReset: function () {
            this.myDirector.reloadLevel();
            this.doReset();
        },

        goTo: function ( levelIndex ) {
            this.myDirector.jumpTo(this.levels[levelIndex]);
            this.doReset();
        },

        doReset: function () {
            this.gravityVector = {x: 0, y: 1};
            this.entities.sort( sortFromBottom );
            this.preventSwitch = false;
        },

        removeGates: function(locations) {
            for (var h = 0; h < this.hubs.length; h++) {
                var level = this.levels[this.hubs[h]];
                var indices = [];
                for (var i = 0; i < level.entities.length; i++) {
                    if (level.entities[i].type == "EntityGate" && $.inArray(level.entities[i].settings.location, locations) != -1) {
                        console.log(level.entities[i].settings.location);
                        indices.push(i);
                    }
                }
                removeEntitiesByIndices(level, indices);
            }
        },

        getHub: function(idx) {
            for (var index = idx; index >= 0; index--) {
                if ($.inArray(index, this.hubs) != -1) {
                    return this.levels[index];
                }
            }
            return null;
        }
    });
    
    // Start the Game with 60fps, a resolution of 1280x704, scaled
    // up by a factor of 1
    
    if( tileSize == 32 ) {
        ig.main('#canvas', MyGame, 60, 640, 352, 1, DropLoader);
    } else {
        ig.main('#canvas', MyGame, 60, 1280, 704, 1, DropLoader);
    }

});
