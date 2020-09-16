function HandleFrame(frame){
    if(frame.hands.length==1)
    {
     hand = frame.hands[0];
     HandleHand(hand)
    }
}
function HandleHand(hand){
    fingers  = hand.fingers;
    for (var i = 3;i>-1;i--)
        {
            for (var j = 0;j<fingers.length;j++)
            {
                HandleBone(fingers[j].bones[i],i)
            }
        }
    /*
    for (var i = 0;i<fingers.length;i++)
    {
        //finger = fingers[i]
        for (var i = 0;i<finger.bones.length;i++)
        {
            HandleBone(fingers[i].bones[i],i);
        }
        //HandleFinger(fingers[i]);
    }
    */
}
function HandleFinger(finger){
    for (var i = 0;i<finger.bones.length;i++)
    {
        HandleBone(finger.bones[i],i);
    }
}
function TransformCoordinates(x,y){
    if(x<rawXMin){
        rawXMin = x
        console.log(rawXMin)
    }
    if(x>rawXMax){
        rawXMax = x
        console.log(rawXMax)
    }
    if(y<rawYMin){
        rawYMin = y
        console.log(rawYMin)
    }
    if(y>rawYMax){
        rawYMax = y
        console.log(rawYMax)
    }

    x = (((x-rawXMin)*(window.innerWidth-0))/(rawXMax-rawXMin))+0;
    y = (((y-rawYMin)*(window.innerHeight-0))/(rawYMax-rawYMin))+0;
    return [x,y];
}
function HandleBone(bone,weight)
{
    var bone_base = bone.prevJoint;
    var xb = bone_base[0];
    var yb = bone_base[1]; 
    var zb = bone_base[2]; 
    [xb,yb] = TransformCoordinates(xb,yb);
    var bone_tip = bone.nextJoint;

    var xt = bone_tip[0];
    var yt = bone_tip[1];
    var zt = bone_tip[2];
    [xt,yt] = TransformCoordinates(xt,yt);

    strokeWeight(10-(2*weight));
    color_shade = (4-weight)*50;
    stroke(color(0,color_shade,0));
    line(xb,window.innerHeight-yb,xt,window.innerHeight-yt);
}


var controllerOptions = {};
var x = window.innerWidth/2;
var y = window.innerHeight/2;
var rawXMin = 1000;
var rawXMax = 0.0001;
var rawYMin = 1000;
var rawYMax = 0.0001;

var previousNumHands = 0;
var currentNumHands = 0;

Leap.loop(controllerOptions, function(frame)
{
    currentNumHands = frame.hands.length
    clear();
    HandleFrame(frame);
    previousNumHands = currentNumHands
}
);