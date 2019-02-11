<template>
    <div class="container">
        <div class="content">
            <h1>
                <el-tag type="success" v-if="page.top">置顶</el-tag>
                <el-tag type="success" v-if="page.good">精选</el-tag>
                <el-tag>{{ page.tab | tagType }}</el-tag>
                {{ page.title }}
            </h1>
            <p>
                <span>作者：{{ pagedata.author.loginname }}</span> |
                <span>发布时间：{{ pagedata.create_at | dateTime }}</span> |
                <span>共有 {{ pagedata.visit_count }} 次浏览</span>
            </p>
            <hr>
            <div v-html="pagedata.content"></div>
        </div>
        <div class="comment">
            <h1>评论</h1>
            <hr>
            <div class="media" v-for="(item, index) in pagedata.replies" :key="index"  v-if="commentList">
                <div class="media-left media-top">
                    <img :src="item.author.avatar_url" class="media-object" style="width:50px">
                </div>
                <div class="media-body">
                    <h5 class="media-heading">{{ item.author.loginname }} <span class="pull-right">{{ item.create_at | dateTime }}</span></h5>
                    <div v-html="item.content"></div>
                </div>
            </div>
            <div class="text-center" v-if="!commentList">该主题暂无评论</div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
	export default {
        name: "Topic",
		computed: {
			...mapState(['page']),
			commentList(){
				if(this.pagedata.replies.length === 0) {
					return false
                } else {
					return true
                }
			}
		},
        data(){
			return {
                pagedata: {
					author: { loginname: '' },
					create_at: '',
					visit_count: '',
					content: '',
					replies: [
						{
							id: '',
							author: {
								loginname: '',
								avatar_url: ''
							},
							content: '',
							ups: [],
							create_at: ''
						}
					]
                },
                // flag: true
            }
        },
        created(){
        	this.$store.dispatch('getDataById', this.$route.params.id)
        },
        watch: {
			page(val, oldVal) {
                this.pagedata = this.page
			}
        }
	}
</script>

<style>
    .content > h1 {
        display: flex;
        align-items: center;
    }
    .content > p {
        color: #999;
    }
    .content > div {
        line-height: 30px;
    }
    .content > div li {
        color: #666;
    }
    .content > div a {
        color: #42b983;
        margin: 0 5px;
    }
    .el-tag {
        margin-right: 10px;
    }
    .media-body > div {
        font-size: 18px;
    }
</style>