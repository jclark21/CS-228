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

function HandleBone(bone){
    //console.log(bone);
    var bone_start = bone.prevJoint;
    //console.log(bone_start)
    var x = bone_start[0];
    var y = bone_start[1]; 
    var z = bone_start[2]; //- window.innerHeight


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
}

function HandleFinger(finger){
    for (var i = 0;i<finger.bones.length;i++)
    {
        HandleBone(finger.bones[i]);
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