var dataObj=function()
{
	this.fruitNum=0;
	this.double=1;
	//是否吃到了蓝色的果实，以上可以用来计分
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
}
dataObj.prototype.reset=function()
{
	this.fruitNum=0;
	this.double=1;
	big.bigBodyCount=0;
}
dataObj.prototype.draw=function()
{
	var w=can1.width;
	var h=can1.height;

	// ctx1.fillStyle="white";
	// ctx1.fillText("num:"+this.fruitNum,w*0.5,h-50);
	// ctx1.fillText("double:"+this.double,w*0.5,h-80);
	ctx1.save();
	ctx1.shadowBlur=10;
	ctx1.shadowColor="purple";
	ctx1.fillStyle="white";

	ctx1.fillText("num:"+this.fruitNum,w*0.5,h-50);
	ctx1.fillText("double:"+this.double,w*0.5,h-80);
	ctx1.fillText("score:"+this.score,w*0.5,h-110);

	ctx1.restore();

	if(this.gameOver)
	{
		this.alpha+=deltaTime*0.005;
		if(this.alpha>1)
		{
			alpha=1;
		}
		ctx1.fillStyle="rgba(255,255,255,"+alpha+")";
		ctx1.fillText("GameOver",w*0.5,h*0.5);
	}

}

dataObj.prototype.addScore=function()
{
	this.score+=this.fruitNum*100*this.double;
	this.fruitNum=0;
	this.double=1;
	//score update when collision
}