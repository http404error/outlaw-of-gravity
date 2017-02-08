ig.module(
	'game.entities.gate'
)
.requires(
	'game.entities.crate',
    'impact.entity'
)
.defines(function () {
    EntityGate = EntityCrate.extend({

        collides: ig.Entity.COLLIDES.FIXED,

        type: ig.Entity.TYPE.A,

        checkAgainst: ig.Entity.TYPE.A,

        animSheet: new ig.AnimationSheet('media/gate' + tileSize + '.png', tileSize, tileSize),

        init: function (x, y, settings) {
            this.parent(x, y, settings);

            // Add the animations
            this.addAnim('idle', 1, [0]);

        },

        update: function () {
            //overriding with absolutely nothing
        }
    });

});