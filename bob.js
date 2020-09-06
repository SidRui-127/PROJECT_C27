class Bob {
    constructor(x,y,r) {
        var options = {
            isStataic:false,
            restitution:1,
            friction:0,
            density:0.8

        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world, this.body);
    }
    display(){

        var bobPos = this.body.position;
        console.log(bobPos);

        push();
        translate(bobPos.x, bobPos.y);
        rectMode(CENTER);
        fill(255,0,0);
        ellipse(0,0,this.r,this.r);
        pop();
      }
}