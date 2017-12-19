<template>
    <div class="login">
        <div class="logo"></div>
        <div class="loginbox">
            <mt-field placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-button @click="register">注&nbsp;册</mt-button>
        </div>
        <mt-button class="reg" @click="goLogin">登&nbsp;录</mt-button>
    </div>
</template>

<script>
import router from "../views/router"
import axios from "axios"
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        goLogin(){
            router.push("/login")
        },
        register(){
            var istrue = true;
            var username=this.username;
            var password=this.password;
            if(username.length==0){
                MessageBox('提示', '用户名不能为空');
                istrue = false;
            }
            else if(!/^[0-9a-zA-Z\u4e00-\u9fa5_]{6,16}$/.test(username)){
                MessageBox('提示', '用户名必须为6-20位的数字、字母、汉字、_!');
                istrue = false;
            }
            else if(password.length<6 || password.length>16){
                MessageBox('提示', '密码不能小于6位或大于16位!');
                istrue = false;
            }
            else if(!/^[a-zA-Z\d_]{6,16}$/.test(password)){
                MessageBox('提示', '密码只能由字母数字下划线组成!');
                istrue = false;
            }
            if(istrue){
                axios.post("http://120.78.188.228:8008/register",{
                    params:{username:username,password:password}
                }).then(res=>{
                    if(res.data==0){
                        alert("注册成功")
                        router.push("/login")
                    }else{
                        alert("注册失败")
                    }
                })
            }
            
        }
    }
}
</script>

<style>

</style>