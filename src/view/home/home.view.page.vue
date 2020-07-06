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
            console.log('******');
            console.log('校验手机号');
            console.log(StringTool.isMobile('15295159905'));
            console.log('校验电话');
            console.log(StringTool.isPhone('0516-87060361'));
            console.log('校验邮箱');
            console.log(StringTool.isEmail('pengdashuai@jinbaozheng.com.cn'));
            console.log('校验是否为空');
            console.log(StringTool.isEmpty(''));
            console.log(StringTool.isEmpty(null));
            console.log(StringTool.isEmpty(undefined));
            console.log(StringTool.isEmpty([]));
            console.log(StringTool.isEmpty({}));
            console.log('校验是否为验证码');
            console.log(StringTool.isVerifyCode('1121331'));
            console.log('校验是否为密码');
            console.log(StringTool.isPassWord('a*1', 1));
            console.log('------')
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