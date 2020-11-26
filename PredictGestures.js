const knnClassifier = ml5.KNNClassifier();
//var testingSampleIndex = 0;
var controllerOptions = {};
var trainingCompleted = false;
var numSamples = 100;//test.shape[3];
//var numFeatures = irisData.shape[1]-1;
var predictedClassLabels = nj.zeros(numSamples)
var framesOfData = nj.zeros([5,4,6]);
var numPredictions = 0;
var meanPredictionAcc = 0;
var programState = 0;
var digitToShow = 0;
var timeSinceLastDigitChange = new Date();

var firstVar = 2;
var secondVar = 3;
var answer = 5;
var sign = 0;


function Train()
{
    for(i=0;i<train8.shape[3];i++)
    {
        ///////////////////////////////////////
        // TRAINING FOR FIRST //
        knnClassifier.addExample(trainFist.pick(null,null,null,i).flatten().tolist(),10)
        //////////////////////////////////////////
        // TRAINING FOR 0 DIGIT //
        knnClassifier.addExample(train0.pick(null,null,null,i).flatten().tolist(),0)
        
        
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
        // knnClassifier.addExample(train1McLaughlin.pick(null,null,null,i).flatten().tolist(),1)
        //knnClassifier.addExample(train1Wolley.pick(null,null,null,i).flatten().tolist(),1)
        //knnClassifier.addExample(train1Hunt.pick(null,null,null,i).flatten().tolist(),1)
        //knnClassifier.addExample(train1Jimmo.pick(null,null,null,i).flatten().tolist(),1)


        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR 2 DIGIT
        knnClassifier.addExample(train2.pick(null,null,null,i).flatten().tolist(),2)
        //knnClassifier.addExample(train2Downs.pick(null,null,null,i).flatten().tolist(),2)
        
        
        //knnClassifier.addExample(train2Jimmo.pick(null,null,null,i).flatten().tolist(),2)
        knnClassifier.addExample(train2Jing.pick(null,null,null,i).flatten().tolist(),2)
        knnClassifier.addExample(train2Liu.pick(null,null,null,i).flatten().tolist(),2)
        //knnClassifier.addExample(train2Neff.pick(null,null,null,i).flatten().tolist(),2)
        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR DIGIT 3 //
        knnClassifier.addExample(train3.pick(null,null,null,i).flatten().tolist(),3)
        knnClassifier.addExample(train3Beattie.pick(null,null,null,i).flatten().tolist(),3)
        //knnClassifier.addExample(train3Downs.pick(null,null,null,i).flatten().tolist(),3)
        //knnClassifier.addExample(train3Li.pick(null,null,null,i).flatten().tolist(),3)
        //knnClassifier.addExample(train3Luksevish.pick(null,null,null,i).flatten().tolist(),3)
        //knnClassifier.addExample(train3Riofrio.pick(null,null,null,i).flatten().tolist(),3)
        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR DIGIT 4 //
        knnClassifier.addExample(train4.pick(null,null,null,i).flatten().tolist(),4)
        knnClassifier.addExample(train4Beattie.pick(null,null,null,i).flatten().tolist(),4)
        knnClassifier.addExample(train4Bertschinger.pick(null,null,null,i).flatten().tolist(),4)
        
        //knnClassifier.addExample(train4Faucher.pick(null,null,null,i).flatten().tolist(),4)
        
        // knnClassifier.addExample(train4Kiely.pick(null,null,null,i).flatten().tolist(),4)
        // knnClassifier.addExample(train4Liu.pick(null,null,null,i).flatten().tolist(),4)
        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR DIGIT 5 //
        knnClassifier.addExample(train5.pick(null,null,null,i).flatten().tolist(),5)
        //knnClassifier.addExample(train5Bertschinger.pick(null,null,null,i).flatten().tolist(),5)
        //knnClassifier.addExample(train5Blewett.pick(null,null,null,i).flatten().tolist(),5)
        //knnClassifier.addExample(train5Faucher.pick(null,null,null,i).flatten().tolist(),5)
        
        //knnClassifier.addExample(train5Fekert.pick(null,null,null,i).flatten().tolist(),5)
        //knnClassifier.addExample(train5Kiely.pick(null,null,null,i).flatten().tolist(),5)
        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR DIGIT 6 //
        knnClassifier.addExample(train6.pick(null,null,null,i).flatten().tolist(),6)
        knnClassifier.addExample(train6Fekert.pick(null,null,null,i).flatten().tolist(),6)
        //knnClassifier.addExample(train6Fisher.pick(null,null,null,i).flatten().tolist(),6)
        //knnClassifier.addExample(train6Koretsky.pick(null,null,null,i).flatten().tolist(),6)
        
        //knnClassifier.addExample(train6Laquerre.pick(null,null,null,i).flatten().tolist(),6)
        //knnClassifier.addExample(train6Makovsky.pick(null,null,null,i).flatten().tolist(),6)

        //////////////////////////////////////////

        //////////////////////////////////////////
        // TRAINING FOR DIGIT 7
        knnClassifier.addExample(train7.pick(null,null,null,i).flatten().tolist(),7)
        
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
        //knnClassifier.addExample(train8Goldman.pick(null,null,null,i).flatten().tolist(),8)
        //knnClassifier.addExample(train8Matthews.pick(null,null,null,i).flatten().tolist(),8)
        //knnClassifier.addExample(train8McCallion.pick(null,null,null,i).flatten().tolist(),8)

        //////////////////////////////////////////


        //////////////////////////////////////////
        // TRAINING FOR DIGIT 9
        //knnClassifier.addExample(train9.pick(null,null,null,i).flatten().tolist(),9)
        knnClassifier.addExample(train9Bongard.pick(null,null,null,i).flatten().tolist(),9)
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
function Test()
{
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
    console.log(numPredictions,'Mean Prediction Accuracy: ',meanPredictionAcc,parseInt(result.label))
    //console.log(parseInt(result.label))
    //console.log(parseInt(result.label));
    
    
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
    
    
    // Comment out test
    Test()

    var xb = window.innerWidth/2 * normalizedPrevJoint[0];
    var yb = window.innerHeight/2 * (1 - normalizedPrevJoint[1]);
    var xt = window.innerWidth/2 * normalizedNextJoint[0];
    var yt = window.innerHeight/2 * (1 - normalizedNextJoint[1]);

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
    stroke(((4-weight)*60)*(1-meanPredictionAcc),((4-weight)*60)*meanPredictionAcc,0);
    line(xb,yb,xt,yt);
}

function DetermineState(frame){
    if(frame.hands.length == 0){
        programState = 0;
    }
    else if(frame.hands.length >= 1 && HandIsUncentered() == true){
        programState = 1;
    }
    else if (frame.hands.length == 1 && HandIsUncentered() == false){
        programState=2;
    }
    else if(frame.hands.length == 2 && HandIsUncentered() == false){
        programState = 3;
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
        console.log(users[i]);
        console.log(users[i].innerHTML);
        if(username == users[i].innerHTML){
            usernameFound = true;
        }
    }
    return usernameFound == false
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
function SignIn(){
    //console.log('SignIn Function Called')
    //Unordered list with an ID of 'users'
    username = document.getElementById('username').value;
    var list = document.getElementById('users');
    if(IsNewUser(username,list) == true){
        CreateNewUser(username,list);
        CreateSignInItem(username,list);
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

function DetermineWheterToSwitchDigits(){
    if((TimeToSwitchDigits() == true && meanPredictionAcc > 0.2)){//|| meanPredictionAcc > 0.5){
        timeSinceLastDigitChange = new Date()
        numPredictions = 0;
        meanPredictionAcc = 0;
        SwitchDigits()
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
function TimeToSwitchDigits(){
    currentTime = new Date();
    differenceSinceChangeInMilliseconds = currentTime - timeSinceLastDigitChange
    differenceSinceChangeInSeconds = differenceSinceChangeInMilliseconds/1000
    if(differenceSinceChangeInSeconds > 15){
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
function DrawLowerLeftPanel(){
    if(digitToShow == 0){
        image(zero,0,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 1){
        image(one,0,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 2){
        image(two,0,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 3){
        image(three,0,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 4){
        image(four,0,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 5){
        image(five,0,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 6){
        image(six,0,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 7){
        image(seven,0,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 8){
        image(eight,0,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
    if(digitToShow == 9){
        image(nine,0,window.innerHeight/2,window.innerWidth/2,window.innerHeight/2);
    }
}
function DetermineWheterToSwitchEquations(){
    if(TimeToSwitchDigits() == true){
        timeSinceLastDigitChange = new Date()
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
        image(zero,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 1){
        image(one,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 2){
        image(two,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 3){
        image(three,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 4){
        image(four,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 5){
        image(five,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 6){
        image(six,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 7){
        image(seven,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 8){
        image(eight,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 9){
        image(nine,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 10){
        image(ten,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 11){
        image(eleven,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 12){
        image(twelve,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 13){
        image(thirteen,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 14){
        image(fourteen,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 15){
        image(fifteen,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 16){
        image(sixteen,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 17){
        image(seventeen,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(firstVar == 18){
        image(eighteen,0,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
}
function DrawSign(sign){
    if(sign == 0){
        image(addition,window.innerWidth/6,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    else if(sign == 1){
        image(subtraction,window.innerWidth/6,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
}
function DrawSecondVariable(secondVar){
    if(secondVar == 0){
        image(zero,window.innerWidth/3,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 1){
        image(one,window.innerWidth/3,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 2){
        image(two,window.innerWidth/3,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 3){
        image(three,window.innerWidth/3,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 4){
        image(four,window.innerWidth/3,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 5){
        image(five,window.innerWidth/3,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 6){
        image(six,window.innerWidth/3,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 7){
        image(seven,window.innerWidth/3,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 8){
        image(eight,window.innerWidth/3,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
    if(secondVar == 9){
        image(nine,window.innerWidth/3,window.innerHeight/2,window.innerWidth/6,window.innerHeight/2);
    }
}
function DrawEqLowerLeftPanel(firstVar,sign,secondVar){
    DrawFirstVariable(firstVar);
    DrawSign(sign);
    DrawSecondVariable(secondVar);
}
function HandleState0(frame){
    TrainKNNIfNotDoneYet(trainingCompleted)
    DrawImageToHelpUserPutThereHandOverDevice()
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
    if(meanPredictionAcc > 0.10){
        DrawLowerLeftPanel();
    }
    else{
        DrawLowerRightPanel();
        DrawLowerLeftPanel();
    }
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
    }
    HandleFrame(frame,Test)

}
// function draw()
Leap.loop(controllerOptions, function(frame){
    clear();
    currentNumHands = frame.hands.length;
    DetermineState(frame);
    console.log(programState)
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
    //console.log(framesOfData.toString());
    //Test();
    previousNumHands = currentNumHands;   
});