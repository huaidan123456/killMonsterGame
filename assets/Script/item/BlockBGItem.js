
cc.Class({
    extends: cc.Component,

    properties: {

        m_n_bright: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },

    start() {

    },

    setBrightVisible(boo, color) {
        this.m_n_bright.active = boo;
        if(color){
            let color = cc.Color.WHITE;
            this.m_n_bright.color = cc.Color.WHITE;
        }
    },
    // update (dt) {},
});
