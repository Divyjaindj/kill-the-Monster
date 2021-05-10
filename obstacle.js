class Obstacle{
	constructor(x,y){
		var options={
			restitution : 1,
			isStatic:false
		}
this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);

this.x=x;
this.y=y;
this.w=30;
this.h=30;
	}


display(){
	rectMode(CENTER);
	fill("green")
	rect(this.x,this.y,this.w,this.h);
}
}