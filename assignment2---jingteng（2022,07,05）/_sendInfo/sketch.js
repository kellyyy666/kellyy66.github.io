//let channelName = "pathfinder";
let channelName = "Listener";

let submitButton;
let textinput;
let array = [];
let x;
let y;
let px;
let py;
var url = new URL(window.location.href);
var you = url.searchParams.get("you");
console.log(you);

// let lis = document.querySelectorAll('li')

// lis[0].className = 'active'

// let curLi = lis[0]


// lis.forEach((li) => {
//     li.addEventListener('click', () => {

//         if (curLi !== null) {
//             curLi.classList.remove('active')
//         }

//         li.classList.add('active')
//         curLi = li
//     })
// })


createServer(you); // creating our pubnub server with our name.

function setup() {

    createCanvas(windowWidth, windowHeight);

    // randomly choose a colour to draw on the receive page
    redVal = random(0,255);
    greenVal = random(0,255);
    blueVal = random(0,255);


    textInput = createInput();
    textInput.style("font-size: 30px");
    textInput.position(1000,500);
    // the x and y value of where you want it on the page

    sendButton = createButton("Exchange");
    sendButton.style("font-size: 30px");
    sendButton.position(1123, 560);
    sendButton.mousePressed(sendTheMessage);
    // textSize(50);
    // text("TEST", random(0, (width/2) - 100), random(0, windowHeight)); 
  }
  
function draw() {

  textSize(30);
  textAlign(CENTER);
  text("Hello, " +you +".  Free leave comments to inputbox", 1130, 620);
  // text("Hello, " +you +".  Free leave comments to inputbox", windowWidth/2, windowHeight/2);
  if (mouseIsPressed == true) {
    sendTheMessage();
  }
}

function appendValue1() {

  fill(255,60,0,); 
  
  append(array1, input1.value()); 

  console.log("Left side: " +  array1); 

  textSize(array1.length * 66); 
  text(input1.value(), random(0, (width/2) - 100), random(0, windowHeight)); 

  input1.value(''); 
  
}

  // PubNub logic below
function sendTheMessage() {
  console.log("Sending Message: ", textInput.value());
  console.log("channelName: ", channelName);

  // Send Data to the server to draw it in all other canvases
  dataServer.publish({
    channel: channelName,
    message: {
      messageText: textInput.value(),
    },
  });
}