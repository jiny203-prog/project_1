// p5.js 实例模式
const mySketch = (p) => {

  p.setup = function() {
    // 1. 创建全屏画布并挂载
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent('p5-background');
    
    // 背景设为浅灰色，匹配 sand.css 的 #d9d9d9
    p.background(217); 
  };

  p.draw = function() {
    // 只有在鼠标移动时才绘制
    if (p.mouseIsPressed || p.movedX !== 0 || p.movedY !== 0) {
      drawLayeredStroke(p.mouseX, p.mouseY);
    }
  };

  function drawLayeredStroke(x, y) {
    p.push();
    p.stroke(255);
    p.strokeWeight(1.5);
    p.fill(0);
    p.circle(x, y, 60);
    p.noFill(); 
    p.circle(x, y, 50);
    p.circle(x, y, 40);
    p.circle(x, y, 30);
    
    p.pop();
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.background(217); 
  };
};

new p5(mySketch);