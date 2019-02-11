<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>关于本项目</span>
                <a class="pull-right" href="https://www.vue-js.com/">瞅一眼官方网站</a>
            </div>
            <div class="text item">
                <h3 class="text-center">
                    <p>本项目使用 Vue-js 社区官方 API 进行编写，部分功能由于 API 开放问题没有实现，请大家见谅！</p>
                    <p>本项目仅作练习使用，如有任何问题，请联系我进行处理</p>
                </h3>
                <p>Vue 中文社区是全球最大的 Vueframework 中文开源技术社区，致力于 Vue 在中国的学习、推广、研究工作。</p>
                <p>Vue 中文社区正在努力建设中，如果你有什么想法，欢迎吐槽。</p>
                <a href="http://shang.qq.com/wpa/qunwpa?idkey=0c8c6d34109e05094d65da1fb12070bd7f4f7b94fb3ecd61fa2c8a652a4e8594" target="_blank">加入 QQ 群</a>
                <p>尽管建了QQ群，但是还是希望大家尽量有问题在社区讨论，这样才可以有一些沉淀和积累，不至于每天都有人在问同样的问题，通过对问题的总结和用文字表达的过程，自己也可以对知识进行一个梳理。</p>
            </div>
        </el-card>
    </div>
</template>

<script>
	export default {
		name: "About"
	}
</script>

<style scoped>
    h3 {
        margin-bottom: 30px;
    }
    div > a {
        color: #42b983;
    }
    p {
        line-height: 30px;
    }
</style>