const knnClassifier = ml5.KNNClassifier();
var testingSampleIndex = 0;

var trainingCompleted = false;
var numSamples = test.shape[3];
//var numFeatures = irisData.shape[1]-1;
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
        //label_0 = 0
        knnClassifier.addExample(features.tolist(),0)

        features = train1.pick(null,null,null,i);
        features = features.flatten();
        knnClassifier.addExample(features.tolist(),1)

    }
    
    trainingCompleted = true;
    //console.log(train0.toString())
    //console.log(test.toString())
}

function Test()
{
    for(j=0;j<test.shape[3];j++)
    {
        features = test.pick(null,null,null,j);
        features = features.flatten();
        predictedLabel = knnClassifier.classify(features.tolist(),GotResults);
        //console.log(j,features.toString(),0,predictedLabel)

    }

}
function GotResults(err,result)
{
    predictedClassLabels.set(testingSampleIndex,parseInt(result.label))
    console.log(testingSampleIndex,parseInt(result.label));
    testingSampleIndex = testingSampleIndex+1;
    if(testingSampleIndex>=test.shape[3])
    {
        testingSampleIndex = 0;
    }
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