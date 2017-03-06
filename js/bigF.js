var bigObj=function()
{
	this.x;
	this.y;
	this.angle;
	this.bigEye=new Image();
	this.bigBody=new Image();
	this.bigTail=new Image();

	this.bigTailTimer=0;
	this.bigTailCount=0;

	this.bigEyeTimer=0;
	this.bigEyeCount=0;
	this.bigEyeInterval=1000;

	this.bigbodyTimer=0;
	this.bigBodyCount=0;

}

bigObj.prototype.init=function()
{
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
	//this.bigEye.src="./src/bigEye0.png";
	//this.bigBody.src="./src/bigSwim0.png";
	// this.bigTail.src="./src/bigTail0.png";
}

bigObj.prototype.draw=function()
{
	//lerp x,y意思就是使一个值趋向于一个值
	this.x=lerpDistance(mx,this.x,0.98);
	this.y=lerpDistance(my,this.y,0.98);

	//下面我们要让大鱼能够开始转动，我们采用atan2获取旋转的角度，之后采用趋近的方式
	var deltaY=my-this.y;
	var deltaX=mx-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta,this.angle,0.6); 

	this.bigTailTimer+=deltaTime;
	if(this.bigTailTimer>50)
	{
		this.bigTailCount=(1+this.bigTailCount)%8;
		this.bigTailTimer=this.bigTailTimer%50;
	}
	this.bigEyeTimer+=deltaTime;
	if(this.bigEyeTimer>this.bigEyeInterval)
	{
		this.bigEyeCount=(1+this.bigEyeCount)%2;
		this.bigEyeTimer=this.bigEyeTimer%this.bigEyeInterval;
		if(this.bigEyeCount==0)
		{
			this.bigEyeInterval=Math.random()*2000+1000;
		}
		else
		{
			this.bigEyeInterval=300;
		}
	}

	this.bigTail=bigTail[this.bigTailCount];
	this.bigEye=bigEye[this.bigEyeCount];
	if(data.double==1)
	{
		this.bigBody=bigBodyOrange[this.bigBodyCount];
	}
	else
	{
		this.bigBody=bigBodyBlue[this.bigBodyCount];
	}

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5);
	ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
	ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
	

	ctx1.restore();
}