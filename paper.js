class Paper{
constructor(x,y,r){
var options={
density:0.7,
restituiton:0.8,
this.image=loadImage("sprites/paper.png");
}
this.radius=r;
this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    translate(this.body.position.x,this.body.position.y);
    
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
}
}