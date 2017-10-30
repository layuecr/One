window.onload = function(){
	
}
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
		console.log("?");
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