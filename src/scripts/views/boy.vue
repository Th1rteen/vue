<template>
    <div>
        <div class="top">
            <a v-for="(l,i) in booklist1" :key="i">
                <img :src="l.img" alt="">
            </a>
        </div>
        <div class="down">
            <div class="onebook" v-for="(l,i) in booklist2" :key="i">
                <img :src="l.img" alt="">
                <p>{{l.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { Toast } from 'mint-ui';
export default {
    computed: {
        ...mapState([
            "booklist",
            "booklist1",
            "booklist2"
        ])
    },
    mounted() {
        // axios.defaults.baseURL = "http://120.78.188.228:8008";
        this.getlist(),
        this.getlist1(),
        this.getlist2(),
        Toast({
            message: '加载中',
            position: 'middle',
            duration: 500
        });
    },
    methods:{
        ...mapActions([
            "getlist",
            "getlist1",
            "getlist2"
        ])
    }
    };
</script>

<style>

</style>
