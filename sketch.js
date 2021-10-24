let numX=3;//球列的數量
let numY=1;//球行的數量
let numA=10;//盒子列的數量
let numB=5;//盒子行的數量
let longA=100;//板子長度
let longB=10;//板子長度
let longC=20;//盒子的邊長

// 陣列 list 
let bs = [];
let ss = [];

function setup() {
  createCanvas(400, 400);

  for(let i=0;i<numX;i=i+1){
    for(let j=0;j<numY;j=j+1){
      // 把東西塞入 [] list 中的方法
      // xxx.push(新建的物件)
      bs.push(new Ball(i*width/numX + width/numX/2,
                       j*height/numY + height/numY/2));
    }
  }
  
  for(let k=0;k<numA;k=k+1){//盒子
      for(let l=0;l<numB;l=l+1){
      // 把東西塞入 [] list 中的方法
      // xxx.push(新建的物件)
      //
      ss.push(new Box(k*width/numA + width/numA/2,
                       l*height/numB/3 + height/numB/2));
    }
  }
  
}
 // 持續重複執行
function draw() {
  
  background(220); 

  
  // 讓袋子中的 每物件 各自執行動作
  // xxx.forEach((v)=>{ v.display(); });
  bs.forEach((v)=>{
    v.display();
  });
  
   ss.forEach((w)=>{//盒子
    w.display();
  });
  //板子
  /*rectMode(CENTER);
      translate(mouseX,mouseY);
      fill(255)
      rect(0,0,longA,longB);
*/
  //按壓板子向下
  if(mouseIsPressed){
      push();
        rectMode(CENTER);
      translate(mouseX,mouseY+50);
      fill(255)
      rect(0,0,longA,longB);
      pop();
  }else{
        push();
      rectMode(CENTER);
      translate(mouseX,mouseY);
      fill(255)
      rect(0,0,longA,longB);
 
}
}
// 物件導向格式
class Ball{
  // 建構
  constructor(x,y,s=20){
    this.x=x;
    this.y=y;
    this.size=s;
    this.movex =random(-1.0,1.0);
    this.movey =random(-1.0,1.0);
  }
  // 能力為何
  display(){
    this.selfbounce();
    this.bounce1();
    //this.bounce2();
    this.move();
    circle(this.x,this.y,this.size);
  }
  move(){
    this.x = this.x + this.movex;
    this.y = this.y + this.movey;
  }
  //邊框反彈
  bounce1(){
    // 上方反彈
    if (this.y-this.size/2<0){
      this.movey = -1*this.movey;
    }
    // 上方反彈
    if (this.y+this.size/2>height){
      this.movey = -1*this.movey;
    }
    // 左方反彈
    if (this.x-this.size/2<0){
      this.movex = -1*this.movex;
    }
    // 上方反彈
    if (this.x+this.size/2>width){
      this.movex = -1
        *this.movex;
    }
  }
  // 物件彼此反彈
  selfbounce(){
    bs.forEach((nb)=>{
      if (nb === this){
        // 若不是自己
        console.log('a');
      }else{
        // 若x方向距離太近
        if (abs(this.x-nb.x)<this.size && 
            dist(this.x,this.y,nb.x,nb.y)<this.size)
          {this.movex=-1*this.movex;
           }
        // 若y方向距離太近
        if (abs(this.y-nb.y)<this.size&& 
            dist(this.x,this.y,nb.x,nb.y)<this.size)
          {this.movey=-1*this.movey;
           }
      }
      
      });
  }
  // 板子彼此反彈
  /*this.bounce2(){
  bs.forEach((nb)=>{
      if (nb === this){
        // 若不是自己
        console.log('a');
      }else{
        // 若x方向距離太近
        if (abs(this.x-mouseX+50)<this.size && 
            dist(this.x,this.y,mouseX+50,mouseY-5)<this.size)
          {this.movex=-1*this.movex;
           }
        // 若y方向距離太近
        if (abs(this.y-mouseY-5)<this.size&& 
            dist(this.x,this.y,mouseX+50,mouseY-5)<this.size)
          {this.movey=-1*this.movey;
           }
      }
      
      });
}
  */


  
  
  
  
}

class Box{
  // 建構
  constructor(x,y,s=20){
    this.x=x;
    this.y=y;
    this.size=s;
    this.movex =(0,0);
    this.movey =(0,0);
  }
  // 能力為何
  display(){
    this.selfbounce();
    this.bounce();
    this.move();
      rectMode(CENTER);
      fill(255)
      rect(this.x,this.y,longC,longC);
  }
  move(){
    this.x = this.x + this.movex;
    this.y = this.y + this.movey;
  }
  
  bounce(){
    // 上方反彈
    if (this.y-this.size/2<0){
      this.movey = -1*this.movey;
    }
    // 上方反彈
    if (this.y+this.size/2>height){
      this.movey = -1*this.movey;
    }
    // 左方反彈
    if (this.x-this.size/2<0){
      this.movex = -1*this.movex;
    }
    // 上方反彈
    if (this.x+this.size/2>width){
      this.movex = -1
        *this.movex;
    }
  }
  // 物件彼此反彈>消失
  selfbounce(){
    ss.forEach((nb)=>{
      if (nb === this){
        // 若不是自己
        console.log('a');
      }else{
        // 若x方向距離太近
        if (abs(this.x-nb.x)<this.size && 
            dist(this.x,this.y,nb.x,nb.y)<this.size)
          {this.movex=-1*this.movex;
           }
        if (abs(this.y-nb.y)<this.size&& 
            dist(this.x,this.y,nb.x,nb.y)<this.size)
          {this.movey=-1*this.movey;
           }
      }
      
      });
  }
  
  
  
  
  
  
}
