var rantLines = [
"We suck! ",
"We're ball watching! ",
"Come out of your comas! ",
"That was awful... Awful, awful, awful! ",
"We lose games because we are stupid! ",
"You're cadavers out there! ",
"If you don't play any better we're gonna get back on the bus. ",
];

function pickSport(){
    var sportSelected = document.getElementById("sportSelect").selectedIndex;
    console.log(sportSelected)
    var sportValue = document.getElementsByClassName("sportOption")[sportSelected].value;
    console.log(sportValue); 
    var newItem = "That was some wimpy, wussy, weeny, awful, terrible " + sportValue + ". ";
    console.log(newItem);
    rantLines.push(newItem);
//    document.getElementById("willHide").style.visibility = "hidden";
    document.getElementById("sportSelect").style.visibility = "hidden";
    document.getElementById("pickSportButton").style.visibility = "hidden";
    document.getElementById("youSelected").innerHTML = "You have selected " + sportValue + ".";
}

function addYell(){
    rantLines.push(document.getElementById("addNew").value + " ");
    document.getElementById("newYell").reset();
   };

function generateRant() {
    var lengthSelected = document.getElementById("lengthSelect").selectedIndex;
    var lengthValue = document.getElementsByClassName("lengthOption")[lengthSelected].value;
    var rantLength = Number(lengthValue);
    var node = document.createElement("DIV");
    function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}
    var yourRant = getRandomArrayElements(rantLines, rantLength);
    var removedLines = [], found;
    for (var i = 0; i < rantLines.length; i++) {
    found = false;
    for (var j = 0; j < yourRant.length; j++) {
        if (rantLines[i] == yourRant[j]) {
            found = true;
            break;
        }
    }
    if (!found) {
        removedLines.push(rantLines[i]);
    }
}
    var noCommas = yourRant.join("");
    if (rantLength > rantLines.length){
    var noCommas = ""}
    var newRant = document.createTextNode(noCommas);
    node.appendChild(newRant);
    document.getElementById("yourRant").appendChild(node);
    rantLines = removedLines;
    console.log("yourRant is " + noCommas);
    console.log(rantLines.length + " is rantlines");
    console.log(rantLength + " is rantlength");
    if (rantLength > rantLines.length){
      
        document.getElementById("alertNeeded").innerHTML = "To continue ranting add more lines or create a shorter rant.";
    }
    else if (rantLines.length >= rantLength){
        document.getElementById("alertNeeded").innerHTML = "Keep ranting...";        
    }
};





