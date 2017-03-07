var waveObj=function()
{
	this.x=[];
	this.y=[];
	//圆心x和y
	this.alive=[];
	//圆的半径
	this.r=[];
}
//关于canvas arc的API
//(圆心x，圆心y，圆半径r，起始角，结束角)
waveObj.prototype.num=10;
waveObj.prototype.init=function()
{
	for(var i=0;i<this.num;i++)
	{
		this.alive[i]=false;
		this.r[i]=0;
	}
}
waveObj.prototype.draw=function()
{
	ctx1.save();
	ctx1.lineWidth=2;
	ctx1.shadowBlur=10;
	ctx1.shadowColor="white";
	for(var i=0;i<this.num;i++)
	{
	 	if(this.alive[i])
	 	{
	 		//api
	 		this.r[i]+=deltaTime*0.05;
	 		if(this.r[i]>100)
	 		{
	 			this.alive[i]=false;
	 			break;
	 		}//这样正好，随着圆圈的变大，它也直接消失
	 		//像人的一生呢
	 		//接下来绘制荡漾的透明度和颜色，因为半径和颜色反比
	 		var alpha=1-this.r[i]/100;
	 		//alpha只要不是[0,1]之间的话，其他的任何值都是不透明的状态
	 		ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
	 		ctx1.beginPath();
	 		ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
	 		ctx1.closePath();
	 		ctx1.stroke();


	 	}	
	}
	ctx1.restore();
	//
}
waveObj.prototype.born=function(x,y)
{
	for(var i=0;i<this.num;i++)
	{
		if(!this.alive[i])
		{
			this.alive[i]=true;
			this.r[i]=10;
			this.x[i]=x;
			this.y[i]=y;
			return;
			//born
		}
	}
}