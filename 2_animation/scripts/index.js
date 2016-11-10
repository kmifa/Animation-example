window.addEventListener("load", init);


function init(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    //Canvas dimensions
    var w = canvas.width; 
    var h = canvas.height;

    var Walker = function (){
      this.x = w;
      this.y = h;
    }

    Walker.prototype.dis = function(){
      ctx.fillStyle = "red";
      ctx.fillRect(this.x /2, this.y/2, 1,1);
    }

    Walker.prototype.ran = function(){
      var obj = {};
      obj.ranX = Math.floor(Math.random() * (2 - (-1)) + (-1));
      obj.ranY = Math.floor(Math.random() * (2 - (-1)) + (-1));

      return obj;
      
    }

    var test = new Walker();

    function draw(){
      var objRan = test.ran();

      test.dis();

      test.x += objRan.ranX;
      test.y += objRan.ranY;
    }

    setInterval(draw, 10);


}



