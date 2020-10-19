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
function HandleBone(bone,weight,fingerIndex,interactionBox)
{
    normalizedPrevJoint = interactionBox.normalizePoint(bone.prevJoint,true)
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

var previousNumHands = 0;
var currentNumHands = 0;

Leap.loop(controllerOptions, function(frame)
{
    currentNumHands = frame.hands.length
    clear();
    HandleFrame(frame);
    RecordData();
    previousNumHands = currentNumHands
}
);