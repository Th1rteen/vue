<template>
    <div class="wrap">
        <!-- 底部 -->
        <div class="nav" v-for="(n,i) in navlist" :key="i">
            <router-link :to="{name:n.name}">
                <i class="iconfont" v-html="n.icon"></i>
                <span>{{n.title}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed:mapState([
        "navlist"
    ])
}
</script>

<style>
    
</style>
