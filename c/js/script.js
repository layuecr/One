var oBody = document.body;
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
//设置画布的宽和高
canvas.width = window.innerWidth; //IE8及更早的版本不支持innerWidth与innerHeight属性
canvas.height = window.innerHeight;
//获取画布信息
var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;

// 判断是否有 requestAnimationFrame 方法，如果有则模拟实现
window.requestAnimFrame =
window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(callback) {
    window.setTimeout(callback, 1000 / 30);
};

function bindEvent(){
	var oStart = document.querySelector(".js-start"),
		oSetting = document.querySelector(".js-setting"),
		oRule = document.querySelector(".js-rule"),
		oUiIndex = document.querySelector(".ui-index"),
		oUiRule = document.querySelector(".ui-rule"),
		oUiSetting = document.querySelector(".ui-setting"),
		oRuleKnow = document.querySelector(".ui-rule button");
		oSettingCheck = document.querySelector(".ui-setting button");
	oStart.onclick = function(){
		oUiIndex.style.display = "none";
		oUiRule.style.display = "none";
		oUiSetting.style.display = "none";
		GAME.start();
	}
	oRule.onclick = function(){
		oUiIndex.style.display = "none";
		oUiRule.style.display = "block";
		oUiSetting.style.display = "none";
	}
	oSetting.onclick = function(){
		oUiIndex.style.display = "none";
		oUiRule.style.display = "none";
		oUiSetting.style.display = "block";
	}
	oRuleKnow.onclick = function(){
		oUiIndex.style.display = "block";
		oUiRule.style.display = "none";
		oUiSetting.style.display = "none";
	}
	oSettingCheck.onclick = function(){
		oUiIndex.style.display = "block";
		oUiRule.style.display = "none";
		oUiSetting.style.display = "none";
	}	
}

	
/* 游戏对象 */
var GAME = {
	/* 游戏初始化 */   //这里面的this对象，都指的是GAME
	init: function(opts){
		//设置opts
		var opts = Object.assign({}, opts, CONFIG); //合并对象
		this.opts = opts;
		//计算飞机初始坐标
		this.planePosX = canvasWidth / 2 - opts.planeSize.width / 2;
		this.planePosY = canvasHeight - opts.planeSize.height - 50;
	},
	start: function(){
		var self = this;
		//console.log(this);
		var opts = this.opts;
		
		var images = this.images;
		//清空敌机数组对象，和分数置0
		this.enemies = [];
		this.score = 0;
		
		//随机生成大小敌机
		this.createSmallEnemyInterval = setInterval(function(){
			self.createEnemy('normal');
		},500);
		this.createBigEnemyInterval = setInterval(function(){
			self.createEnemy('big');
		},2500);
		
		//开始更新游戏
		this.update();
	},
	update: function(){
		var self = this;
		var opts = this.opts;
		//更新敌机
		this.updateElement();
		//清除画布
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		//绘制画布
		this.draw();
		//不断循环
		requestAnimFrame(function(){
			self.update(); //调用本身
		});
	},
	updateElement: function(){
		/* 更新当前所有元素的状态 */
		var opts = this.opts;
		var enemies = this.enemies;
		var enemySize = this.enemySize;
		var i = enemies.length;
		
		while(i--){
			var enemy = enemies[i];
			enemy.down();
			if(enemy.y >= canvas.height){
				this.enemies.splice(i, 1);
			}else{
				//判断飞机状态	
			}
		}
	},
	//生成敌机
	createEnemy: function(enemyType){
		var enemies = this.enemies;
		var opts = this.opts;
		var images  = this.images || {};
		
		var enemySpeed = opts.enemySpeed;
		var enemySize = opts.enemySmallSize;
		var enemyIcon = resourceHelper.getImage('smallEnemyIcon');
		var enemyBoomIcon = resourceHelper.getImage('smallBoomIcon');
		
		var enemyLive = 1; //默认生命值为1
		//大型敌机参数
		if(enemyType === 'big'){
			enemySize = opts.enemyBigSize;
			enemySpeed = enemySpeed * 0.6;
			enemyIcon = resourceHelper.getImage('bigEnemyIcon');
			enemyBoomIcon = resourceHelper.getImage('bigBoomIcon');
			enemyLive = 10;
		}
		//基本参数
		var initOpt = {
			x: Math.floor(Math.random() * (canvasWidth - enemySize.width)),
			y: -enemySize.height, //完全不显现在画布上，向下走才会显示
			enemyType: enemyType,
			live: enemyLive,
			width: enemySize.width,
			height: enemySize.height,
			speed: enemySpeed,
			icon: enemyIcon,
			boomIcon: enemyBoomIcon
		};
		//敌机数量少于设定值，则不断新增
		if(enemies.length < opts.enemyMaxNum){
			enemies.push(new Enemy(initOpt));
		}
		console.log(enemies);
	},
	end: function(){
		
	},
	draw: function(){
		this.enemies.forEach(function(enemy){
			enemy.draw();
		});
	}
};

function init(){
	resourceHelper.load(CONFIG.resources, function(resources){
		GAME.init();
		bindEvent();
	});
}

init();