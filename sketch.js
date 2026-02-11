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

  // 核心函数：绘制分层笔触（模仿 P2 效果）
  function drawLayeredStroke(x, y) {
    p.push();
    
    // 设置描边为白色，实现截图中的白边叠加感
    p.stroke(255);
    p.strokeWeight(1.5);
    
    // 循环绘制多个圆圈，产生嵌套感
    // 从大到小绘制，黑色填充
    p.fill(0);
    
    // 绘制主圆
    p.circle(x, y, 60);
    
    // 内部绘制稍微小一点的圆，增加线条密度
    p.noFill(); // 内部圆可以只留线条
    p.circle(x, y, 50);
    p.circle(x, y, 40);
    p.circle(x, y, 30);
    
    p.pop();
  }

  // 窗口大小调整
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.background(217); 
  };
};

// 启动 p5 实例
new p5(mySketch);