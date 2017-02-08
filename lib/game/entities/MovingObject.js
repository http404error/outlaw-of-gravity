ig.module(
	'game.entities.MovingObject'
)
.requires(
	'impact.entity'
)
.defines(function () {
    EntityMovingObject = ig.Entity.extend({

        size: { x: tileSize, y: tileSize },

        collides: ig.Entity.COLLIDES.PASSIVE,

        type: ig.Entity.TYPE.A,

        maxVel: { x: 640, y: 640 }, //replaced on init

        gravAccel: 960, //replaced on init

        restricted: null,

        init: function (x, y, settings) {
            this.parent(x, y, settings);

            this.maxVel = { x: 20 * tileSize, y: 20 * tileSize };

            this.gravAccel = 30 * tileSize;

            // Set endpoint restraints based on Weltmeister settings of movePos and moveNeg
            this.positivePos = {};
            this.negativePos = {};
            this.positivePos.x = this.pos.x + (this.movePos * tileSize); // Furthest positive
            this.negativePos.x = this.pos.x - (this.moveNeg * tileSize); // Furthest negative
            this.positivePos.y = this.pos.y + (this.movePos * tileSize); // Furthest positive
            this.negativePos.y = this.pos.y - (this.moveNeg * tileSize); // Furthest negative
        },

        update: function () {

            // If stationary and unblocked, accelerate with gravity
            if (!this.vel.x && !this.vel.y) {
                // Round position to nearest pixel to avoid nasty alignment bugs
                this.pos.x = Math.round(this.pos.x);
                this.pos.y = Math.round(this.pos.y);

                // Set collision check zone
                var threshold = 4;
                var cBox = {
                    pos: {x: 0, y: 0},
                    size: {x: 0, y: 0}
                };
                if (ig.game.gravityVector.x > 0) {
                    cBox.pos.x = this.pos.x + this.size.x;
                    cBox.pos.y = this.pos.y;
                    cBox.size.x = threshold;
                    cBox.size.y = this.size.y;
                } else if (ig.game.gravityVector.x < 0) {
                    cBox.pos.x = this.pos.x - threshold;
                    cBox.pos.y = this.pos.y;
                    cBox.size.x = threshold;
                    cBox.size.y = this.size.y;
                } else if (ig.game.gravityVector.y > 0) {
                    cBox.pos.x = this.pos.x;
                    cBox.pos.y = this.pos.y + this.size.y;
                    cBox.size.x = this.size.x;
                    cBox.size.y = threshold;
                } else if (ig.game.gravityVector.y < 0) {
                    cBox.pos.x = this.pos.x;
                    cBox.pos.y = this.pos.y - threshold;
                    cBox.size.x = this.size.x;
                    cBox.size.y = threshold;
                }

                // Check collision box vs all boxes
                var blocks = ig.game.getEntitiesByType( EntityCrate );
                var willMove = true;
                for (var i = 0; i < blocks.length; i++) {
                    if ( blocks[i].touches( cBox ) ) {
                        willMove = false;
                        break;
                    }
                }

                // Set acceleration
                if (willMove) {
                    if (this.restricted != 'y') {
                        this.accel.x = ig.game.gravityVector.x * this.gravAccel;
                    }
                    if (this.restricted != 'x') {
                        this.accel.y = ig.game.gravityVector.y * this.gravAccel;
                    }
                } else {
                    this.accel.x = 0;
                    this.accel.y = 0;
                }
            }

            // move!
            this.parent();

            // Enforce endpoint constraints
            if (this.restricted == 'x' || this.restricted == 'y') {
                if (ig.game.gravityVector.x > 0) {
                    // Too right
                    if (this.pos.x >= this.positivePos.x) {
                        this.accel.x = 0;
                        this.vel.x = 0;
                        this.pos.x = Math.floor(this.pos.x / ig.game.tileSize) * ig.game.tileSize;
                    }
                } else if(ig.game.gravityVector.x < 0) {
                    // Too left
                    if (this.pos.x <= this.negativePos.x) {
                        this.accel.x = 0;
                        this.vel.x = 0;
                        this.pos.x = Math.ceil(this.pos.x / ig.game.tileSize) * ig.game.tileSize;
                    }
                } else if (ig.game.gravityVector.y > 0) {
                    // Too low
                    if (this.pos.y >= this.positivePos.y) {
                        this.accel.y = 0;
                        this.vel.y = 0;
                        this.pos.y = Math.floor(this.pos.y / ig.game.tileSize) * ig.game.tileSize;
                    }
                } else if(ig.game.gravityVector.y < 0) {
                    // Too high
                    if (this.pos.y <= this.negativePos.y) {
                        this.accel.y = 0;
                        this.vel.y = 0;
                        this.pos.y = Math.ceil(this.pos.y / ig.game.tileSize) * ig.game.tileSize;
                    }
                }
            }
        }
    });


});