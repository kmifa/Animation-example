window.addEventListener("load", init);
    function init() {
      // Stageオブジェクトを作成。表示リストのルートになります。
      var stage = new createjs.Stage("myCanvas");
      // シェイプを作成
      var shape = new createjs.Shape();
      // 塗りの色を指定
      shape.graphics.beginFill("DarkRed");
      // 円を描く
      shape.graphics.drawCircle(0, 0, 80);
      stage.addChild(shape); // 表示リストに追加
      // 配置座標を設定
      shape.x = 200;
      shape.y = 100;
      // Stageの描画を更新
      stage.update();
    }