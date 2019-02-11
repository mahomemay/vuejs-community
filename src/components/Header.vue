<template>
    <div class="bg">
        <div class="container clearfix">
            <div class="left pull-left">
                <router-link to="/"><img src="../assets/logo.png" alt="Logo"> Vue.js 中文社区 </router-link>
            </div>
            <div class="right pull-right">
                <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a>
                <router-link to="/about">关于</router-link>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "VHeader",
	}
</script>

<style scoped>
    .bg {
        background-color: #fff;
        border-bottom: 1px solid #eee;
        margin-bottom: 20px;
    }
    .container {
        padding: 8px 0;
    }
    .left > a {
        font-size: 28px;
        display: flex;
        align-items: center;
    }
    .left img {
        width: 45px;
        margin-right: 5px;
    }
    .right > a {
        line-height: 50px;
        color: #34495e;
        padding: 0 10px;
    }
</style>