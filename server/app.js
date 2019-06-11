
const express = require('express')
const mongoose = require('mongoose')

//实例化express
const app = express()

//识别post请求参数
app.use(express.json())

//允许跨域
app.use(require('cors')())

//链接mongodb数据库
mongoose.connect('mongodb://localhost:27017/elementadmin', {
	useNewUrlParser: true,
	useFindAndModify:true,
	useCreateIndex:true
});

//创建mongodb集合
const Article = mongoose.model('Article',new mongoose.Schema({
	title:{type:String},
	body:{type:String},
}))


//请求首页
app.get('/', async (req,res) => {
	res.send('index')
})

//请求文章
app.get('/api/articles', async (req,res) => {
	const article = await Article.find()
	res.send(article)
})

//文章详情接口
app.get('/api/article/:id', async (req,res) => {
	const article = await Article.findById(req.params.id)
	res.send(article)
})

//提交文章
app.post('/api/articles', async (req,res) => {
	const article = await Article.create(req.body)
	res.send({
		error:0
	})
})

//修改文章
app.put('/api/articles/:id', async (req,res) => {
	const article = await Article.findByIdAndUpdate(req.params.id,req.body)
	res.send({
		error:0
	})
})

//删除文章
app.delete('/api/article/:id',async (req,res) => {
	await Article.findByIdAndDelete(req.params.id)
	res.send({
		error:0 
	})
})

//开启端口
app.listen(3000,() => {
	console.log('服务器已经启动')
})





















