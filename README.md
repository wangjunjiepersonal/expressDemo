
##	Element UI + NodeJs(Express)全栈开发后台管理界面
	
	项目技术栈
		vue-cli3.0
		Element UI
		NodeJs(Express)
	
	起步
		安装vue-cli3.0
		安装Element UI
			通过Element UI组件渲染后台基本样式功能 如果通过标签进行跳转  
			直接在el-menu标签上添加router  router会通过子标签自身的索引index的值进行跳转   等于是router-link的封装
		实现基本的路由配置  分为列表页ListArticle.vue和添加页CreateArticle.vue
			在ListArticle.vue中通过Element UI自带的 Container 布局容器 实现文章的列表渲染
			在CreateArticle.vue中通过Element UI自带的	Form 表单实现文章的修改 通过vue-model获取相应的表单提交数据 暂不使用富文本
		实现后端接口
			在vue-cli3.0项目中 创建server服务端文件夹   一般来说两个文件是互相分开的  这里写到一起为了方便
			安装express mongoose cors 插件 cors用来允许其他域访问后台接口
				注意点
					express获取post提交的数据要通过req.body  需要在创建express实例后  通过
					通过cors允许跨域请求 app.use(require('cors')())
					创建mongoose接口时 要写三个参数对象
						useNewUrlParser: true,
						useFindAndModify:true,
						useCreateIndex:true
						
		请求接口
			请求文章列表接口		app.get('/api/articles')
			请求文章详情接口		app.get('/api/articles/:id')
			创建提交文章接口		app.post('/api/articles')
			修改提交文章接口		app.put('/api/articles/:id')
			删除一篇文章接口		app.delete('/api/articles/:id')
			
		继续了解和使用Element Ui	 和bootstrap一样方便实用




































































