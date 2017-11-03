/* 
	子类enemy射击对象
 */

var Enemy = function(opts){
	this.opts = opts || {};
	//调用父类方法
	Element.call(this, opts);
	
	//自己独有的属性和方法
	this.status = "normal";  //可为normal, booming, boomed.boomed为已经被消灭了的状态
	this.icon = opts.icon;
	this.live = opts.live;  //生命值
	this.type = opts.type;
}

//继承Element属性
Enemy.prototype = new Element();

//down方法，向下移动
Enemy.prototype.down = function(){
	this.move(0, this.speed); //因为X轴不需要变化，所以传入一个0
};

Enemy.prototype.draw = function(){
	context.fillRect(this.x, this.y, this.width, this.height);
}