var Car = function (x, y){
    this.x = x;
    this.y = y;
    this.draw();
};
Car.prototype.draw = function (){
    var carHtml='<img src="img/car.jpg">';
    this.carElement = $(carHtml);
    this.carElement.css({
        position: "absolute",
        left: this.x,
        top:  this.y

    });
    $("body").append(this.carElement); 
};
var tesla = new Car(20, 20);
var nissan = new Car(100, 200);


// движение//

Car.prototype.moveRight = function (speed) {
    this.x += speed;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
   };
   Car.prototype.moveLeft = function (speed) {
    this.x -= speed;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
   };
   Car.prototype.moveUp = function (speed) {
    this.y -= speed;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
   };
   Car.prototype.moveDown = function (speed) {
    this.y += speed;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
   };
   setInterval(function(){tesla.moveRight(Math.floor(Math.random()*50))}, 30);
   setInterval(function(){nissan.moveRight(Math.floor(Math.random()*50))}, 30);