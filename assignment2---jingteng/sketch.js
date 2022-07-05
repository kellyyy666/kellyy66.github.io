
/**p5.js example redirecting users to either a send or a receive page */

let you;

let nameSubmit = false; // variable determining whether or not the user has pressed submit yet
let nameInput;

let submitButton;

let sendPage
let receivePage

function setup() {

    createCanvas(windowWidth, windowHeight);

    textSize(50);
    textAlign(CENTER);
    fill(90,235,80);

/** **/
    nameInput = createInput();
    nameInput.style("font-size: 30px");
    nameInput.position((windowWidth/2)-nameInput.width, 100+ (windowHeight/2));

    submitButton = createButton("Enter");
    submitButton.style("font-size: 30px");
    submitButton.position(nameInput.x + nameInput.width + 50, 100+ (windowHeight/2));

    submitButton.mousePressed(submitName);

  }
  
function draw() {

  if (nameSubmit == false) {

    text("Welcome, Please create you own code name", windowWidth/2, windowHeight/2);

  } else {

    submitButton.remove();

    nameInput.remove();
    text(".Keep goning, " + you + " . Choose manner of working you want to be ❥" , windowWidth/3, windowHeight/3);

    sendPage = createA('https://kellyyy666.github.io/kellyy66.github.io//_sendInfo/index.html?you='+you, 'Pathfinder');
    sendPage.style("font-size: 30px"); 
    sendPage.position((windowWidth/2) - 200, windowHeight*0.6);

    receivePage = createA('https://kellyyy666.github.io/kellyy66.github.io//_receiveInfo/index.html?you='+you, 'Listener');
    receivePage.style("font-size: 30px");
    receivePage.position((windowWidth/2) + 100, windowHeight*0.6);

    noLoop(); 
  
  }
 
}

function submitName() {

  you = nameInput.value()

  if ( you != "" ) {

    nameSubmit = true;

  } 
  else {

    window.alert("it's hard to move forward without a friendly start!");

  }

}