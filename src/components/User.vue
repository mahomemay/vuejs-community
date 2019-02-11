<template>
    <div class="container">
        <div class="header">
            <img :src="userdata.avatar_url" alt="">
            <div>
                <h3>{{ userdata.loginname }}</h3>
                <p> 这家伙很懒，什么个性签名都没有留下。</p>
            </div>
        </div>
        <p class="text-center">注册时间：{{ userdata.create_at | dateTime }} | 积分：{{ userdata.score }}</p>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>最近创建的话题</span>
            </div>
            <div v-for="(item, index) in userdata.recent_topics" :key="index">
                <img :src="item.author.avatar_url" alt="">
                <router-link :to="'/topic/' + item.id">{{ item.title}} <span class="pull-right">{{ item.last_reply_at | dateTime }}</span></router-link>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>最近参与的话题</span>
            </div>
            <div v-for="(item, index) in userdata.recent_replies" :key="index">
                <img :src="item.author.avatar_url" alt="">
                <router-link :to="'/topic/' + item.id">{{ item.title}} <span class="pull-right">{{ item.last_reply_at | dateTime }}</span></router-link>
            </div>
        </el-card>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
	export default {
		name: "User",
        computed: {
            ...mapState(['user'])
        },
        data(){
			return {
				userdata: {
					loginname: '',
					avatar_url: '',
					create_at: '',
					score: 0,
					recent_topics: [],
					recent_replies: [],
					collect_topics: [],
                },
				activeName: '1',
            }
        },
        created(){
			this.$store.dispatch('getUser', this.$route.params.name)
        },
        watch: {
			user(){
				this.userdata = this.user
            }
        }
	}
</script>

<style scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 0 15px;
    }
    .header > img {
        width: 54px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;
    }
    .header * {
        margin: 0;
        padding: 0;
        line-height: 30px;
    }
    .header p {
        color: #999;
    }
    .el-card {
        margin-top: 30px;
    }
    .el-card__body > div {
        padding: 8px 0;
    }
    .el-card__body > div > img {
        width: 45px;
        border-radius: 8px;
        margin-right: 15px;
    }
    .el-card__body > div span {
        color: #999;
    }
</style>