window.addEventListener("load", init);

  function init(){

    var stage = new createjs.Stage("myCanvas");

    var shape = new createjs.Shape();
    stage.addChild(shape);

    var SIZE = 220;

    var HEIGHT = SIZE * Math.sin(60 * Math.PI / 180);

    var margin = SIZE + 20;

    for(var i = 0; i < 8; i++){

      var offsetX = (i % 4) * margin;
      var offsetY = Math.floor(i / 4) * margin;

      drawTriangle(i,
            0 + offsetX, HEIGHT + offsetY,
            SIZE / 2 + offsetX, 0 + offsetY,
            SIZE + offsetX, HEIGHT + offsetY);
    }

    function drawTriangle(level,
                          x1, y1,
                          x2, y2,
                          x3, y3){
      if(level <= 0){

        shape.graphics.beginStroke("DarkRed").setStrokeStyle(0.5);

        shape.graphics.moveTo(x1,y1);
        shape.graphics.lineTo(x2,y2);
        shape.graphics.lineTo(x3,y3);
        shape.graphics.closePath();
      }else{

        var nx1 = (x1 + x2) / 2;
        var ny1 = (y1 + y2) / 2;

        var nx2 = (x2 + x3) / 2;
        var ny2 = (y2 + y3) / 2;

        var nx3 = (x3 + x1) / 2;
        var ny3 = (y3 + y1) / 2;

        level = level - 1;

        drawTriangle(level, x1, y1, nx1, ny1, nx3, ny3);
        drawTriangle(level, x2, y2, nx1, ny1, nx2, ny2);
        drawTriangle(level, x3, y3, nx2, ny2, nx3, ny3);
      }
    }

    stage.update();


  }