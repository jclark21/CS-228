const knnClassifier = ml5.KNNClassifier();
var controllerOptions = {};
var trainingCompleted = false;
var numSamples = 100;
var predictedClassLabels = nj.zeros(numSamples)
var framesOfData = nj.zeros([5,4,6]);
var numPredictions = 0;
var meanPredictionAcc = 0;
var programState = 0;
var digitToShow = 0;
var timeSinceLastDigitChange = new Date();
var timeSinceSecondaryHandChange = new Date();
var firstVar = 2;
var secondVar = 3;
var answer = 5;
var sign = 0;
var determinedPastPerf = false;
var userListEmpty = false;
var sumAcc = 0;
var past_sumAcc = 0;
var ratio = 0;
var testingHand = 2;
var mathIntMode = false;
var mathHardMode = false;


function Train()
{
    for(i=0;i<train8.shape[3];i++)
    {
        ///////////////////////////////////////
        // TRAINING FOR FIRST //
        knnClassifier.addExample(trainFistRight.pick(null,null,null,i).flatten().tolist(),10)
        knnClassifier.addExample(trainFistLeft.pick(null,null,null,i).flatten().tolist(),10)
        
        knnClassifier.addExample(trainThumbUpLeft.pick(null,null,null,i).flatten().tolist(),11)

        //trainFistLeft = MirrorHand(trainFistRight)
        //knnClassifier.addExample(trainFistLeft.pick(null,null,null,i).flatten().tolist(),10)
        //////////////////////////////////////////
        // TRAINING FOR 0 DIGIT //
        knnClassifier.addExample(train0.pick(null,null,null,i).flatten().tolist(),0)
        //train0Left = MirrorHand(train0)
        //knnClassifier.addExample(train0Left.pick(null,null,null,i).flatten().tolist(),0)

        
        knnClassifier.addExample(train0Allison.pick(null,null,null,i).flatten().tolist(),0)
        knnClassifier.addExample(train0He.pick(null,null,null,i).flatten().tolist(),0)
        //knnClassifier.addExample(train0Hunt.pick(null,null,null,i).flatten().tolist(),0)
        //knnClassifier.addExample(train0KLee.pick(null,null,null,i).flatten().tolist(),0)
        //knnClassifier.addExample(train0McCallion.pick(null,null,null,i).flatten().tolist(),0)

        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR 1 DIGIT
        //knnClassifier.addExample(train1.pick(null,null,null,i).flatten().tolist(),1)
        
        
        knnClassifier.addExample(train1Allison.pick(null,null,null,i).flatten().tolist(),1)
        knnClassifier.addExample(train1Bongard.pick(null,null,null,i).flatten().tolist(),1)
        knnClassifier.addExample(train1Li.pick(null,null,null,i).flatten().tolist(),1)
        knnClassifier.addExample(train1Left.pick(null,null,null,i).flatten().tolist(),1)
        // knnClassifier.addExample(train1McLaughlin.pick(null,null,null,i).flatten().tolist(),1)
        //knnClassifier.addExample(train1Wolley.pick(null,null,null,i).flatten().tolist(),1)
        //knnClassifier.addExample(train1Hunt.pick(null,null,null,i).flatten().tolist(),1)
        //knnClassifier.addExample(train1Jimmo.pick(null,null,null,i).flatten().tolist(),1)


        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR 2 DIGIT
        knnClassifier.addExample(train2.pick(null,null,null,i).flatten().tolist(),2)
        //knnClassifier.addExample(train2Downs.pick(null,null,null,i).flatten().tolist(),2)
        knnClassifier.addExample(train2Left.pick(null,null,null,i).flatten().tolist(),2)

        
        //knnClassifier.addExample(train2Jimmo.pick(null,null,null,i).flatten().tolist(),2)
        knnClassifier.addExample(train2Jing.pick(null,null,null,i).flatten().tolist(),2)
        knnClassifier.addExample(train2Liu.pick(null,null,null,i).flatten().tolist(),2)
        //knnClassifier.addExample(train2Neff.pick(null,null,null,i).flatten().tolist(),2)
        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR DIGIT 3 //
        knnClassifier.addExample(train3.pick(null,null,null,i).flatten().tolist(),3)
        knnClassifier.addExample(train3Left.pick(null,null,null,i).flatten().tolist(),3)
        knnClassifier.addExample(train3Beattie.pick(null,null,null,i).flatten().tolist(),3)
        //knnClassifier.addExample(train3Downs.pick(null,null,null,i).flatten().tolist(),3)
        //knnClassifier.addExample(train3Li.pick(null,null,null,i).flatten().tolist(),3)
        //knnClassifier.addExample(train3Luksevish.pick(null,null,null,i).flatten().tolist(),3)
        //knnClassifier.addExample(train3Riofrio.pick(null,null,null,i).flatten().tolist(),3)
        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR DIGIT 4 //
        knnClassifier.addExample(train4.pick(null,null,null,i).flatten().tolist(),4)
        knnClassifier.addExample(train4Left.pick(null,null,null,i).flatten().tolist(),4)

        knnClassifier.addExample(train4Beattie.pick(null,null,null,i).flatten().tolist(),4)
        knnClassifier.addExample(train4Bertschinger.pick(null,null,null,i).flatten().tolist(),4)
        
        //knnClassifier.addExample(train4Faucher.pick(null,null,null,i).flatten().tolist(),4)
        
        // knnClassifier.addExample(train4Kiely.pick(null,null,null,i).flatten().tolist(),4)
        // knnClassifier.addExample(train4Liu.pick(null,null,null,i).flatten().tolist(),4)
        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR DIGIT 5 //
        knnClassifier.addExample(train5.pick(null,null,null,i).flatten().tolist(),5)
        //train5Left = MirrorHand(train5)
        knnClassifier.addExample(train5Left.pick(null,null,null,i).flatten().tolist(),5)

        //knnClassifier.addExample(train5Bertschinger.pick(null,null,null,i).flatten().tolist(),5)
        //knnClassifier.addExample(train5Blewett.pick(null,null,null,i).flatten().tolist(),5)
        //knnClassifier.addExample(train5Faucher.pick(null,null,null,i).flatten().tolist(),5)
        
        //knnClassifier.addExample(train5Fekert.pick(null,null,null,i).flatten().tolist(),5)
        //knnClassifier.addExample(train5Kiely.pick(null,null,null,i).flatten().tolist(),5)
        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR DIGIT 6 //
        knnClassifier.addExample(train6.pick(null,null,null,i).flatten().tolist(),6)
        knnClassifier.addExample(train6Left.pick(null,null,null,i).flatten().tolist(),6)

        knnClassifier.addExample(train6Fekert.pick(null,null,null,i).flatten().tolist(),6)
        //knnClassifier.addExample(train6Fisher.pick(null,null,null,i).flatten().tolist(),6)
        //knnClassifier.addExample(train6Koretsky.pick(null,null,null,i).flatten().tolist(),6)
        
        //knnClassifier.addExample(train6Laquerre.pick(null,null,null,i).flatten().tolist(),6)
        //knnClassifier.addExample(train6Makovsky.pick(null,null,null,i).flatten().tolist(),6)

        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR DIGIT 7
        knnClassifier.addExample(train7.pick(null,null,null,i).flatten().tolist(),7)
        knnClassifier.addExample(train7Left.pick(null,null,null,i).flatten().tolist(),6)

        //knnClassifier.addExample(train7Fisher.pick(null,null,null,i).flatten().tolist(),7)
        //knnClassifier.addExample(train7Laquerre.pick(null,null,null,i).flatten().tolist(),7)
        //knnClassifier.addExample(train7Manian.pick(null,null,null,i).flatten().tolist(),7)
        //knnClassifier.addExample(train7Pooprasert.pick(null,null,null,i).flatten().tolist(),7)
        
        //knnClassifier.addExample(train7Vega.pick(null,null,null,i).flatten().tolist(),7)

        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR DIGIT 8
        //knnClassifier.addExample(train8.pick(null,null,null,i).flatten().tolist(),8)
        knnClassifier.addExample(train8Bongard.pick(null,null,null,i).flatten().tolist(),8)
        knnClassifier.addExample(train8Left.pick(null,null,null,i).flatten().tolist(),6)

        //knnClassifier.addExample(train8Goldman.pick(null,null,null,i).flatten().tolist(),8)
        //knnClassifier.addExample(train8Matthews.pick(null,null,null,i).flatten().tolist(),8)
        //knnClassifier.addExample(train8McCallion.pick(null,null,null,i).flatten().tolist(),8)

        //////////////////////////////////////////


        //////////////////////////////////////////
        // TRAINING FOR DIGIT 9
        //knnClassifier.addExample(train9.pick(null,null,null,i).flatten().tolist(),9)
        knnClassifier.addExample(train9Bongard.pick(null,null,null,i).flatten().tolist(),9)
        knnClassifier.addExample(train9Left.pick(null,null,null,i).flatten().tolist(),6)

        //knnClassifier.addExample(train9KLee.pick(null,null,null,i).flatten().tolist(),9)
        //knnClassifier.addExample(train9McLaughlin.pick(null,null,null,i).flatten().tolist(),9)
        //knnClassifier.addExample(train9Rice.pick(null,null,null,i).flatten().tolist(),9)
        
        //knnClassifier.addExample(train9Woolley.pick(null,null,null,i).flatten().tolist(),9)

        //////////////////////////////////////////
        console.log(i);

    }
    console.log('Done Training!')
    trainingCompleted = true;
    //console.log(train8.toString())
    //console.log(test.toString())
}
function CenterXData()
{
    xValues = framesOfData.slice([],[],[0,6,3]);
    currentMean = xValues.mean();
    //console.log(currentMean);
    horizontalShift = 0.5 - currentMean
    for(r = 0;r<framesOfData.shape[0];r++)
    {
        for(c=0;c<framesOfData.shape[1];c++)
        {
            currentX = framesOfData.get(r,c,0);
            shiftedX = currentX + horizontalShift;
            framesOfData.set(r,c,0, shiftedX);

            currentX = framesOfData.get(r,c,3);
            shiftedX = currentX + horizontalShift;
            framesOfData.set(r,c,3, shiftedX);
        }
    }
    xValues = framesOfData.slice([],[],[0,6,3]);
    currentMean = xValues.mean();
    //console.log(currentMean);
}
function CenterYData()
{
    yValues = framesOfData.slice([],[],[1,6,3]);
    currentMean = yValues.mean();
    //console.log(currentMean);
    horizontalShift = 0.5 - currentMean;
    for(r = 0;r<framesOfData.shape[0];r++)
    {
        for(c=0;c<framesOfData.shape[1];c++)
        {
            currentY = framesOfData.get(r,c,1);
            shiftedY = currentY + horizontalShift;
            framesOfData.set(r,c,1, shiftedY);

            currentY = framesOfData.get(r,c,4);
            shiftedY = currentY + horizontalShift;
            framesOfData.set(r,c,4, shiftedY);
        }
    }
    yValues = framesOfData.slice([],[],[1,6,3]);
    currentMean = yValues.mean();
    //console.log(currentMean);


}
function CenterZData()
{
    zValues = framesOfData.slice([],[],[2,6,3]);
    currentMean = zValues.mean();
    //console.log(currentMean);
    horizontalShift = 0.5 - currentMean;
    for(r = 0;r<framesOfData.shape[0];r++)
    {
        for(c=0;c<framesOfData.shape[1];c++)
        {
            currentZ = framesOfData.get(r,c,2);
            shiftedZ = currentZ + horizontalShift;
            framesOfData.set(r,c,2, shiftedZ);

            currentZ = framesOfData.get(r,c,5);
            shiftedZ = currentZ + horizontalShift;
            framesOfData.set(r,c,5, shiftedZ);
        }
    }
    zValues = framesOfData.slice([],[],[2,6,3]);
    currentMean = zValues.mean();
    //console.log(currentMean);

}
function CenterData()
{
    CenterXData()
    CenterYData()
    CenterZData()
}
function MirrorHand(trainingData)
{
    xValues = trainingData.slice([],[],[0,6,3]);
    for(r = 0;r<trainingData.shape[0];r++)
    {
        for(c=0;c<trainingData.shape[1];c++)
        {
            currentX = trainingData.get(r,c,0);
            shiftedX = 1-currentX;
            trainingData.set(r,c,0, shiftedX);

            currentX = trainingData.get(r,c,3);
            shiftedX = 1-currentX;
            trainingData.set(r,c,3, shiftedX);
        }
    }
    return trainingData
}
function Test(handNum)
{
    testingHand = handNum;
    features = framesOfData.pick(null,null,null);
    CenterData()
    features = features.flatten();
    predictedLabel = knnClassifier.classify(features.tolist(),GotResults);
}
function GotResults(err,result)
{
    //predictedClassLabels.set(testingSampleIndex,parseInt(result.label))
    predictedClassLabels.set(parseInt(result.label))
    numPredictions += 1;
    meanPredictionAcc = (((numPredictions-1)*meanPredictionAcc) + (parseInt(result.label) == digitToShow))/numPredictions
    //console.log(testingSampleIndex,parseInt(result.label));
    console.log(testingHand,numPredictions,'Mean Prediction Accuracy: ',meanPredictionAcc,parseInt(result.label))
    //console.log(parseInt(result.label))
    //console.log(parseInt(result.label));
    if(parseInt(result.label) == 10 && testingHand == 1){
        console.log('Secondary Hand Fist')
        if(programState == 2){
            numPredictions = 0;
            meanPredictionAcc = 0;
            SwitchDigits()
        }
        else if(programState == 3){
            numPredictions = 0;
            meanPredictionAcc = 0;
            firstVar,sign,secondVar,digitToShow = GenerateEquation();
        }
        else if(programState == 4){
            numPredictions = 0;
            meanPredictionAcc = 0;
            firstVar,sign,digitToShow,answer = GenerateEquation();
        }
    }
    if(parseInt(result.label) == 11 && testingHand == 1){
        console.log('Secondary Hand Thumbs Up')
        if(programState == 2 && TimeToSwitchWithSecondary() ==true){
            timeSinceSecondaryHandChange = new Date();
            mathIntMode = true;
            programState = 3;
        }
        else if(programState == 3 && TimeToSwitchWithSecondary() ==true){
            timeSinceSecondaryHandChange = new Date();
            mathHardMode = true;
            mathIntMode = false;
            programState = 4;
        }
        else if(programState == 4 && TimeToSwitchWithSecondary() ==true){
            timeSinceSecondaryHandChange = new Date();
            mathHardMode = false;
            mathIntMode = false;
            programState = 2;
        }

    }
}
function HandleFrame(frame,Test){
    if(frame.hands.length==1)
    {
     numHands = frame.hands.length
     hand = frame.hands[0];
     var interactionBox = frame.interactionBox;
     HandleHand(hand,interactionBox,Test,0)
    }
    else if(frame.hands.length==2)
    {
     numHands = frame.hands.length
     hand = frame.hands[0];
     hand2 = frame.hands[1];
     var interactionBox = frame.interactionBox;
     //testingHand = 0;
     HandleHand(hand,interactionBox,Test,0)
     //testingHand = 1;
     HandleHand(hand2,interactionBox,Test,1)
    }
}
function HandleHand(hand,interactionBox,Test,handNum)
{
    //console.log(handNum)
    fingers  = hand.fingers;
    for (var i = 3;i>-1;i--)
        {
            for (var j = 0;j<fingers.length;j++)
            {
                HandleBone(fingers[j].bones[i],i,j,interactionBox,Test,handNum)
            }
        }
}
function HandleBone(bone,weight,fingerIndex,interactionBox,Test,handNum)
{
    normalizedPrevJoint = interactionBox.normalizePoint(bone.prevJoint,true)
    normalizedNextJoint = interactionBox.normalizePoint(bone.nextJoint,true)
    
    framesOfData.set(fingerIndex,weight,0,normalizedPrevJoint[0])
    framesOfData.set(fingerIndex,weight,1,normalizedPrevJoint[1])
    framesOfData.set(fingerIndex,weight,2,normalizedPrevJoint[2])
    framesOfData.set(fingerIndex,weight,3,normalizedNextJoint[0])
    framesOfData.set(fingerIndex,weight,4,normalizedNextJoint[1])
    framesOfData.set(fingerIndex,weight,5,normalizedNextJoint[2])

    if(programState != 1 && programState != 0){
        //console.log(handNum)
        Test(handNum)
    }
    

    var xb = window.innerWidth/2 * normalizedPrevJoint[0];
    var yb = window.innerHeight/2 * (1 - normalizedPrevJoint[1]);
    var xt = window.innerWidth/2 * normalizedNextJoint[0];
    var yt = window.innerHeight/2 * (1 - normalizedNextJoint[1]);

    //strokeWeight(10-(2*weight));
    strokeWeight(3*(10-(2*weight)));
    color_shade = (4-weight)*50;

    //stroke(((4-weight)*60)*(1-meanPredictionAcc),((4-weight)*60)*meanPredictionAcc,0);
    stroke(((4-weight)*60)*(1-(meanPredictionAcc+0.2)),((4-weight)*60)*(meanPredictionAcc+0.2),0);
    line(xb,yb,xt,yt);
}
function DetermineState(frame){
    if(frame.hands.length == 0){
        programState = 0;
    }
    else if(frame.hands.length >= 1 && HandIsUncentered() == true){
        programState = 1;
    }
    else if (frame.hands.length >= 1 && HandIsUncentered() == false && mathIntMode == false && mathHardMode == false){
        programState=2;
    }
    else if(frame.hands.length >= 1 && HandIsUncentered() == false && mathIntMode == true && mathHardMode == false){
        programState = 3;
    }
    else if(frame.hands.length >= 1 && HandIsUncentered() == false && mathIntMode == false && mathHardMode == true){
        programState = 4;
    }
}
function TrainKNNIfNotDoneYet(trainingCompleted){
    if(trainingCompleted == false)
    {
        Train();
    }
}
function DrawImageToHelpUserPutThereHandOverDevice(){
    image(handOverDevice,0,0,window.innerWidth/2,window.innerHeight/2);
}
function DrawArrowRight(){
    image(handLeftDevice,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
}
function DrawArrowLeft(){
    image(handRightDevice,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
}
function DrawArrowDown(){
    image(handAboveDevice,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
}
function DrawArrowUp(){
    image(handBelowDevice,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
}
function DrawArrowTo(){
    image(handCloseDevice,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
}
function DrawArrowFrom(){
    image(handFarDevice,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
}
function HandIsTooFarToTheLeft(){
    xValues = framesOfData.slice([],[],[0,6,3]);
    currentMean = xValues.mean();
    if(currentMean < 0.25){
        return true
    }
    else{
        return false
    }
}
function HandIsTooFarToTheRight(){
    xValues = framesOfData.slice([],[],[0,6,3]);
    currentMean = xValues.mean();
    if(currentMean > 0.75){
        return true
    }
    else{
        return false
    }
}
function HandDriftTooHigh(){
    yValues = framesOfData.slice([],[],[1,6,3]);
    currentMean = yValues.mean();
    if(currentMean > 0.75){
        return true
    }
    else{
        return false
    }
}
function HandDriftTooLow(){
    yValues = framesOfData.slice([],[],[1,6,3]);
    currentMean = yValues.mean();
    if(currentMean < 0.25){
        return true
    }
    else{
        return false
    }
}
function HandTooFarFromBody(){
    zValues = framesOfData.slice([],[],[2,6,3]);
    currentMean = zValues.mean();
    if(currentMean < 0.25){
        return true
    }
    else{
        return false
    }
}
function HandTooCloseToBody(){
    zValues = framesOfData.slice([],[],[2,6,3]);
    currentMean = zValues.mean();
    if(currentMean > 0.75){
        return true
    }
    else{
        return false
    }
}
function HandIsUncentered(){
    return HandIsTooFarToTheLeft() || HandIsTooFarToTheRight() || HandDriftTooHigh() || HandDriftTooLow() || HandTooCloseToBody() || HandTooFarFromBody()
}
function IsNewUser(username,list){
    var users = list.children;
    var usernameFound = false;
    for(i=0;i<users.length;i++){
        //console.log(users[i]);
        //console.log(users[i].innerHTML);
        if(username == users[i].innerHTML){
            usernameFound = true;
        }
    }
    return usernameFound == false
}
function DetermineUserRankings(){
    var list = document.getElementById('users');
    var currentUser =  document.getElementById('username').value;
    var users = list.children;
    //console.log(users.length)
    var userRankingList = [];
    var numUsers = users.length/22
    for(i=0;i<users.length;i = i+22){
        var userArray = []
        username = users[i].innerHTML
        userPerformance = DetermineOtherUsersPerformance(username)
        //console.log(String(username),userPerformance);
        userArray = [String(username),userPerformance];
        //console.log(userArray);
        userRankingList.push(userArray);
    }
    //console.log(userRankingList)
    //userRankingList.sort(function(a,b){return b[1].localeCompare(a[1]);});
    userRankingList.sort(function(a,b){return b[1] - a[1]})
    if(numUsers == 1){
        rank_1_user = userRankingList[0][0];
        rank_1_perf = userRankingList[0][1];
        rank_2_user = 'None'
        rank_2_perf = 'None'
        rank_3_user = 'None'
        rank_3_perf = 'None'

        document.getElementById("rank_1_user").innerHTML = rank_1_user;
        document.getElementById("rank_1_perf").innerHTML = rank_1_perf;
        document.getElementById("rank_2_user").innerHTML = rank_2_user;
        document.getElementById("rank_2_perf").innerHTML = rank_2_perf;
        document.getElementById("rank_3_user").innerHTML = rank_3_user;
        document.getElementById("rank_3_perf").innerHTML = rank_3_perf;

    }
    else if(numUsers == 2){
        rank_1_user = userRankingList[0][0];
        rank_1_perf = userRankingList[0][1];
    
        rank_2_user = userRankingList[1][0];
        rank_2_perf = userRankingList[1][1];
        rank_3_user = 'None'
        rank_3_perf = 'None'
        document.getElementById("rank_1_user").innerHTML = rank_1_user;
        document.getElementById("rank_1_perf").innerHTML = rank_1_perf;
        document.getElementById("rank_2_user").innerHTML = rank_2_user;
        document.getElementById("rank_2_perf").innerHTML = rank_2_perf;
        document.getElementById("rank_3_user").innerHTML = rank_3_user;
        document.getElementById("rank_3_perf").innerHTML = rank_3_perf;
    }
    else if(numUsers >= 3){
        rank_1_user = userRankingList[0][0];
        rank_1_perf = userRankingList[0][1];
    
        rank_2_user = userRankingList[1][0];
        rank_2_perf = userRankingList[1][1];
    
        rank_3_user = userRankingList[2][0];
        rank_3_perf = userRankingList[2][1];
        document.getElementById("rank_1_user").innerHTML = rank_1_user;
        document.getElementById("rank_1_perf").innerHTML = rank_1_perf;
        document.getElementById("rank_2_user").innerHTML = rank_2_user;
        document.getElementById("rank_2_perf").innerHTML = rank_2_perf;
        document.getElementById("rank_3_user").innerHTML = rank_3_user;
        document.getElementById("rank_3_perf").innerHTML = rank_3_perf;
    }

    
    //console.log(userRankingList)

    //username = users[1].innerHTML;
    //console.log(String(username))
        //userPerformance = DetermineOtherUsersPerformance(username)
        //console.log(String(username),String(userPerformance))
        //console.log(users[0]);
        //console.log(users[0].innerHTML);
    //     //if(username != users[i].innerHTML){
         //username,userPerformace = userPref(users[i].innerHTML)
        //userRankingList.push([username,userPerformace])
    //     //}
    //}
    //console.log(userRankingList)
    //userRankingList.sort(function(a,b){return b[1].localeCompare(a[1]);});
    // console.log(userRankingList)
    //console.log(mylist)
    // for(i=1;i<users.length;i++){
    //     username = userRankingList[i][0]
    //     performance = userRankingList[i][1]
    //     document.getElementById("rank_i").innerHTML = sumAcc;
    // }
    
}
function CalculateAverageDigitPerformance(listDigitAcc)
{
    
}
function DetermineOtherUsersPerformance(username){
    var listDigitAcc = [];
    for(j = 0;j<10;j++){
        ID = String(username) + "_" + String(j) + "_accuracy"
        listItem = document.getElementById(ID);
        digitAcc = parseFloat(listItem.innerHTML)
        //console.log(j,digitAcc)
        listDigitAcc.push(digitAcc)
    }
    perf = listDigitAcc.reduce((a,b) => a+b,0)
    perf = perf/10
    return perf
    //document.getElementById("past_sumUserAcc").innerHTML = past_sumAcc;
}

function CreateNewUser(username,list){
    // Create list item
    var item = document.createElement('li');
    item.id = String(username) + "_name";
    // Place the user's name into the item
    item.innerHTML = String(username);
    list.appendChild(item);
}
function CreateSignInItem(username,list){
    var item = document.createElement('li');
    item.id = String(username) + "_signins";
    item.innerHTML = 1;
    list.appendChild(item);
}
function CreateAttemptsAccuracyItem(username,list){
    for(dig = 0;dig<10;dig++){
        var item = document.createElement('li');
        item.id = String(username)+"_"+String(dig)+"_attempts";
        item.innerHTML = 0;
        list.appendChild(item)

        var item = document.createElement('li');
        item.id = String(username)+"_"+String(dig)+"_accuracy";
        item.innerHTML = 0;
        list.appendChild(item)
    }
}
function SignIn(){
    //console.log('SignIn Function Called')
    //Unordered list with an ID of 'users'
    username = document.getElementById('username').value;
    var list = document.getElementById('users');
    if(IsNewUser(username,list) == true){
        CreateNewUser(username,list);
        CreateSignInItem(username,list);
        CreateAttemptsAccuracyItem(username,list);
        determinedPastPerf = true
        past_sumAcc = 0;
        document.getElementById("past_sumUserAcc").innerHTML = 'No Data';
        //CreateAccuracyItem(username,list)
    }
    else{
        // Handle Returning User
        //Create ID tag for the list item that contains user's number of sign in attempts
        ID = String(username) + "_signins"
        // Return Item
        listItem = document.getElementById(ID);
        //Increase Content by 1
        listItem.innerHTML = parseInt(listItem.innerHTML) + 1;
    }
    //.innerHTML gives unordered list to copy
    console.log(list.innerHTML);
    //console.log(list)
    return false;
}
function TerminateUserSession(){
    var list = document.getElementById('users');
    console.log(list.innerHTML);
    programState = 0;
    return false;
}
function IncrementUserDigitAttempts(digit){
    username = document.getElementById('username').value;
    //var list = document.getElementById('users');
    ID = String(username) + "_" + String(digit) + "_attempts"
    listItem = document.getElementById(ID);
    listItem.innerHTML = parseInt(listItem.innerHTML) + 1;
 }
function IncrementUserDigitAccuracy(digit){
    username = document.getElementById('username').value;
    //var list = document.getElementById('users');
    ID = String(username) + "_" + String(digit) + "_accuracy"
    listItem = document.getElementById(ID);
    previousAcc = parseFloat(listItem.innerHTML)
    if(meanPredictionAcc > previousAcc){
        listItem.innerHTML = meanPredictionAcc;
    }
}
function DeterminePastUserPerformance(){
    username = document.getElementById('username').value;
    var listDigitAcc = [];
    for(j = 0;j<10;j++){
        ID = String(username) + "_" + String(j) + "_accuracy"
        listItem = document.getElementById(ID);
        digitAcc = parseFloat(listItem.innerHTML)
        //console.log(digit)
        listDigitAcc.push(digitAcc)
    }
    //console.log(listDigitAcc)
    past_sumAcc = listDigitAcc.reduce((a,b) => a+b,0)
    past_sumAcc = past_sumAcc/10
    document.getElementById("past_sumUserAcc").innerHTML = past_sumAcc;
    determinedPastPerf = true;
    EmptyUserList(userListEmpty)
    //console.log('Sum of Accuracy:',past_sumAcc)
}
function EmptyUserList(userListEmpty){
    if(userListEmpty == false){
        username = document.getElementById('username').value;
        for(j = 0;j<10;j++){
        ID = String(username) + "_" + String(j) + "_accuracy";
        listItem = document.getElementById(ID);
        listItem.innerHTML = 0;
        }
    userListEmpty = true;
    }
}
function DetermineCurrentUserPerformance(){
    //EmptyUserList(userListEmpty)
    username = document.getElementById('username').value;
    var listDigitAcc = [];
    for(j = 0;j<10;j++){
        ID = String(username) + "_" + String(j) + "_accuracy"
        listItem = document.getElementById(ID);
        digitAcc = parseFloat(listItem.innerHTML)
        //console.log(digit)
        listDigitAcc.push(digitAcc)
    }
    //console.log(listDigitAcc)
    sumAcc = listDigitAcc.reduce((a,b) => a+b,0)
    sumAcc = sumAcc/10
    document.getElementById("sumUserAcc").innerHTML = sumAcc;

    DisplaySessionPerformanceVisualization();
    //console.log('Sum of Accuracy:',sumAcc)
}
function DetermineWheterToSwitchDigits(){
    if((TimeToSwitchDigits() == true )){//&& meanPredictionAcc > 0.2)){//|| meanPredictionAcc > 0.5){
        timeSinceLastDigitChange = new Date()
        IncrementUserDigitAttempts(digitToShow)
        IncrementUserDigitAccuracy(digitToShow)
        numPredictions = 0;
        meanPredictionAcc = 0;
        SwitchDigits()
    }
}
function DisplaySessionPerformanceVisualization(){
    //console.log(sumAcc)
    if(past_sumAcc == 0){
        image(addition,0,window.innerHeight*0.75,window.innerWidth/4,window.innerHeight/4);
    }
    else{
        ratio = (sumAcc+0.001)/(past_sumAcc)
        ratio = parseFloat(ratio)
        ratio = ratio.toFixed(2)
        console.log('Ratio',ratio)
        //console.log(ratio < )
        if(ratio < 0.5){
            image(red_face,0,window.innerHeight*0.75,window.innerWidth/4,window.innerHeight/4);
        }
        else if(ratio >= .5 && ratio <0.9){
            image(orange_face,0,window.innerHeight*0.75,window.innerWidth/4,window.innerHeight/4);
        }
        else if(ratio >= 0.9 && ratio < 1.1){
            image(yellow_face,0,window.innerHeight*0.75,window.innerWidth/4,window.innerHeight/4);
        }
        else if(ratio >=3){
           image(green_face,0,window.innerHeight*0.75,window.innerWidth/4,window.innerHeight/4);
        }
        else if(ratio >= 1.1 && ratio < 3){
           image(limegreen_face,0,window.innerHeight*0.75,window.innerWidth/4,window.innerHeight/4);
        }
    }
}
function SwitchDigits(){
    if(digitToShow == 0){
        digitToShow = 1
    }
    else if(digitToShow == 1){
        digitToShow = 2
    }
    else if(digitToShow == 2){
        digitToShow = 3
    }
    else if(digitToShow == 3){
        digitToShow = 4
    } 
    else if(digitToShow ==4 ){
        digitToShow = 5
    }
    else if(digitToShow ==5 ){
        digitToShow = 6
    }
    else if(digitToShow ==6 ){
        digitToShow =7 
    }
    else if(digitToShow ==7 ){
        digitToShow = 8
    }
    else if(digitToShow == 8){
        digitToShow = 9
    }
    else if(digitToShow == 9){
        digitToShow = 0
    }
}
function TimeToSwitchWithSecondary(){
    time = new Date()
    differenceSinceChangeInMilliseconds = time - timeSinceSecondaryHandChange
    differenceSinceChangeInSeconds = differenceSinceChangeInMilliseconds/1000
    if(differenceSinceChangeInSeconds > 5){
        return true
    }
    else{
        return false
    }
}

function TimeToSwitchDigits(){
    currentTime = new Date();
    differenceSinceChangeInMilliseconds = currentTime - timeSinceLastDigitChange
    differenceSinceChangeInSeconds = differenceSinceChangeInMilliseconds/1000
    if(differenceSinceChangeInSeconds > 5){
        return true
    }
}
function DrawLowerRightPanel(){
    if(digitToShow == 0){
        image(zeroDigit,window.innerWidth/2,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    else if(digitToShow == 1){
        image(oneDigit,window.innerWidth/2,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    else if(digitToShow ==2){
        image(twoDigit,window.innerWidth/2,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    else if(digitToShow ==3){
        image(threeDigit,window.innerWidth/2,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    else if(digitToShow ==4){
        image(fourDigit,window.innerWidth/2,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    else if(digitToShow ==5){
        image(fiveDigit,window.innerWidth/2,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    else if(digitToShow ==6){
        image(sixDigit,window.innerWidth/2,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    else if(digitToShow ==7){
        image(sevenDigit,window.innerWidth/2,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    else if(digitToShow ==8){
        image(eightDigit,window.innerWidth/2,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    else if(digitToShow ==9){
        image(nineDigit,window.innerWidth/2,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
}
function DrawUpperRightPanel(){
    if(digitToShow == 0){
        image(zero,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 1){
        image(one,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 2){
        image(two,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 3){
        image(three,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 4){
        image(four,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 5){
        image(five,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 6){
        image(six,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 7){
        image(seven,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 8){
        image(eight,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 9){
        image(nine,window.innerWidth/2,0,window.innerWidth/2,window.innerHeight/2);
    }
}
function DetermineWheterToSwitchEquations(){
    if(TimeToSwitchDigits() == true){
        timeSinceLastDigitChange = new Date()
        IncrementUserDigitAttempts(digitToShow)
        IncrementUserDigitAccuracy(digitToShow)
        numPredictions = 0;
        meanPredictionAcc = 0;
        return true;
    }
    else{
        return false;
    }
}
function GenerateAdditionEq(){
    firstVar = Math.floor(Math.random() * 10); 
    secondVar = Math.floor(Math.random() * 10);
    while(firstVar + secondVar > 9){
        firstVar = Math.floor(Math.random() * 10); 
        secondVar = Math.floor(Math.random() * 10);
    } 
    answer = firstVar + secondVar;
    sign = 0;
    return firstVar,sign,secondVar,answer
}
function GenerateSubtractionEq(){
    firstVar = Math.floor(Math.random() * 18); 
    secondVar = Math.floor(Math.random() * 10);
    while(firstVar - secondVar < 0 || firstVar - secondVar > 9){
        firstVar = Math.floor(Math.random() * 18); 
        secondVar = Math.floor(Math.random() * 10);
    } 
    answer = firstVar - secondVar;
    sign = 1;
    return firstVar,sign,secondVar,answer
}
function GenerateEquation(){
    if(Math.random()< 0.5){
        return GenerateAdditionEq();
    }
    else{
        return GenerateSubtractionEq();
    }
}
function DrawFirstVariable(firstVar){
    if(firstVar == 0){
        image(zero,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 1){
        image(one,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 2){
        image(two,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 3){
        image(three,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 4){
        image(four,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 5){
        image(five,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 6){
        image(six,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 7){
        image(seven,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 8){
        image(eight,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 9){
        image(nine,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 10){
        image(ten,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 11){
        image(eleven,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 12){
        image(twelve,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 13){
        image(thirteen,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 14){
        image(fourteen,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 15){
        image(fifteen,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 16){
        image(sixteen,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 17){
        image(seventeen,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 18){
        image(eighteen,window.innerWidth/2,0,window.innerWidth/6,window.innerHeight/2);
    }
}
function DrawSign(sign){
    if(sign == 0){
        image(addition,(4*window.innerWidth)/6,0,window.innerWidth/6,window.innerHeight/2);
    }
    else if(sign == 1){
        image(subtraction,(4*window.innerWidth)/6,0,window.innerWidth/6,window.innerHeight/2);
    }
}
function DrawSecondVariable(secondVar){
    if(secondVar == 0){
        image(zero,(5*window.innerWidth)/6,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 1){
        image(one,(5*window.innerWidth)/6,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 2){
        image(two,(5*window.innerWidth)/6,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 3){
        image(three,(5*window.innerWidth)/6,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 4){
        image(four,(5*window.innerWidth)/6,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 5){
        image(five,(5*window.innerWidth)/6,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 6){
        image(six,(5*window.innerWidth)/6,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 7){
        image(seven,(5*window.innerWidth)/6,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 8){
        image(eight,(5*window.innerWidth)/6,0,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 9){
        image(nine,(5*window.innerWidth)/6,0,window.innerWidth/6,window.innerHeight/2);
    }
}
function DrawEqLowerLeftPanel(firstVar,sign,secondVar){
    DrawFirstVariable(firstVar);
    DrawSign(sign);
    DrawSecondVariable(secondVar);
}
function DrawVarEqUpperRightPanel(){
    DrawFirstVarEq(firstVar);
    DrawVarSign(sign);
    DrawVar();
    DrawEquals();
    DrawAnswer(answer);
    DrawVarEquals();
}
function DrawFirstVarEq(firstVar){
    if(firstVar == 0){
        image(zero,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 1){
        image(one,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 2){
        image(two,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 3){
        image(three,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 4){
        image(four,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 5){
        image(five,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 6){
        image(six,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 7){
        image(seven,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 8){
        image(eight,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 9){
        image(nine,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 10){
        image(ten,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 11){
        image(eleven,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 12){
        image(twelve,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 13){
        image(thirteen,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 14){
        image(fourteen,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 15){
        image(fifteen,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 16){
        image(sixteen,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 17){
        image(seventeen,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
    if(firstVar == 18){
        image(eighteen,window.innerWidth/2,0,window.innerWidth/12,window.innerHeight/4);
    }
}
function DrawVarSign(sign){
    if(sign == 0){
        image(addition,(7*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
    }
    else if(sign == 1){
        image(subtraction,(7*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
    }
}
function DrawVar(){
    image(y_pic,(8*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
}
function DrawEquals(){
    image(equals,(9*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
}
function DrawAnswer(answer){
    if(answer == 0){
        image(zero,(10*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
    }
    else if(answer == 1){
        image(one,(10*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
    }
    else if(answer == 2){
        image(two,(10*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
    }
    else if(answer == 3){
        image(three,(10*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
    }
    else if(answer == 4){
        image(four,(10*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
    }
    else if(answer == 5){
        image(five,(10*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
    }
    else if(answer == 6){
        image(six,(10*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
    }
    else if(answer == 7){
        image(seven,(10*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
    }
    else if(answer == 8){
        image(eight,(10*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
    }
    else if(answer == 9){
        image(nine,(10*window.innerWidth)/12,0,window.innerWidth/12,window.innerHeight/4);
    }
}
function DrawVarEquals(){
    image(y_pic,(6*window.innerWidth)/12,window.innerHeight/4,window.innerWidth/12,window.innerHeight/4);
    image(equals,(7*window.innerWidth)/12,window.innerHeight/4,window.innerWidth/12,window.innerHeight/4);
    image(question,(8*window.innerWidth)/12,window.innerHeight/4,window.innerWidth/12,window.innerHeight/4);
}
function DeterminePastUserPerformanceIfNotDone(determinedPastPerf){
    if(determinedPastPerf == false){
        //username = document.getElementById('username').value;
        DeterminePastUserPerformance()
    }
}
function HandleState0(frame){
    TrainKNNIfNotDoneYet(trainingCompleted)
    DrawImageToHelpUserPutThereHandOverDevice()
    //DeterminePastUserPerformanceIfNotDone(determinedPastPerf)
}
function HandleState1(frame){
    HandleFrame(frame,Test);
    if(HandIsTooFarToTheLeft()){
        DrawArrowRight()
    }
    if(HandIsTooFarToTheRight()){
        DrawArrowLeft()
    }
    if(HandDriftTooHigh()){
        DrawArrowDown()
    }
    if(HandDriftTooLow()){
        DrawArrowUp()
    }
    if(HandTooFarFromBody()){
        DrawArrowFrom()
    }
    if(HandTooCloseToBody()){
        DrawArrowTo()
    }
}
function HandleState2(frame){
    DeterminePastUserPerformanceIfNotDone(determinedPastPerf);
    //EmptyUserList(userListEmpty);
    if(meanPredictionAcc > 0.10){
        DrawUpperRightPanel();
    }
    else{
        DrawLowerRightPanel();
        DrawUpperRightPanel();
    }
    DetermineCurrentUserPerformance();
    //DisplaySessionPerformanceVisualization();
    DetermineUserRankings();

    //Put Determine State above Function Calls
    DetermineWheterToSwitchDigits();
    
    HandleFrame(frame,Test);
}
function HandleState3(frame){
    if(DetermineWheterToSwitchEquations() == true){
        firstVar,sign,secondVar,digitToShow = GenerateEquation();
        DrawEqLowerLeftPanel(firstVar,sign,secondVar);
    }
    else{
        DrawEqLowerLeftPanel(firstVar,sign,secondVar);
        DrawLowerRightPanel();
    }
    DetermineCurrentUserPerformance();
    //DisplaySessionPerformanceVisualization();
    DetermineUserRankings();
    HandleFrame(frame,Test)

}
function HandleState4(frame){
    if(DetermineWheterToSwitchEquations() == true){
        firstVar,sign,secondVar,answer = GenerateEquation();
        console.log(secondVar)
        digitToShow = parseFloat(secondVar)
        DrawVarEqUpperRightPanel(firstVar,sign,answer);
        DrawLowerRightPanel();
    }
    else{
        DrawVarEqUpperRightPanel(firstVar,sign,answer);
        DrawLowerRightPanel();
    }
    DetermineCurrentUserPerformance();
    //DisplaySessionPerformanceVisualization();
    DetermineUserRankings();
    HandleFrame(frame,Test)
}
Leap.loop(controllerOptions, function(frame){
    clear();
    DetermineState(frame);
    //console.log("Program State: ",programState)
    if(programState ==0){
        HandleState0(frame);
    }
    else if(programState==1){
        HandleState1(frame);
    }
    else if(programState==2){
        HandleState2(frame)
    }
    else if(programState==3){
        HandleState3(frame)
    }
    else if(programState == 4){
        HandleState4(frame)
    }
});