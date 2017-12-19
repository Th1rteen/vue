<template>
    <div class="section">
        <div class="wrap">
            
            
            <div class="box">
                
                <!-- 轮播 -->
                

                <div class="swiper-container main" id="content-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(n,i) in conlist" :key="i">{{n}}</div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
import "../utils/swiper-3.3.1.min.js";
// import "../utils/jquery-1.11.2.min.js";
export default {
    computed:{
        ...mapState([
            "conlist"
        ])
    },
    mounted(){
        var navswiper="",contentswiper="";
        this.$nextTick(()=>{
            this.navswiper=new Swiper("#nav-swiper",{
                slidesPerView: 'auto',
                watchSlidesProgress: true,
                watchSlidesVisibility: true,
                // onTap(swiper) {
                //     var clickedIndex = swiper.clickedIndex;
                //     console.log(clickedIndex);
                //     contentswiper.slideTo(clickedIndex);
                // }
            })
            this.contentswiper=new Swiper("#content-swiper",{
                onSlideChangeEnd(swiper) {
                    var activeIndex = swiper.activeIndex;
                    //    console.log(activeIndex)
                    var navSlide = $("#nav-swiper .swiper-slide ").removeClass("active").eq(activeIndex).addClass("active");
                    //   console.log(navSlide);   //navSlide 指向高亮div 
                    console.log(navSwiper.activeIndex)
                    console.log(contentSwiper.activeIndex)
                    if (!navSlide.hasClass("swiper-slide-visible")) {
                        //  当前slide没有这个类    不可见
                        console.log("不可见");
                        // 方向  
                        // 正 
                        if (contentSwiper.activeIndex > navSwiper.activeIndex) {
                            var num = Math.floor(navSwiper.width / navSlide.width() - 1);
                            navSwiper.slideTo(contentSwiper.activeIndex - num);
                        } else {
                            navSwiper.slideTo(activeIndex);
                        }
                    }
                }
            })
        })
    }
}
</script>

<style>

</style>
