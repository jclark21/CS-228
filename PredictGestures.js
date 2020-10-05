const knnClassifier = ml5.KNNClassifier();
var testingSampleIndex = 1;

var trainingCompleted = false;
var numSamples = irisData.shape[0];
var numFeatures = irisData.shape[1]-1;
var predictedClassLabels = nj.zeros(numSamples)


function Train()
{
    for(i=0;i<train0.shape[3];i++)
    {
        //console.log( train0.pick(null,null,null,i).toString() );
        features = train0.pick(null,null,null,i);
        //console.log(features.reshape(120,1).toString());
        features = features.flatten();
        //console.log(features.toString());
        label = 0
        knnClassifier.addExample(features.tolist(),label)
    }
    
    trainingCompleted = true;
    //console.log(train0.toString())
    //console.log(test.toString())
}

function Test()
{

}



function draw()
{
    //console.log(numSamples,numFeatures)
    //console.log(irisData.toString())
    clear();
    if(trainingCompleted == false)
    {
        Train();
    }
    Test();
    
    
}