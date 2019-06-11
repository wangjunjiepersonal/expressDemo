<template>
  <div class="about">
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="140">
      </el-table-column>
      <el-table-column prop="body" label="内容" width="220">
      </el-table-column>
      <el-table-column label="操作">
	      <template slot-scope="scope">
	        <el-button
	          size="mini"
	          @click="handleEdit(scope.row._id)">编辑</el-button>
	        <el-button
	          size="mini"
	          type="danger"
	          @click="handleDelete(scope.row._id)">删除</el-button>
	      </template>
	    </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
  
      return {
        articles:[]
      }
    },
    created(){
    	this.getAjax()
    },
    methods:{
    	handleEdit(id){
    		this.$router.push(`/articles/edit/${id}`)
    	},
    	handleDelete(id){
    		this.$http.delete(`article/${id}`).then((res) => {
    			this.$message({
	          message: '文章删除成功',
	          type: 'success'
	        })
    			this.getAjax()
    		})
    	},
    	getAjax(){
    		this.$http.get('/articles').then((res) => {
    		this.articles = res.data
    	})
    	}
    }
  };
</script>
