ig.module(
    'game.resident-raver.entities.zombie-b'
)
    .requires(
    'game.resident-raver.entities.base-zombie'
)
    .defines(function () {
        EntityZombieB = EntityBaseZombie.extend({
            _wmIgnore: false,
            animSheet:new ig.AnimationSheet('media/games/resident-raver/images/zombies.png', 17, 17),
            size: {x: 6, y:14},
            offset: {x: 6, y: 3},
            setupAnimation:function (offset) {
                offset = (offset * 6) + 7;
                this.addAnim('walk', .07, [0+offset,1+offset,2+offset,3+offset,4+offset]);
            }
        })
    })