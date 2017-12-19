<template>
    <div class="jp">
        <div class="jtop" v-for="(n,i) in book1" :key="i">
            <h1><span class="jpicon"></span><p><b>{{n.name}}</b></p></h1>
            <img :src="n.img" alt="">
        </div>
        <div class="tit">
            <a v-for="(n,i) in tit" :key="i">
                <div class="iconbox">
                    <div :class="'lj'+i">
                        <i class="iconfont" v-html="n.icon"></i>
                    </div>
                </div>
                <span>{{n.title}}</span>
            </a>
        </div>

        <div class="box1" v-for="(n,i) in book" v-if="i>1" :key="i">
            <h1><span class="jpicon"></span><p>{{n.name}}</p></h1>
            <div>
                <router-link v-for="(val,id) in book[i].list" :key="id" :to="{name:'detail',params:{id:val.bookid}}">
                    <dl>
                        <dt><img v-lazy="val.cover" alt=""></dt>
                        <dd><p>{{val.newBookName}}</p></dd>
                    </dl>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
import {mapState} from "vuex"
import {mapActions} from "vuex"
import axios from "axios"
import { Lazyload } from 'mint-ui';
export default {
    computed:{
        ...mapState([
            "book",
            "tit",
            "book1"
        ])
    },
    methods:{
        ...mapActions([
            "getbook",
            "getbook1"
        ])
    },
    mounted(){
        axios.defaults.baseURL = "http://120.78.188.228:8008";
        this.getbook("/book")
        this.getbook1("/book")
    }
}
</script>

<style>

</style>
