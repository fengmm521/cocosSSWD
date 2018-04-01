
var creaesLayer = cc.Layer.extend({
    onEnter: function () {
        this._super();
        var node,
            file = res.createRoom;
        if(cocoStudioOldApiFlag == 0){
            cc.log("ccs.load : %s", file);
            var json = ccs.load(file);
            node = json.node;
        }else{
            //ccs.sceneReader only supports 1.x file
            cc.log("ccs.sceneReader.createNodeWithSceneFile : %s", file);
            node = ccs.sceneReader.createNodeWithSceneFile(file);
        }
        this.addChild(node);
        // ccs.actionManager.playActionByName("startMenu_1.json", "Animation1");
        this.initSize(node);
    },
    onExit: function() {
        ccs.actionManager.releaseActions();
        this._super();
    },
    title: function () {
        return "loadSceneEdtiorFile Test";
    }
});

var creaesScence = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new creaesLayer();
        this.addChild(layer);
    }
});

