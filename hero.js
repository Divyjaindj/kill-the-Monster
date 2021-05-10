class Hero{
	constructor(x,y,w,h){
		
this.body=Bodies.rectangle(this.x,this.y,this.w,this.h);

this.x=x;
this.y=y;
this.w=w;
this.h=h;
	}


display(){
	rectMode(CENTER);
	fill("yellow")
	rect(this.x,this.y,this.w,this.h);
}
}