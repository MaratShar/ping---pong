var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
	container: 'container',
	width: width,
	height: height
});

var layer = new Konva.Layer();

 var description = new Konva.Text({
        x: 20,
        y: 15,
        text: 'score:',
        fontSize: 50,
        fontFamily: 'Calibri',
        fill: 'red'
      });
layer.add(description)



var rect = new Konva.Rect({
	x: stage.width() / 2,
	y: stage.height() - 100,
	width: 450,
	height: 60,
	cornerRadius: 100,
	fill: 'green'
});


stage.on('mousemove', function () {
	var mousePos = stage.getPointerPosition();
	rect.x(mousePos.x)
	
	if(rect.x() + rect.width() >= width){
		 rect.x(width - rect.width())
		 }
	
	layer.draw();
})



layer.add(rect);

var ball = new Konva.Circle({
	x: stage.width() / 2,
	y: 50,
	radius: 30,
	fill: 'yellow'
});

layer.add(ball);

var score = new Konva.Text({
        x: 150,
        y: 15,
        text: '0',
        fontSize: 50,
        fontFamily: 'Calibri',
        fill: 'red'
      });
layer.add(score)

var number = 0
var stepX = 10
var stepY = 10



var anim = new Konva.Animation(function (frame) {
	ball.x(ball.x() + stepX)
	if (ball.x() >= width || ball.x() <= 0) {
		stepX = -stepX
	}
	
	if (ball.y() >= height) {
		alert('You are loser')
		ball.y(0)
		number = 0
	}
	
	
	
	if (rect.y() <= ball.y() && rect.x() + rect.width() >= ball.x() &&  rect.x() <= ball.x()) {
		number++
		score.text(number)
		stepY = -stepY
	}
	
	ball.y(ball.y() + stepY)
	if (ball.y() <= 0) {
		stepY = -stepY
	}
	
	
}, layer);


anim.start();
 


stage.add(layer)
