
let channelName = "Listener";

let who; 

var url = new URL(window.location.href);
var you = url.searchParams.get("you");

let x;
let y;
let px;
let py;

let array = [];

//let redVal;
//let greenVal;
//let blueVal;

let vid;
let sendButton;
/** Commented this out... I am unsure what you are trying to add here **/
//videoControls.setAttribute('data-state', 'visible');
let playing = false;
let completion;
var supportsProgress = (document.createElement('progress').max !== undefined);
if (!supportsProgress) progress.setAttribute('data-state', 'fake');

console.log(you);
createServer(you); // creating our pubnub server with our name.

function setup() {

  vid = createVideo("116.mp4"); 
  vid.size(windowHeight,windowWidth); 

  playButton = createButton("Play");
  playButton.style("font-size: 40px");
    /** CHANGE THIS POSITION BELOW THERE IS NOT TEXTINPUT**/
  // playButton.position(textInput.x + textInput.width + 50, 100+ (windowHeight/2));
  
  /***When you use this form of mousePressed the value that is in the brackets needs to be a function called */
  /** It also needed to be chagned to playButton, not sendButton*/
  playButton.mousePressed(playVideo);

  textSize(50);
  text("TEST", random(0, (width/2) - 100), random(0, windowHeight)); 


    /** added this in because it was altering the position of your video */
    noCanvas();
    //createCanvas(windowWidth, windowHeight);

    dataServer.addListener({ message: readIncoming});
    dataServer.subscribe({ channels: [channelName] });
    console.log("My Channel name: ", channelName);

    //fill(0);
   
  
  }
  var changeButtonState = function(type) {
    
   if (mouseIsPressed == true) 
    playvedio();}
 
  
function draw() {
    background(50); 
    completion = vid.time() / vid.duration(); 

}
function playVideo() {
  if (!playing) { 
    vid.play(); 
    vid.time((mouseX/width) * vid.duration()); 
  }
  else {
    vid.pause(); 
    
    playing = !playing; 
  }
}
function readIncoming(inMessage) {

  console.log("MY Messag: ", inMessage);
  console.log("On message in comming");
    if (inMessage.channel == channelName) {
      console.log("display text...");

      noStroke();
      // textSize(5000);
      // //text(inMessage.message.messageText, windowWidth/2, windowHeight/ 2); 
      // //text(inMessage.message.messageText,0, 0); 
      // text(inMessage.message.messageText, random(0, (width/2) - 100), random(0, windowHeight)); 
      // fill(255, 0, 0)
      
     // fill(255,66,200);
      appendValue(inMessage.message.messageText);

    }
  } 

  function appendValue(inputValue) {

    fill(255,60,0,); 
    console.log({inputValue});
    
    append(array, inputValue); 
  
    console.log("Left side: " +  array); 
  
    textSize(array.length * 66); 
    text(inputValue, random(0, (width/2) - 100), random(0, windowHeight)); 
  }
      
  
  function whoisconnected(connectionInfo) {}

 