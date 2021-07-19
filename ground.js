class ground {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push()
    translate(groundPos.x, groundPos.y);
    rectMode(CENTER);
    strokeWeight(4);
    fill("brown")
    rect(0,0,this.w, this.h);
    pop()
    
  }
};
