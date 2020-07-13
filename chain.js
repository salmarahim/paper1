class Chain{
constructor(bodyA,pointB){
    var con_options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:50
    }
 this.chain=Constraint.create(con_options);
 this.pointB=pointB;
 World.add(world,this.chain);
}
display(){
    strokeWeight(3);
    stroke(0);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
        this.pointB.x,this.pointB.y);
    }
}





