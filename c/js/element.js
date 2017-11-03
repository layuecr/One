/* 
	父类
 */
var Element = function(opts){
	var opts = opts || {};
	//设置坐标和尺寸
	this.x = opts.x;
	this.y = opts.y;
	this.width = opts.width;
	this.height = opts.height;
	this.speed = opts.speed;
};

//子弹原型对象

Element.prototype = {
	//重定义原型对象
	//原型方法move
	move: function(x, y){
		var addX = x || 0;
		var addY = y || 0;
		this.x += x;
		this.y += y; //+y是为了保持	一个速度运动下去
	}
	/* 
	  这个draw方法没什么用
	 */
	 // draw: function(){
		
	 // }
};
