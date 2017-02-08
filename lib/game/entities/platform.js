ig.module(
	'game.entities.platform'
)
.requires(
	'game.entities.crate',
    'impact.entity'
)
.defines(function () {
    EntityPlatform = EntityCrate.extend({
        
        animSheet: new ig.AnimationSheet('media/platform' + tileSize + '.png', tileSize, tileSize),

        init: function (x, y, settings) {
            this.parent(x, y, settings);

            // Add the animations
            this.addAnim('x', 1, [0]); // Name, length per frame, array of frames (could  be say [0,1,2,2,2,2,1] or something like that
            this.addAnim('y', 1, [1]);
            this.currentAnim = (this.restricted == 'x') ? this.anims.x : this.anims.y;
        },

        update: function () {

            // Move!
            this.parent();
        }
    });

});