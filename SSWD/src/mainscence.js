
var FirstUILayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        

        return true;
    },

    onEnter: function () {
        this._super();

        var node,
            file = res.mainScene;
        var json = ccs.load(file);
        node = json.node;
        this.addChild(node);

        
        // 创建游戏
        var cBtn = node.getChildByName("btncreateroom");
        cBtn.addTouchEventListener(this.touchEventCBtn, this);
        // #/Volumes/mage/applications/Cocos/Cocos2d-x/cocos2d-x-3.15

        var oBtn = node.getChildByName("inbtn");
        oBtn.addTouchEventListener(this.touchEventinBtn, this);

        // ccs.actionManager.playActionByName("startMenu_1.json", "Animation1");
        // this.initSize(node);
    },
    onExit: function() {
        ccs.actionManager.releaseActions();
        this._super();
    },
    touchEventCBtn:function(sender, type){
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                    cc.log("touch began");
                    sender.setScale(0.95);
                break;

            case ccui.Widget.TOUCH_MOVED:
//                cc.log("touch move");
                break;

            case ccui.Widget.TOUCH_ENDED:
                cc.log("touch end");
                    sender.setScale(1.0);
                break;

            case ccui.Widget.TOUCH_CANCELED:
                cc.log("touch cancele");
                    sender.setScale(1.0);
                break;

            default:
                break;
        }
    },
    touchEventinBtn:function(sender, type){
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                    cc.log("touch began");
                    sender.setScale(0.95);
                break;

            case ccui.Widget.TOUCH_MOVED:
//                cc.log("touch move");
                break;

            case ccui.Widget.TOUCH_ENDED:
                cc.log("touch end");
                    sender.setScale(1.0);
                break;

            case ccui.Widget.TOUCH_CANCELED:
                cc.log("touch cancele");
                    sender.setScale(1.0);
                break;

            default:
                break;
        }
    }
});

var FirstUIScence = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new FirstUILayer();
        this.addChild(layer);
    }
});

