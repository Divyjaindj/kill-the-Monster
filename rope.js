class Rope{
	constructor(bodyA,pointB){

		var options={
			 bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
		}
		this.rope=Matter.Constraint.create(options);
		World.add(world,this.rope);
	}
	display(){
		line(bodyA.x,bodyA.y,pointB.x,pointB.y);
	}
}