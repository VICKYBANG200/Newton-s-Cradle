class Roof
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
    this.w=width;
		this.h=height;
		this.body=Bodies.rectangle(x, y,width, height , options);
 		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		

			rectMode(CENTER);
			fill(236, 245, 66);
			rect(0,0,this.w, this.h);
	}

}