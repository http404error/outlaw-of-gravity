ig.module(
	'game.entities.exit'
)
.requires(
	'impact.entity'
)
.defines(function () {
    EntityExit = ig.Entity.extend({
        
        size: { x: size, y: size },

        collides: ig.Entity.COLLIDES.NONE,

        type: ig.Entity.TYPE.A,

        animSheet: new ig.AnimationSheet('media/exit' + tileSize + '.png', tileSize, tileSize),

        init: function (x, y, settings) {
            this.parent(x, y, settings);

            //shrink hitbox
            this.offset.x = offset;
            this.offset.y = offset;
            this.pos.x += offset;
            this.pos.y += offset;

            // Add the animations
            this.addAnim('idle', 0.04, [0,1,2,3,4,5,6,7,8,9]);

        },

        update: function () {

            // move!
            this.parent();
        }
    });

});