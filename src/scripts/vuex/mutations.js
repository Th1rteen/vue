export default {
    getlist(state,data){
        setTimeout(()=>{
            state.booklist = data;
            // console.log(data)
        }, 500);
    },
    getlist1(state,data){
        setTimeout(()=>{
            state.booklist1 = data[0].list[0].item;
            // console.log(data)
        }, 500);
    },
    getlist2(state,data){
        setTimeout(()=>{
            state.booklist2 = data[0].list[1].item;
            // console.log(data)
        }, 500);
    },

    getBoy(state,data){
        setTimeout(()=>{
            state.boy = data;
            // console.log(data)
        }, 500);
    },
    getbook(state,data){
        setTimeout(function() {
            state.book=data;
            // console.log(data)
        }, 500);
    },
    getbook1(state,data){
        setTimeout(function() {
            state.book1=data[0].list;
            // console.log(data)
        }, 500);
    },
    getName(state,data){
        setTimeout(()=>{
            state.user=data;
        },500)
    },
    findBook(state,data){
        setTimeout(function() {
            state.fbook=data[0];
            // console.log(data[0])
        }, 500);
    },
    getshelf(state,data){
        setTimeout(function() {
            state.shelf=data
            // console.log(data)
        }, 500);
    }
}