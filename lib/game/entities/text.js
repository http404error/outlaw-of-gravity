ig.module(
	'game.entities.text'
)
.requires(
	'impact.entity'
)
.defines(function () {

    EntityText = ig.Entity.extend({
        
        size: { x: size, y: size },

        collides: ig.Entity.COLLIDES.NONE,

        type: ig.Entity.TYPE.A,

        mytext: "Test!",

        prox: false,

        init: function (x, y, settings) {
            this.parent(x, y, settings);

        },

        update: function () {

            // move!
            this.parent();
        }
    });

});