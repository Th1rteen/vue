import axios from "axios";
axios.defaults.baseURL = "http://120.78.188.228:8008"; 
export default {
    getlist({commit}){
        axios.get("/bookroom").then(res=>{
            return res.data
        }).then(json=>{
            commit("getlist",json)
        })
    },
    getlist1({commit}){
        axios.get("/bookroom").then(res=>{
            return res.data
        }).then(json=>{
            commit("getlist1",json)
        })
    },
    getlist2({commit}){
        axios.get("/bookroom").then(res=>{
            return res.data
        }).then(json=>{
            commit("getlist2",json)
        })
    },
    getbook({commit},url){
        axios.get(url).then(res=>{
            return res.data
        }).then(json=>{
            commit("getbook",json)
        })
    },
    getbook1({commit},url){
        axios.get(url).then(res=>{
            return res.data
        }).then(json=>{
            commit("getbook1",json)
        })
    },
    getName({commit},preload){
        commit("getName",preload)
    },
    //begin
    findBook({commit},id){
        axios.get("/findbook",{
            params:{
                id:id
            }
        }).then(res=>{
            return res.data
        }).then(json=>{
            commit("findBook",json)
        })
    },
    getshelf({commit},user){
        axios.get("/bookshelf",{
            params:{
                user:user
            }
        }).then(res=>{
            return res.data
        }).then(json=>{
            commit("getshelf",json)
        })
    }
}