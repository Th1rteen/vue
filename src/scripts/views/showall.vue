<template>
    <div>
        <v-head></v-head>
        <router-view class="view"></router-view>
        <v-foot></v-foot>
    </div>
</template>

<script>
import Head from "../components/head.vue"
import Foot from "../components/foot.vue"
export default {
    components:{
        "v-foot":Foot,
        "v-head":Head
    }
}
</script>

<style>

</style>
