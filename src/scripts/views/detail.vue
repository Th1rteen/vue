<template>
    <div class="detail">
        <div class="head">
            <span @click="goback">&lt;</span>
            <h1>详情页</h1>
        </div>

        <div class="main">
            <dl>
                <dt>
                    <img :src="fbook.cover" alt="">
                </dt>
                <dd>
                    <p class="p1">{{fbook.newBookName}}</p>
                    <p class="p2">{{fbook.authorName}}</p>
                    <p class="p3">{{fbook.wordCount}}</p>
                </dd>
            </dl>
        </div>

        <div class="btngroup">
            <button class="btn btn1">在线阅读</button>
            <button class="btn btn2" @click="addbook">添加书架</button>
        </div>

        <div class="introduce">
            <p>{{fbook.intro}}</p>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
import {mapActions} from "vuex"
import router from "./router"
import axios from "axios"
import { MessageBox } from 'mint-ui';
export default {
    // data(){
    //     return{
    //         fbook:""
    //     }
    // },
    computed:{
        ...mapState([
            "fbook"
        ])
    },
    methods:{
        ...mapActions([
            "findBook"
        ]),
        goback(){
            router.go(-1);
        },
        addbook(){
            axios.defaults.baseURL = "http://120.78.188.228:8008";
            var user=sessionStorage.user
            var id = this.$route.params.id;
            axios.get("/addbook",{
                params:{
                    user:user,
                    id:id
                }
            }).then(res=>{
                if(res.data==0){
                    MessageBox('提示', '已添加至书架');
                }else if(res.data==1){
                    MessageBox('提示', '书架中已存在');
                }else{
                    MessageBox('提示', '添加失败');
                }
            })
        }
    },
    mounted(){
        var id = this.$route.params.id;
        // console.log(id)
        // this.$http.get("http://120.78.188.228:8008/findbook",{
        //     params:{
        //         id
        //     }
        // }).then(res=>{
        //     this.fbook =res.body;
        //     console.log(this.fbook+"===========");
        // })


        this.findBook(id)
    }
}
</script>

<style>

</style>
