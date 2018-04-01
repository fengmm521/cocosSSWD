
var creaesLayer = cc.Layer.extend({
    onEnter: function () {
        this._super();
        var node,
            file = res.createRoom;
        var json = ccs.load(file);
        node = json.node;
        this.addChild(node);
        // ccs.actionManager.playActionByName("startMenu_1.json", "Animation1");
        // this.initSize(node);
    },
    onExit: function() {
        ccs.actionManager.releaseActions();
        this._super();
    }
});

var creaesScence = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new creaesLayer();
        this.addChild(layer);
    }
});

