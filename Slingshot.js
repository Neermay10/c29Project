class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1img = loadImage("sprites/sling1.png");
        this.sling2img = loadImage("sprites/sling2.png");
        this.sling3img = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            image(this.sling1img,200,20);
            image(this.sling2img,173,18);
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(109, 56, 0);
            if(pointA.x < 220){
                strokeWeight(8);
                line(pointA.x - 20, pointA.y, pointB.x, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 20, pointB.y - 5);
                image(this.sling3img,pointA.x - 30,pointA.y-10,15,30)
            }else {
                strokeWeight(4);
                line(pointA.x + 20, pointA.y, pointB.x, pointB.y);
                line(pointA.x + 20, pointA.y, pointB.x + 20, pointB.y - 5);
                image(this.sling3img,pointA.x + 24,pointA.y-10,15,30)
            }
            pop();
        }
    }
    
}