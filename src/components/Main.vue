<template>
    <div class="container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="all"></el-tab-pane>
            <el-tab-pane label="精华" name="good"></el-tab-pane>
            <el-tab-pane label="weex" name="weex"></el-tab-pane>
            <el-tab-pane label="分享" name="share"></el-tab-pane>
            <el-tab-pane label="问答" name="ask"></el-tab-pane>
            <el-tab-pane label="招聘" name="job"></el-tab-pane>
        </el-tabs>
        <v-list></v-list>
        <p class="text-center">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    layout="prev, pager, next, jumper"
                    :page-count="pages">
            </el-pagination>
        </p>
    </div>
</template>

<script>
    import VList from './List.vue'
	export default {
		name: "VMain",
        data(){
			return {
				activeName: 'all',
				currentPage: 1,
            }
        },
		methods: {
			handleClick(tab) {
				this.$store.dispatch('getDataByType', tab.$options.propsData.name)
			},
			handleCurrentChange(val) {
				this.$store.dispatch('getDataByPage', this.currentPage)
			}
		},
        components: {
			VList
        },
        computed: {
			pages(){
				if(this.$store.state.articleList.length < 20){
					return 1
				} else {
					return 20
                }
            }
        }
	}
</script>

<style scoped>

</style>