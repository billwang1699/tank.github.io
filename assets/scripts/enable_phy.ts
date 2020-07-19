
const {ccclass, property} = cc._decorator;

@ccclass
export default class enable_phy extends cc.Component {

    @property(cc.Vec2)
    gravity: cc.Vec2 = cc.v2(0, -320);

    @property
    is_debug: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        cc.director.getPhysicsManager().enabled = true;

        cc.director.getPhysicsManager().gravity = this.gravity;

        if (this.is_debug) {
            var Bits: any = cc.PhysicsManager.DrawBits;
            cc.director.getPhysicsManager().debugDrawFlags = Bits.e_pairBit | 
                                                             Bits.e_centerOfMassBit | 
                                                             Bits.e_jointBit | 
                                                             Bits.e_shapeBit;
        }
        else {
            cc.director.getPhysicsManager().debugDrawFlags = 0;
        }

    }

    start () {

    }

    // update (dt) {}
}
