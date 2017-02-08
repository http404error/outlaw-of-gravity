ig.module(
	'game.entities.crate'
)
.requires(
	'game.entities.MovingObject',
    'impact.entity'
)
.defines(function () {
    EntityCrate = EntityMovingObject.extend({

        type: ig.Entity.TYPE.A,

        checkAgainst: ig.Entity.TYPE.A,

        animSheet: new ig.AnimationSheet('media/crate' + tileSize + '.png', tileSize, tileSize),

        init: function (x, y, settings) {
            this.parent(x, y, settings);

            // Add the animations
            this.addAnim('idle', 1, [0]);

            this.spikedBy = null;
            this.roomWidth = 20 * tileSize;
            this.roomHeight = 11 * tileSize;
        },

        update: function () {

            // move!
            this.parent();

            // FIX collision if stationary
            if (this.vel.x || this.vel.y) {
                // check if we just started moving
                if (this.collides != ig.Entity.COLLIDES.PASSIVE) {
                    this.collides = ig.Entity.COLLIDES.PASSIVE;
                }
            } else {
                // check if we just stopped moving
                if (this.collides != ig.Entity.COLLIDES.FIXED) {
                    this.collides = ig.Entity.COLLIDES.FIXED;
                }
            }

            // Crates the leave the play area are destroyed
            if ((this.pos.x < 0 - this.size.x) || (this.pos.x > this.roomWidth) || (this.pos.y < 0 - this.size.y) || (this.pos.y > this.roomHeight)) {
                this.kill();
            }

            // Check if unspiked
            if (this.spikedBy !== null) {
                if (!this.spikedBy.touches( this )) {
                    this.spikedBy = null;
                    this.restricted = null;
                }
            }
        },

        check: function (other) {
            // Crates impale on spikes, becoming constrained in that axis
            // Already restricted crates, such as platforms, cannot be spiked
            if (other instanceof EntitySpike && this.spikedBy === null && this.restricted === null) {
                if (this.vel.x * other.pointy.x < 0) {
                    this.spikedBy = other;
                    this.restricted = 'x';
                } else if (this.vel.y * other.pointy.y < 0) {
                    this.spikedBy = other;
                    this.restricted = 'y';
                }
            }
        }
    });

});