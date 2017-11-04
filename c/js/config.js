/* 
 游戏相关配置
*/

var CONFIG = {
	planeSize: { //飞机大小
		width: 60,
		height: 45
	},
	planeType: 'bluePlaneIcon', //默认飞机类型为蓝色战机
	bulletSpeed: 10, //默认子弹移动速度
	bulletSize: { //子弹大小
		width: 20,
		height: 20
	},
	enemySpeed: 4, //敌机默认移动距离
	enemyMaxNum: 5, //最大的敌机数量
	enemySmallSize: { //最小的敌机尺寸
		width: 54,
		height: 40
	},
	enemyBigSize: { //大敌机的尺寸
		width: 130,
		height: 100
	},
	resources: {
		images: [
		  { 
			src: "./images/plane_1.png",
		    name: "bluePlaneIcon"
		  },
		  {
			src: "./images/plane_2.png",
			name: "pinkPlaneIcon"
		  },
		  {
			src: "./images/fire.png",
			name: "fireIcon"
		  },
		  {
			src: "./images/boom_big.png",
			name: "bigBoomIcon"
		  },
		  {
			src: "./images/boom_small.png",
			name: "smallBoomIcon"
		  },
		  {
			src: "./images/enemy_big.png",
			name: "bigEnemyIcon"
		  },
		  {
			src: "./images/enemy_small.png",
			name: "smallEnemyIcon"
		  }
		],
		sounds: [
		  {
			src: "./sounds/button.mp3",
			name: "buttonSound"
		  },
		  {
			src: "./sounds/biubiubiu.mp3",
			name: "shootSound"
		  },
		  {
			src: "./sounds/boom.mp3",
			name: "boomSound.mp3"
		  },
		  {
			src: "./sounds/die.mpp3",
			name: "dieSound.mp3"
		  },
		  {
			src: "./sounds/music.mp3",
			name: "gameSound.mp3"
		  }
		]
	}
}