var circles = [];

function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = randomPoint * maxPoint;

    //new Path.Circle(point, 10).fillColor = 'orange';
    circles.push(new Path.Circle({
        center: point,
        radius: 400,
        fillColor: 'orange'
    }));
}

function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(0.9);
    }
}
