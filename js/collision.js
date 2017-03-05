//该文件用来检测大鱼和果实碰撞及执行相关操作

function bigFruitsCollision()
{
	//首先要判断果实是否是alive状态
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
			}
		}
	}
}