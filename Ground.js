class Ground{
	constructor(x,y,w,h){
		var options={
			isStatic:true,
		}
this.body=Bodies.rectangle(this.x,this.y,this.w,this,h,options);

this.x=x;
this.y=y;
this.w=w;
this.h=h;
	}


display(){
	rectMode(CENTER);
	fill("White")
	rect(this.x,this.y,this.w,this.h);
}
}