var requestAnimationFrame = window.requestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.msRequestAnimationFrame;


var ball = document.getElementById("bubble-1");
var container = document.getElementById("bubble-container");

var factor = (Math.random() * (0.20 - 0.05) + 0.05).toFixed(2);
var timeOld, timeElapsed;

var x = Math.round(Math.random() * container.offsetWidth);
var y = Math.round(Math.random() * container.offsetHeight);
var step = 1;

var dx = step;
var dy = step;
var width = ball.offsetWidth;
var height = ball.offsetHeight;
var cH = container.offsetHeight;
var cW = container.offsetWidth;

function movement() {
requestAnimationFrame(moveball);

function changeSpeed() {
factor = (Math.random() * (0.20 - 0.05) + 0.05).toFixed(2);
}


function checkBall() {
if (x + width >= cW) {
dx = -step;
changeSpeed();
}
if (x <= 0) {
dx = step;
changeSpeed()
}
if (y + height >= cH) {
dy = -step;
changeSpeed()
}
if (y <= 0) { 
dy = step;
changeSpeed()
}
}


function moveball(timestamp) {

if (!timeOld) timeOld = timestamp;
timeElapsed = timestamp - timeOld;
timeOld = timestamp;

x += dx * timeElapsed * factor;
y += dy * timeElapsed * factor;

ball.style.transform = "translate(" + x + "px, " + y + "px)";

checkBall();

requestAnimationFrame(moveball);
}
}
requestAnimationFrame(movement);

/*    



var requestAnimationFrame = window.requestAnimationFrame ||
                                window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame ||
                                window.msRequestAnimationFrame;

    var balls = [];
    var ball1 = document.getElementById("bubble-1")
    balls.push(ball1)
    var ball2 = document.getElementById("bubble-2")
    balls.push(ball2)
    var ball3 = document.getElementById("bubble-3")
    balls.push(ball3)
    var ball4 = document.getElementById("bubble-4")
    balls.push(ball4)
    var ball5 = document.getElementById("bubble-5")
    balls.push(ball5)
    var ball6 = document.getElementById("bubble-6")
    balls.push(ball6)
    var ball7 = document.getElementById("bubble-7")
    balls.push(ball7)
    var ball8 = document.getElementById("bubble-8")
    balls.push(ball8)
    var ball9 = document.getElementById("bubble-9")
    balls.push(ball9)
    var ball10 = document.getElementById("bubble-10")
    balls.push(ball10)

    var container = document.getElementById("bubble-container");

    var factor = (Math.random() * (1.00 - 0.25) + 0.25).toFixed(2);
    var timeOld, timeElapsed;


    var step = 1;

    

    function movement() {
      requestAnimationFrame(moveball);

      function display() {
        for (var i = 0; i < balls.length; i++){
          let ball = balls[i];
          ball.x = Math.round(Math.random() * container.offsetWidth);
          ball.y = Math.round(Math.random() * container.offsetHeight);
          ball.dx = step;
          ball.dy = step;
          ball.width = ball.offsetWidth;
          ball.height = ball.offsetHeight;
          ball.cH = container.offsetHeight;
          ball.cW = container.offsetWidth;
        }
      }

      display();
  
      function changeSpeed() {
        factor = (Math.random() * (1.00 - 0.25) + 0.25).toFixed(2);
      }


      function checkBall() {
        if (x + width >= cW) {
          dx = -step;
          changeSpeed();
        }
        if (x <= 0) {
          dx = step;
          changeSpeed()
        }
        if (y + height >= cH) {
          dy = -step;
          changeSpeed()
        }
        if (y <= 0) { 
          dy = step;
          changeSpeed()
        }
      }
 

      function moveball(timestamp) {

        if (!timeOld) timeOld = timestamp;
        timeElapsed = timestamp - timeOld;
        timeOld = timestamp;

  

        x += dx * timeElapsed * factor;
        y += dy * timeElapsed * factor;
  
        // use CSS transform instead of top and left for performance reasons
        ball.style.transform = "translate(" + x + "px, " + y + "px)";
  
        checkBall();

        requestAnimationFrame(moveball);
      }
    }

    function animateBubbles() {
      for(var i = 0; i < balls.length; i++){
        let ball = this.balls[i];
        ball.display();
        ball.movement();
      }
    }
    requestAnimationFrame(animateBubbles);

*/