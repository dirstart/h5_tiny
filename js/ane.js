var aneObj=function()
{
	//start point，control point ,end point(sin);
	//前方的两个点是不动的，最后的点 是动的
	this.rootx=[];
	//rooty已经固定了
	this.headx=[];
	this.heady=[];
	this.alpha=0;
	this.amp=[];//振幅
	//因为海葵的底部是can的高度，所以我们的底部的点是不需要定义的
	//er另外一个我们只需要将它往上移动就可以了


};

aneObj.prototype.num=50;
aneObj.prototype.init=function()
{
		for(var i=0;i<this.num;i++)
			{
				this.rootx[i]=i*17+Math.random()*20;
				this.headx[i]=this.rootx[i];
				this.heady[i]=canHeight-250+Math.random()*50;
				this.amp[i]=Math.random()*50+50;
			
			}
};
aneObj.prototype.draw=function()
{
	this.alpha+=deltaTime*0.001;
	var l=Math.sin(this.alpha);
	ctx2.save();
	ctx2.globalAlpha=0.6;
	ctx2.strokeStyle="#3b154e";
	ctx2.lineCap="round";		
	ctx2.lineWidth=20;
	// 将这些东西从循环中释放出来，因为这些东西不需要循环，可以增加效率
	for(var i=0;i<this.num;i++)
	{
		//beginPath(),moveTo(),lineTo(),strokeStyle,stroke(),lineWidth,lineCap,globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		this.headx[i]=this.rootx[i]+l*this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i],canHeight-150,this.headx[i],this.heady[i]);
		//起始点，控制点，结束点
		//决定了振幅之后根据高中的知识，我们让幅度*PI，得到长度
		ctx2.stroke();


	}
	ctx2.restore();
};