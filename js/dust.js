var  dustObj=function()
{
	this.x=[];
	this.y=[];
	this.amp=[];
	this.No=[];
	this.alpha;
}

dustObj.prototype.num=30;
dustObj.prototype.init=function()
{
	for(var i=0;i<this.num;i++)
	{
		this.x[i]=Math.random()*canWidth;
		this.y[i]=Math.random()*canHeight;
		this.amp[i]=50+Math.random()*50;
		this.No[i]=Math.floor(Math.random()*7);
		//这个No主要用来处理选择哪一张dust
	}
	this.alpha=0;
}
dustObj.prototype.draw=function()
{
	this.alpha+=deltaTime*0.0008; 
	var l=Math.sin(this.alpha);
	for(var i=0;i<this.num;i++)
	{
		var no=this.No[i];
		ctx1.drawImage(dustPic[no],this.x[i]+this.amp[i]*l,this.y[i]);
	}
}