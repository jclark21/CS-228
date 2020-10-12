const knnClassifier = ml5.KNNClassifier();
//var testingSampleIndex = 0;
var controllerOptions = {};
var trainingCompleted = false;
var numSamples = 100;//test.shape[3];
//var numFeatures = irisData.shape[1]-1;
var predictedClassLabels = nj.zeros(numSamples)
var framesOfData = nj.zeros([5,4,6]);



function Train()
{
    for(i=0;i<train8.shape[3];i++)
    {
        //console.log( train8.pick(null,null,null,i).toString() );
        features = train8.pick(null,null,null,i);
        //console.log(features.reshape(120,1).toString());
        features = features.flatten();
        //console.log(features.toString());
        //label_0 = 0
        knnClassifier.addExample(features.tolist(),8)

        features = train9.pick(null,null,null,i);
        features = features.flatten();
        knnClassifier.addExample(features.tolist(),9)

    }
    
    trainingCompleted = true;
    //console.log(train8.toString())
    //console.log(test.toString())
}

function Test()
{
    //for(j=0;j<test.shape[3];j++)
    //{
        features = framesOfData.pick(null,null,null);
        features = features.flatten();
        predictedLabel = knnClassifier.classify(features.tolist(),GotResults);
        //console.log(j,features.toString(),0,predictedLabel)

    //}

}
function GotResults(err,result)
{
    //predictedClassLabels.set(testingSampleIndex,parseInt(result.label))
    predictedClassLabels.set(parseInt(result.label))
    //console.log(testingSampleIndex,parseInt(result.label));
    console.log(parseInt(result.label));
    //testingSampleIndex = testingSampleIndex+1;
    //if(testingSampleIndex>=numSamples)
    //{
    //    testingSampleIndex = 0;
    //}
}


function HandleFrame(frame,Test){
    if(frame.hands.length>=1)
    {
     numHands = frame.hands.length
     hand = frame.hands[0];
     var interactionBox = frame.interactionBox;
     HandleHand(hand,interactionBox,Test)
    }
}
function HandleHand(hand,interactionBox,Test)
{
    fingers  = hand.fingers;
    for (var i = 3;i>-1;i--)
        {
            for (var j = 0;j<fingers.length;j++)
            {
                HandleBone(fingers[j].bones[i],i,j,interactionBox,Test)
            }
        }
}
function HandleBone(bone,weight,fingerIndex,interactionBox,Test)
{
    normalizedPrevJoint = interactionBox.normalizePoint(bone.prevJoint,true)
    normalizedNextJoint = interactionBox.normalizePoint(bone.nextJoint,true)
    
    
    framesOfData.set(fingerIndex,weight,0,normalizedPrevJoint[0])
    framesOfData.set(fingerIndex,weight,1,normalizedPrevJoint[1])
    framesOfData.set(fingerIndex,weight,2,normalizedPrevJoint[2])
    framesOfData.set(fingerIndex,weight,3,normalizedNextJoint[0])
    framesOfData.set(fingerIndex,weight,4,normalizedNextJoint[1])
    framesOfData.set(fingerIndex,weight,5,normalizedNextJoint[2])
    
    //console.log(framesOfData.toString());
    Test()

    var xb = window.innerWidth * normalizedPrevJoint[0];
    var yb = window.innerHeight * (1 - normalizedPrevJoint[1]);
    var xt = window.innerWidth * normalizedNextJoint[0];
    var yt = window.innerHeight * (1 - normalizedNextJoint[1]);

    strokeWeight(10-(2*weight));
    color_shade = (4-weight)*50;
    /*
    if(currentNumHands == 1)
    {
        stroke(color(0,color_shade,0));
    }
    else if (currentNumHands == 2)
    {
        stroke(color(color_shade,0,0));
    }
    */
    stroke((4-weight)*60,(4-weight)*60,(4-weight)*60);
    line(xb,yb,xt,yt);
}

// function draw()
Leap.loop(controllerOptions, function(frame){
    //console.log(numSamples,numFeatures)
    //console.log(irisData.toString())
    currentNumHands = frame.hands.length;
    clear();
    if(trainingCompleted == false)
    {
        Train();
    }
    HandleFrame(frame,Test);
    //console.log(framesOfData.toString());
    //Test();
    previousNumHands = currentNumHands;   
});