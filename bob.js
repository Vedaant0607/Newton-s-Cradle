class Bob{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.1
        }
       
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        
        //this.body.scale = 10.0;
        World.add(world,this.body);
     
      }
      display(){
       // var pos =this.body.position;
       // pos.x = mouseX;
      //  pos.y = mouseY;
        var angle = this.body.angle;
       push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("purple")
        ellipse(0, 0, this.radius, this.radius);
        pop();
       
  
      }
}
