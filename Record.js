function HandleFrame(frame){
    if(frame.hands.length>=1)
    {
     numHands = frame.hands.length
     hand = frame.hands[0];
     var interactionBox = frame.interactionBox;
     HandleHand(hand,interactionBox)
    }
}
function HandleHand(hand,interactionBox)
{
    fingers  = hand.fingers;
    for (var i = 3;i>-1;i--)
        {
            for (var j = 0;j<fingers.length;j++)
            {
                HandleBone(fingers[j].bones[i],i,j,interactionBox)
            }
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

/* function HandleFinger(finger){
    for (var i = 0;i<finger.bones.length;i++)
    {
        HandleBone(finger.bones[i],i);
    }
} */
/* function TransformCoordinates(x,y){
    if(x<rawXMin){
        rawXMin = x
        //console.log(rawXMin)
    }
    if(x>rawXMax){
        rawXMax = x
        //console.log(rawXMax)
    }
    if(y<rawYMin){
        rawYMin = y
        //console.log(rawYMin)
    }
    if(y>rawYMax){
        rawYMax = y
        //console.log(rawYMax)
    }

    x = (((x-rawXMin)*(window.innerWidth-0))/(rawXMax-rawXMin))+0;
    y = (((y-rawYMin)*(window.innerHeight-0))/(rawYMax-rawYMin))+0;
    return [x,y];
} */
function HandleBone(bone,weight,fingerIndex,interactionBox)
{
    normalizedPrevJoint = interactionBox.normalizePoint(bone.prevJoint,true)
    //console.log('Normalized Point',normalizedPrevJoint)
    normalizedNextJoint = interactionBox.normalizePoint(bone.nextJoint,true)
    
    framesOfData.set(fingerIndex,weight,0,currentSamples,normalizedPrevJoint[0])
    framesOfData.set(fingerIndex,weight,1,currentSamples,normalizedPrevJoint[1])
    framesOfData.set(fingerIndex,weight,2,currentSamples,normalizedPrevJoint[2])
    framesOfData.set(fingerIndex,weight,3,currentSamples,normalizedNextJoint[0])
    framesOfData.set(fingerIndex,weight,4,currentSamples,normalizedNextJoint[1])
    framesOfData.set(fingerIndex,weight,5,currentSamples,normalizedNextJoint[2])

    var xb = window.innerWidth * normalizedPrevJoint[0];
    var yb = window.innerHeight * (1 - normalizedPrevJoint[1]);

    var xt = window.innerWidth * normalizedNextJoint[0];
    var yt = window.innerHeight * (1 - normalizedNextJoint[1]);

    
    //var bone_base = bone.prevJoint;
    //var xb = bone_base[0];
    //var yb = bone_base[1]; 
    //var zb = bone_base[2]; 
    //[xb,yb] = TransformCoordinates(xb,yb);
    //var bone_tip = bone.nextJoint;

    //var xt = bone_tip[0];
    //var yt = bone_tip[1];
    //var zt = bone_tip[2];
    //[xt,yt] = TransformCoordinates(xt,yt);

    //coord_sum = xb+yb+zb+xt+yt+zt
    


    strokeWeight(10-(2*weight));
    color_shade = (4-weight)*50;
    if(currentNumHands == 1)
    {
        stroke(color(0,color_shade,0));
    }
    else if (currentNumHands == 2)
    {
        stroke(color(color_shade,0,0));
    }
    //line(xb,window.innerHeight-yb,xt,window.innerHeight-yt);
    line(xb,yb,xt,yt);
}
function RecordData()
{
    if(previousNumHands == 2 && currentNumHands == 1)
    {
        background('#222222')
        console.log(framesOfData.toString());
    }
    if(currentNumHands == 2)
    {
        currentSamples++;
        if(currentSamples == numSamples)
        {
            currentSamples = 0;
        }
    }
    
}

var numSamples = 100;
var currentSamples = 0;
nj.config.printThreshold = 1000;
var framesOfData = nj.zeros([5,4,6,numSamples]);

var controllerOptions = {};
var x = window.innerWidth/2;
var y = window.innerHeight/2;
//var rawXMin = 1000;
//var rawXMax = 0.0001;
//var rawYMin = 1000;
//var rawYMax = 0.0001;

var previousNumHands = 0;
var currentNumHands = 0;

Leap.loop(controllerOptions, function(frame)
{
    currentNumHands = frame.hands.length
    clear();
    HandleFrame(frame);
    //console.log( framesOfData.toString() );
    //console.log("CUrrent Sample",currentSamples)
    RecordData();
    previousNumHands = currentNumHands
}
);