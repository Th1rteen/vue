<template>
  <div>
      <div id="sj">
          <div class="all">
              <dl v-for="(v,i) in shelf" :key="i">
                <dt>
                  <img :src="v.img" alt="">
                </dt>
                <dd>
                  <p>{{v.bookname}}</p>
                  <button @click="del(v.bookname)">移除</button>
                </dd>
              </dl>
          </div>
          <img src="../../assets/img/none.jpg" class="pic" @click="gogo">
      </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import {mapActions} from "vuex"
import router from "./router"
import { MessageBox } from 'mint-ui';
import axios from "axios"

export default {
    computed:{
        ...mapState([
            "shelf"
        ])
    },
    methods:{
        ...mapActions([
            "getshelf"
        ]),
        gogo(){
          router.push("./sk")
        },
        del(arg){
            console.log(arg)
            var user=sessionStorage.user
            var bname=arg
            axios.defaults.baseURL = "http://120.78.188.228:8008";
            axios.get("/del",{
                params:{
                    user:user,
                    bname:bname
                }
            }).then(res=>{
                if(res.data==0){
                    MessageBox('提示', '移除成功');
                    location.reload();
                }else{
                    MessageBox('提示', '移除失败');
                }
            })
        }
    },
    mounted(){
        var user=sessionStorage.user
        this.getshelf(user)

        
    },
    updated(){
      if (this.shelf=="") {
          MessageBox('提示', '没书了，快去添加吧！');
        }
    }
}
</script>

<style>

</style>
