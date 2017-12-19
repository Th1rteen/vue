<template>
    <div>
        <div class="top">
            <a v-for="(l,i) in booklist[1].list[0].item" :key="i">
                <img :src="l.img" alt="">
            </a>
        </div>
        <div class="down">
            <div class="onebook" v-for="(l,i) in booklist[1].list[1].item" :key="i">
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
            "booklist"
        ])
    },
    mounted() {
        this.getlist("http://120.78.188.228:8008/bookroom"),
        Toast({
            message: '加载中',
            position: 'middle',
            duration: 500
        });
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
