var oBody = document.body;
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
//设置画布的宽和高
canvas.width = window.innerWidth; //IE8及更早的版本不支持innerWidth与innerHeight属性
canvas.height = window.innerHeight;
//获取画布信息
var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;


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
	/* 游戏初始化 */
	init: function(opts){
		//设置opts
		var opts = Object.assign({}, opts, CONFIG); //合并对象
		this.opts = opts;
		
		//计算飞机初始坐标
		this.planePosX = canvasWidth / 2 - opts.planeSize.width / 2;
		this.planePosY = canvasHeight - opts.planeSize.height - 50;
	},
	start: function(){
		
	},
	update: function(){
		
	},
	end: function(){
		
	},
	draw: function(){
		
	}
};

function init(){
	GAME.init();
	bindEvent();
}


init();