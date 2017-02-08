ig.module(
	'game.entities.spike'
)
.requires(
    //'game.entities.initialize',
	'impact.entity'
)
.defines(function () {
    EntitySpike = ig.Entity.extend({
        
        size: { x: size, y: size },

        collides: ig.Entity.COLLIDES.NONE,

        type: ig.Entity.TYPE.A,

        animSheet: new ig.AnimationSheet('media/spikes' + tileSize + '.png', tileSize, tileSize),

        spikeDir: 'up', // SET THIS IN WELTMEISTER

        init: function (x, y, settings) {
            this.parent(x, y, settings);

            //shrink hitbox
            this.offset.x = offset;
            this.offset.y = offset;
            this.pos.x += offset;
            this.pos.y += offset;

            // Add the animations
            var frame = 0;
            this.pointy = {x: 0, y: 0};
            var initialPos;
            if (this.spikeDir == 'up') {
                frame = 0;
                this.pointy.y = -1;
            } else if (this.spikeDir == 'down') {
                frame = 1;
                this.pointy.y = 1;
            } else if (this.spikeDir == 'left') {
                frame = 2;
                this.pointy.x = -1;
            } else if (this.spikeDir == 'right') {
                frame = 3;
                this.pointy.x = 1;
            }
            this.addAnim('idle', 1, [frame]);
        },

        update: function () {

            // move!
            this.parent();
        }
    });

});