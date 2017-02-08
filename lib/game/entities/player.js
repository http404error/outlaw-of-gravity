ig.module(
    'game.entities.player'
)
.requires(
    'game.entities.MovingObject',
    'impact.entity'
)
.defines(function () {
    EntityPlayer = EntityMovingObject.extend({

        collides: ig.Entity.COLLIDES.PASSIVE,

        checkAgainst: ig.Entity.TYPE.A, //Type A objects affect the player on overlap

        type: ig.Entity.TYPE.NONE,

        animSheet: new ig.AnimationSheet('media/dude' + tileSize + '.png', tileSize, tileSize),

        turnSpeed: 0.3, //radians per frame
        turnVelocity: 0,

        init: function (x, y, settings) {
            this.parent(x, y, settings);

            // Add the animations
            this.addAnim('idle', 1, [0]); //name, length per frame, array of frames (could  be say [0,1,2,2,2,2,1] or something like that
            this.targetAngle = 0;

        },

        update: function () {

            // Handle image rotation
            var grav = ig.game.gravityVector;
            if (grav.x > 0) {
                this.targetAngle = 3 * Math.PI / 2;
            } else if (grav.x < 0) {
                this.targetAngle = Math.PI / 2;
            } else if (grav.y > 0) {
                this.targetAngle = 0;
            } else if (grav.y < 0) {
                this.targetAngle = Math.PI;
            }
            this.currentAnim.angle %= 2 * Math.PI;
            if (this.currentAnim.angle < 0) {
                this.currentAnim.angle += 2 * Math.PI;
            }

            if (this.targetAngle < this.currentAnim.angle) {
                this.targetAngle += 2 * Math.PI;
            }

            var diff = this.targetAngle - this.currentAnim.angle;
            if (Math.abs(diff) <= this.turnSpeed) {
                this.currentAnim.angle = this.targetAngle;
            } else if (diff > Math.PI) {
                this.currentAnim.angle -= this.turnSpeed;
            } else {
                this.currentAnim.angle += this.turnSpeed;
            }

            // Enforce out of bounds fail
            if ( (this.pos.x < (-tileSize) || (this.pos.x > (tileSize * 20)) || (this.pos.y < -tileSize) || (this.pos.y > tileSize * 11)) ) {
                console.log("out of bounds!");
                ig.game.levelFailed();
            }

            // REMOVE collision if stationary
            // (so the player can be squished without being shoved outside somewhere)
            if (this.vel.x || this.vel.y) {
                if (this.collides != ig.Entity.COLLIDES.PASSIVE) {
                    this.collides = ig.Entity.COLLIDES.PASSIVE;
                }
            } else {
                if (this.collides != ig.Entity.COLLIDES.NONE) {
                    this.collides = ig.Entity.COLLIDES.NONE;
                }
            }

            // move!
            this.parent();
        },
        
        check: function (other) {
            if (other instanceof EntityExit) {
                // If Exit has a hardcoded destination (hubs only), jump there
                // Otherwise, finish the level
                if (typeof other.location !== "undefined"){
                    if (other.location >= 0) {
                        ig.game.goTo(other.location);
                    } else {
                        console.log('invalid destination!');
                    }
                } else {
                    ig.game.levelComplete();
                }
            } else if (other instanceof EntityCrate) {
                // Check if player has been squished
                if (!ig.game.preventSwitch && !this.vel.x && !this.vel.y && !other.vel.x && !other.vel.y) {
                    //reset after brief delay
                    ig.game.preventSwitch = true;
                    console.log("squish!");
                    setTimeout(function() {ig.game.levelFailed();}, 900);
                }
            } else if (other instanceof EntitySpike) {
                // Check if player has been spiked

                // Make sure that lag doesn't cause the player to spike themselves through a crate
                var crates = ig.game.getEntitiesByType( EntityCrate );
                for (var i = 0; i < crates.length; i++) {
                    if (this.touches(crates[i])) {
                        return;
                    }
                }
                if (this.vel.x * other.pointy.x < 0 || this.vel.y * other.pointy.y < 0) {
                    // If spiked, immediately reset
                    ig.game.levelFailed();
                    console.log("spiked!");
                }
            }

        }
    });
});