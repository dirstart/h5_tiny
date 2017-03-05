var babyObj=function()
{
	this.x;
	this.y;
	this.angle;
	this.babyEye=new Image();
	this.babyBody=new Image();
	this.babyTail=new Image();

	this.babyTailTimer=0;
	this.babyTailCount=0;//这个变量用来控制动画执行到了哪一帧
	// console.log(this.babyTailCount);
}
babyObj.prototype.init=function()
{
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
	this.babyEye.src="./src/babyEye0.png";
	this.babyBody.src="./src/babyFade0.png";
	// this.babyTail.src="./src/babyTail0.png";
	//这句话也不用了，我们采用数组来绘制会动的尾巴
}

babyObj.prototype.draw=function()
{
	this.x=lerpDistance(big.x,this.x,0.98);
	this.y=lerpDistance(big.y,this.y,0.98);
	//让他旋转
	var dy=big.y-this.y;
	var dx=big.x-this.x;
	var ds=Math.atan2(dy,dx)+Math.PI;
	this.angle=lerpAngle(ds,this.angle,0.6);
	//babyTail count 在这里写关于它的计数工作
	this.babyTailTimer+=deltaTime;
	if(this.babyTailTimer>50)
	{
		this.babyTailCount=(1+this.babyTailCount)%8;
		//这样写是为了使babyTailCount保持在0-7之间，这样就能保证图片被正确加载
		this.babyTailTimer%=50;
		//每次帧数加一之后就对计数时间取模，使得时间计数复原
	}

	this.babyTail=babyTail[this.babyTailCount];
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	//为了做小鱼尾巴动画，我们就不直接画小鱼的尾巴了，我们采用数组来动态地绘制出小鱼的尾巴
	// ctx1.drawImage(this.babyTail,-this.babyTail.width*0.5,-this.babyTail.height*0.5);
	ctx1.drawImage(this.babyTail,-this.babyTail.width*0.5+23,-this.babyTail.height*0.5);
	ctx1.drawImage(this.babyBody,-this.babyBody.width*0.5,-this.babyBody.height*0.5);
	ctx1.drawImage(this.babyEye,-this.babyEye.width*0.5,-this.babyEye.height*0.5);
	ctx1.restore();
}