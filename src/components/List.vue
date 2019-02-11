<template>
    <ul>
        <li class="clearfix" v-for="(item, index) in articleList" :key="index">
            <router-link class="user_avatar pull-left" :to="'/user/' + item.author.loginname">
                <img :src="item.author.avatar_url" :title="item.author.loginname">
            </router-link>
            <p class="topic_title_wrapper pull-left">
                <el-tag type="success" v-if="item.top">置顶</el-tag>
                <el-tag type="success" v-if="item.good">精华</el-tag>
                <el-tag>{{ item.tab | tagType }}</el-tag>
                <router-link class="topic_title" :to="'/topic/' + item.id" :title="item.title">{{ item.title }}</router-link>
            </p>
            <p class="pull-right">
                <span class="num">
                    <el-tooltip class="item" effect="dark" content="回复数" placement="bottom-start">
                        <span>{{ item.reply_count }}</span>
                    </el-tooltip>
                    /
                    <el-tooltip class="item" effect="dark" content="点击数" placement="bottom-start">
                        <span>{{ item.visit_count }} </span>
                    </el-tooltip>
                </span>
                <span class="last_date pull-right">{{ item.last_reply_at | dateTime }}</span>
            </p>
        </li>
    </ul>
</template>

<script>
    import { mapState } from 'vuex'
	export default {
		name: "VList",
        computed: {
            ...mapState(['articleList']),
        },
        mounted(){
			this.$store.dispatch('getDataByType', 'all')
        },
	}
</script>

<style scoped>
    li {
        line-height: 40px;
        padding: 10px 0;
    }
    li > .user_avatar {
        height: 40px;
        border-radius: 5px;
        overflow: hidden;
        margin-right: 15px;
    }
    li > .user_avatar > img {
        width: 40px;
    }
    li .reply_count {
        color: #999;
    }
    .el-tag {
        margin-right: 10px;
        height: 28px;
        line-height: 26px;
    }
    .num {
        color: #999;
        margin-right: 15px;
    }
    p.topic_title_wrapper {
        max-width: 830px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .last_date {
        color: #666;
    }
</style>