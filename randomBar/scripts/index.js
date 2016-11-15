window.addEventListener("load", init);

function init(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    //Canvas dimensions
    var w = canvas.width; 
    var h = canvas.height;

    var randomCounts = [];
    var maxInt = 20;

    for(var i = 0; i < maxInt; i++){
      randomCounts[i] = 0;
    }

    ctx.fillStyle = "green";

    function draw(){

      var index = Math.floor(Math.random() * randomCounts.length);

      randomCounts[index]++;

      var bar = w/randomCounts.length;
      for(var x = 0; x < randomCounts.length; x++){
        ctx.fillRect(x * bar,h - randomCounts[x], bar - 1, randomCounts[x]);
      }

    }

    setInterval(draw, 10);

}



