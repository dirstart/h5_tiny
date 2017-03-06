var can1;
var can2;
var ctx1;
var ctx2;
var lastTime;
var deltaTime;
var bgPic=new Image();
var canWidth;
var canHeight;

var ane;
var fruit;
var big;
var mx;
var my;
var baby;
var babyTail=[];
var bigTail=[];
var babyEye=[];
var bigEye=[];
var babyBody=[];
var bigBodyBlue=[];
var bigBodyOrange=[];
var wave;

var data;
document.body.onload=game;

function game()
{
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}
function init()
{
	//获得canvas context
	can1=document.getElementById("canvas1");//fishes,dust,UI,circle
	ctx1=can1.getContext('2d');
	can2=document.getElementById("canvas2");//background,ane,fruits
	ctx2=can2.getContext('2d');

	can1.addEventListener('mousemove',onMouseMove,false);

	bgPic.src="./src/background.jpg";
	canWidth=can1.width;
	canHeight=can1.height;

	ane=new aneObj();
	ane.init();
	fruit=new fruitObj();
	fruit.init();
	big=new bigObj();
	big.init();

	baby=new babyObj();
	baby.init();

	mx=canWidth*0.5;
	my=canHeight*0.5;

	for(var i=0;i<8;i++)
	{
		babyTail[i]=new Image();
		babyTail[i].src="./src/babyTail"+i+".png";
	}
	// for(var i=0;i<8;i++)
	// {
	// 	bigTail[i]=new Image();
	// 	bigTail[i].src="./src/bigTail"+i+".png";
	// }
	for(var a=0;a<8;a++)
	{
		bigTail[a]=new Image();
		bigTail[a].src="./src/bigTail"+a+".png";
		// console.log(a);
	}
	for(var b=0;b<2;b++)
	{
		bigEye[b]=new Image();
		bigEye[b].src="./src/bigEye"+b+".png";
	}
	for(var j=0;j<2;j++)
	{
		babyEye[j]=new Image();
		babyEye[j].src="./src/babyEye"+j+".png";
	}
	for(var k=0;k<20;k++)
	{
		babyBody[k]=new Image();
		babyBody[k].src="./src/babyFade"+k+".png";
	}

	data=new dataObj();
	for(var m=0;m<8;m++)
	{
		bigBodyOrange[m]=new Image();
		bigBodyOrange[m].src="./src/bigSwim"+m+".png";
		bigBodyBlue[m]=new Image();
		bigBodyBlue[m].src="./src/bigSwimBlue"+m+".png";
	}
	ctx1.font="30px 微软雅黑";
	ctx1.textAlign="center";

}
function  gameloop()
{
	requestAnimFrame(gameloop);//相对于setInterval,setTimerout更科学
	// 根据机器性能来确定间隔多长时间，这是个智能计算的东西
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	// console.log(deltaTime);

	if(deltaTime>40)deltaTime=40;

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);
	big.draw();

	baby.draw();

	bigFruitsCollision();
	bigBabyCollision();

	data.draw();

}
function onMouseMove(e)
{
	if(!data.gameOver)
	{
		if(e.offsetX||e.layerX)
		{
			mx=e.offsetX==undefined?e.layerX:e.offsetX;
			my=e.offsetY==undefined?e.layerY:e.offsetY;
		}		
	}
	
}