
<template>
    <div>
        <div class="sk">
            <!-- 左边 -->
            <div class="left">
                <!-- <p v-for="(val,i) in list" :key="i"> -->
                    <router-link v-for="(v,i) in list1" :key="i" :to="{name:v.name}" >
                        <span class="iii"></span>
                        <span>{{v.title}}</span>
                    </router-link>
                <!-- </p> -->
                
            </div>

            <!-- 右边 -->
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
    computed: {
        ...mapState([
            "list",
            "list1"
        ])
    },
    mounted() {
        axios.defaults.baseURL = "http://120.78.188.228:8008";
        this.getlist("/bookroom")
    },
    methods:{
        ...mapActions([
            "getlist"
        ])
    }
    };
</script>

<style>

</style>