<template>
    <div class="wd">
        <div class="wtop">
            <div class="photo"></div>
            <p>{{user}}</p>
        </div>
        <ul class="menu">
            <li v-for="(m,i) in my" :key="i" :class="'my'+i">
                <router-link to="#">
                    <i class="iconfont" v-html="m.icon"></i>
                    <span>{{m.title}}</span>
                </router-link>
            </li>
        </ul>
        <button @click="quit">退出登录</button>
    </div>
</template>

<script>
import {mapState} from "vuex"
import {mapActions} from "vuex"
import router from "./router"
export default {
    computed:{
        ...mapState([
            "my",
            "user",
        ])
    },
    mounted(){
        this.getName(sessionStorage.user)
    },
    methods:{
        ...mapActions([
            "getName"
        ]),
        quit(){
            sessionStorage.clear()
            router.push("/login")
        }
    }
}
</script>

<style>

</style>
