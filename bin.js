class Bin{
    constructor(x,y,width,height){
    this.width=width;
    this.height=height;
    this.image= loadImage("sprites/dustbingreen.png");
   var options={
    isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    }
    
    display(){
      var pos=this.body.position 
      rectMode(CENTER);
       rect(pos.x, pos.y, this.width,this.height)
    }
    }