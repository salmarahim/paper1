class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 50
        }
        
      
        this.launch = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.launch);
    }
    fly(){
        this.launch.bodyA = null;
    }
    display(){
   if(this.launch.bodyA){    
    var pointA = this.launch.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(3);
    stroke(0);
    line(pointA.x, pointA.y, pointB.x, pointB.y+20);
    }}
}