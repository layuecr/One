/* 
	资源管理器
 */
var resourceHelper = {
	/* 
		加载图片
	 */
	imageLoader: function(src, callback){  
	//这里并没有定义回调函数callback，只有在调用resourceHelper.imageLoader的时候才需要指定callback是怎么样的函数
	//什么是回调函数？
	// 函数作为参数传递给另外一个函数，作为参数的时候名字可以任意，只要是函数当做参数传递的话就属于回调
		var image = new Image();
		//图片加载完成
		image.addEventListener('load', callback);
		image.addEventListener('error', function(){
			console.log('imageerror');
		});
		image.src = src;
		return image;
	},
	//根据名称返回图片对象
	getImage: function(imageName){
		return this.resources.images[imageName];
	},
	/* 
		资源加载
	 */
	load: function(resources, callback){
		var images = resources.images;
		var sounds = resources.sounds;
		var total = images.length;
		var finish = 0; //已完成的个数
		//保存加载后的图片对象和声音对象
		this.resources = {
			images: {},
			sounds: {}
		};
		var self = this;
		
		//遍历加载图片
		for(var i = 0; i < images.length; i++){
			var name = images[i].name;
			var src = images[i].src;
			
			self.resources.images[name] = self.imageLoader(src, function(){
				//加载完成
				finish++;
				if(finish == total){
					//全部加载完成
					callback(self.resources);
				}
			});
		}
		
	}
}
