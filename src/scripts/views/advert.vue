<template>
    <div class="section">
        <div class="bg" @click="skip"></div>
        <!-- <img :src="src" alt=""> -->
    </div>
</template>

<script>
import router from "./router"
import {mapState} from "vuex"
export default {
    computed:mapState({
        m:"msg",
        src:"src"
    }),
    methods:{
        skip(){
            router.push("/login")
        }
    }
}
</script>

<style scoped>
    .bg{
        width: 100%;
        height: 100%;
        background: url("../../assets/img/advert.jpg");
        background-size: 100% 100%;
    }
</style>
