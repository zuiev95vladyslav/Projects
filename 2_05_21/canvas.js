var degrees = .2;
setInterval(function(){
  drawRotateSquare(degrees);
}, 50);

var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');
function drawRotateSquare(deg){
  context.clearRect(0,0,300,300);
	  context.fillStyle = 'black';
  context.translate(150, 150);
  context.rotate((Math.PI/180) * deg);
  context.translate(-150, -150);
  context.fillRect(100, 100, 100, 100);
}
