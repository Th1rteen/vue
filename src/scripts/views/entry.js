import router  from "./router";
import Vue from "vue";
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import vueResource from "vue-resource";
Vue.use(vueResource);

import store from "../vuex/store"


import MintUI from "mint-ui";
import 'mint-ui/lib/style.css'
Vue.use(MintUI);   //  全局使用


var vm=new Vue({
    el:"#app",
    data:{
        transitionName:"slide-right"
    },
    router,
    store,
    watch:{
        "$route":function(to,from){
            // console.log(from);
            // console.log(to);

            if(from.name=="jp"&&to.name=="detail"){
                this.transitionName="slide-right"
            }
            if(to.name=="jp"&&from.name=="detail"){
                this.transitionName="slide-left"
            }
            if(from.name=="wd"){
                this.transitionName="";
            }


            // var toLength = to.path.split("/").length;
            // var fromLength = from.path.split("/").length;
            // this.transitionName = toLength>fromLength?"slide-left":"slide-right";
        }
    }
})