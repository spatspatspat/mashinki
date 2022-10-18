var Car = function (x, y){
    this.x = x;
    this.y = y;
};
Car.prototype.draw= function (){
    var carHtml='<img src="img/car.jpg">';
    var carElement = $(carHtml);
    carElement.css({
        position: "absolute",
        left: car.x,
        top:  car.y

    });
    $("body").append(carElement);
    
};
Car.prototype.moveRight = function(){
    this.x += 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};
var tesla = new Car(20, 20);
var nissan = new Car(100, 200);
drawCar(tesla);
drawCar(nissan);