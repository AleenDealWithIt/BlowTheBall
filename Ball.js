class Ball{

    constructor(x, y, w, h){

        let options = {
            restitution: 0.8
           };

           
           this.body = Bodies.rectangle(x, y, w, h, options);
           this.w = w;
           this.h = h;
           World.add(world, this.body);
         }
       
         show() {
           let pos = this.body.position;
           push();
           translate(pos.x, pos.y);
           rotate(this.body.angle);
           ellipseMode(CENTER);
           noStroke();
           fill(196,127,146);
           ellipse(0, 0, this.w, this.h);
           pop();
     }
}