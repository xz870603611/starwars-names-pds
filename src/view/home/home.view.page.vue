<template>
    <div class="home-view-page">
        <p @click="actionClickTest">
            home
        </p>
    </div>
</template>
<script>
    import {StringTool} from 'pdstoolsdk';
    export default {
        name: '',
        data() {
            return {}
        },
        methods:{
            actionClickTest() {
                this.$router.push({name: 'test', query: {id : '123'}});
            }
        },
        mounted() {
            console.log(StringTool.isMobile('15295159905'))
        }
    }
</script>
<style lang="scss" ref="stylesheet/scss" scoped>
    .home-view-page {
        p{
            font-size:20px;
            color:red;
        }
    }
</style>