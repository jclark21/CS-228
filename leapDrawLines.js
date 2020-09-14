function HandleFrame(frame){
    if(frame.hands.length==1)
    {
     hand = frame.hands[0];
     HandleHand(hand)
    }
}

function HandleHand(hand){
    console.log(hand);
    fingers  = hand.fingers;
    console.log(fingers);
    for (var i = 0;i<fingers.length;i++)
    {
        HandleFinger(fingers[i]);
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

function HandleBone(bone,weight){
    //console.log(bone);
    var bone_base = bone.prevJoint;
    var xb = bone_base[0];
    var yb = bone_base[1]; 
    var zb = bone_base[2]; //- window.innerHeight
    [xb,yb] = TransformCoordinates(xb,yb);
    var bone_tip = bone.nextJoint;
    //console.log(bone_start)
    var xt = bone_tip[0];
    var yt = bone_tip[1];
    var zt = bone_tip[2];
    [xt,yt] = TransformCoordinates(xt,yt);

/*
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

    x = (((x-rawXMin)*(window.innerWidth-0))/(rawXMax-rawXMin))+0
    y = (((y-rawYMin)*(window.innerHeight-0))/(rawYMax-rawYMin))+0
*/
    //circle(x,window.innerHeight-y,50);
    strokeWeight(10-(2*weight));
    stroke((4-weight)*60,(4-weight)*60,(4-weight)*60);
    line(xb,window.innerHeight-yb,xt,window.innerHeight-yt);
}

function HandleFinger(finger){
    for (var i = 0;i<finger.bones.length;i++)
    {
        HandleBone(finger.bones[i],i);
    }
    
    //if(finger.type == 1)
    //{
       /* tipPosition = finger.tipPosition
        console.log(tipPosition);
        var x = tipPosition[0];
        var y = tipPosition[1]; 
        var z = tipPosition[2]; //- window.innerHeight


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

        x = (((x-rawXMin)*(window.innerWidth-0))/(rawXMax-rawXMin))+0
        y = (((y-rawYMin)*(window.innerHeight-0))/(rawYMax-rawYMin))+0

        circle(x,window.innerHeight-y,50);
        */
    //}
}

var controllerOptions = {};
//var i = 0;
var x = window.innerWidth/2;
var y = window.innerHeight/2;

var rawXMin = 1000;
var rawXMax = 0.0001;
var rawYMin = 1000;
var rawYMax = 0.0001;


Leap.loop(controllerOptions, function(frame)
{
    clear();
    //randx = Math.random()*2 - 1;
    //randy = Math.random()*2 - 1;
    //circle(x+randx,y+randy,50);
    HandleFrame(frame);
   
}
);