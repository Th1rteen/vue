<template>
    <div class="login">
        <div class="logo"></div>
        <div class="loginbox">
            <mt-field placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-button @click="login">登&nbsp;录</mt-button>
        </div>
        <mt-button class="reg" @click="goRegister">注&nbsp;册</mt-button>
    </div>
</template>

<script>
import router from "../views/router"
import axios from "axios"
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        goRegister(){
            router.push("/register")
        },
        login(){
            var username=this.username;
            var password=this.password;
            axios.get("http://120.78.188.228:8008/login",{
                params:{username:username,password:password}
            }).then(res=>{
                if(res.data!=0){
                    Toast({
                        message: '登录成功!'
                    });
                    // console.log(res.data[0].username)
                    sessionStorage.user=res.data[0].username;
                    setTimeout(()=>{
                        router.push("/index/jp")
                    },1000)
                }else{
                    Toast({
                        message: '登录失败!'
                    });
                }
            })
        }
    }
}
</script>

<style>

</style>
