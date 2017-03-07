//该文件用来检测大鱼和果实碰撞及执行相关操作

function bigFruitsCollision()
{
	//首先要判断1.是否gameOver2.果实是否是alive状态
	if(!data.gameOver)
	{
		for(var i=0;i<fruit.num;i++)
		{
			if(fruit.alive[i])
			{
				//如果果实活着，则判断距离  calculate length
				//调用API获得距离的平方，其实这个很简单，可以自己写哈哈
				//我们常常可以自己先写一系列的要用的数学性质的函数，最后到其他的对象中调用
				var l=calLength2(fruit.x[i],fruit.y[i],big.x,big.y);
				if(l<900)
				{
					//果实被吃掉
					fruit.dead(i);
					data.fruitNum++;
					big.bigBodyCount++;
					if(big.bigBodyCount>7)
					{
						big.bigBodyCount=7;
					}
					if(fruit.fruitType[i]=="blue")//blue
					{
						data.double=2;
					}
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}	
	}
	
}

function bigBabyCollision()
{
	if(data.fruitNum>0 && !data.gameOver)
	{
		var l=calLength2(big.x,big.y,baby.x,baby.y);
		if(l<900)
		{
			//baby recover by feeding
			baby.babyBodyCount=0;
			data.addScore();
			data.reset();
			//draw halo
			halo.born(baby.x,baby.y);	
		}	
	}
	
}