<template>
    <div class="section">
        <!-- 头部 -->
        <div class="head">
            <h1>{{conTitle}}</h1>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed:mapState([
        "conTitle"
    ])
}
</script>

<style>

</style>
