<template>
    <div class="home-view-page">
        <p @click="actionClickTest">
            home
        </p>
    </div>
</template>
<script>
    import {StringTool} from 'pdstoolsdk';
    import {ObjectTool} from 'pdstoolsdk';
    import {ArrayTool} from 'pdstoolsdk';
    import {NumberTool} from 'pdstoolsdk';
    import {CacheTool} from 'pdstoolsdk';
    import {DataTool} from 'pdstoolsdk';
    import {UrlTool} from 'pdstoolsdk';
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
            // console.log('StringTool');
            // console.log('校验手机号');
            // console.log(StringTool.isMobile('15295159905'));
            // console.log('校验电话');
            // console.log(StringTool.isPhone('0516-87060361'));
            // console.log('校验邮箱');
            // console.log(StringTool.isEmail('pengdashuai@jinbaozheng.com.cn'));
            // console.log('校验是否为空');
            // console.log(StringTool.isEmpty(''));
            // console.log(StringTool.isEmpty(null));
            // console.log(StringTool.isEmpty(undefined));
            // console.log(StringTool.isEmpty([]));
            // console.log(StringTool.isEmpty({}));
            // console.log('校验是否为验证码');
            // console.log(StringTool.isVerifyCode('1121331'));
            // console.log('校验是否为密码');
            // console.log(StringTool.isPassword('a*1', 1));
            // console.log('校验ascii码 0-9 A-Z a-z');
            // console.log(StringTool.numberFormASC('A'));
            // console.log('清除空格');
            // console.log(StringTool.deleteSpace('   a   b '));
            // console.log('清除任意字符');
            // console.log(StringTool.deleteString('123|、、 1 23', '|'));
            // console.log('获取html标签内容');
            // console.log(StringTool.getHtmlContent(`<div>123<b>a234</b></div><img/><i>b456</i>`));
            // console.log('获取img标签');
            // console.log(StringTool.getImgAddress("this is test string<div>123</div><i>123</i> <img src=\"/test/test.jpg\" width='50' >hello word! <img src=\"汉字也能匹配.jpg\" /> 33! <img src=\"/uploads/201910251435633.png\" alt=\"\" />"))
            // console.log('获取任意html标签及内容');
            // console.log(StringTool.getDoubleHtmlLabel('<div>1232312321<div>123</div>123<p>123</p><div><i>aaa</i></div><div>234</div><img/></div>', 'div'));
            // console.log('json字符串转成json对象');
            // console.log(StringTool.stringParse('a'));
            // console.log('字符串转对象')
            // console.log(StringTool.stringSplit('a,b', ','));
            // console.log('------')

            // console.log('ObjectTool');
            // console.log('json对象转json字符串');
            // console.log(ObjectTool.objectStringify({a: 1}))
            // console.log('删除空参数')
            // console.log(ObjectTool.deleteEmptyProperty({
            //     b: 1,
            //     a: 2,
            //     e: null,
            //     d: undefined,
            //     f: '',
            //     g: [],
            //     i: {},
            //     h: [1, 2],
            //     c: {
            //         b: 1,
            //         a: 2,
            //         d: []
            //     }
            // }))
            // console.log('对象ascii排序');
            // console.log(ObjectTool.sortAscii({
            //     b: 1,
            //     a: 2,
            //     e: null,
            //     d: undefined,
            //     f: '',
            //     g: [],
            //     i: {},
            //     h: [1, 2],
            //     c: {
            //         b: 1,
            //         a: 2,
            //         d: [1]
            //     }
            // }))
            // console.log('对象转url');
            // console.log(ObjectTool.jsonUrl({
            //     b: 1,
            //     a: 2,
            //     e: null,
            //     d: undefined,
            //     f: '',
            //     g: [],
            //     i: {},
            //     h: [1, 2],
            //     c: {
            //         b: 1,
            //         a: 2,
            //         d: [1]
            //     }
            // }))
            // console.log('------')
            //
            // console.log('ArrayTool')
            // console.log('数组转字符串');
            // console.log(ArrayTool.arrayJoin([1,2,3], '|'));
            // console.log('数组排序');
            // console.log(ArrayTool.arraySort([1, 2, 1.5], 'desc'))
            // console.log('数组对象排序')
            // console.log(ArrayTool.objectSort([{a: 2}, {a: 1}, {a: 1.5}], 'a', 'desc'))
            // console.log('向数组增加key');
            // console.log(ArrayTool.addkey({data: [{a: 1}, {a: 21}, {a: 3}], page: 1, key: 'jbzKey'}));
            // console.log('------')
            // console.log('NumberTool');
            // console.log('保留多位小数');
            // console.log(NumberTool.fixDigits(1, 2));
            // console.log('去整数倍')
            // console.log(NumberTool.formatUnitDelete(1.7, 10));
            // console.log('分转元并保留2位小数');
            // console.log(NumberTool.formatPrice(1000, 1));
            // console.log('------')
            // console.log('CacheTool');
            // console.log('设置缓存');
            // console.log(CacheTool.setCache('pds', false));
            // console.log('获取缓存');
            // console.log(CacheTool.getCache('pds'));
            // console.log('删除缓存');
            // console.log(CacheTool.delCache('pds1'));
            // console.log('-------')
            // console.log('DataTool');
            // console.log(DataTool.formatData({
            //     errorCode: 1,
            //     message: '测试',
            //     data: [{a:1, b: 2}, [0, 1]],
            //     test: 123
            // }))
            // console.log('------')
            console.log('对象转为url参数');
            console.log(UrlTool.urlFromPortion({
                baseUrl: 'https://www.baidu.com:8080',
                subUrl: '/test',
                params: {
                    a: 1,
                    b:2,
                    c: [0, 1, 2],
                    d: '1,2,3',
                    e: undefined,
                    f: null,
                    g: '',
                    h: '  '
                }
            }));
            console.log('解析url对象');
            console.log(UrlTool.portionFromUrl('' +
                'https://www.baidu.com:8080/?aaa=111#?bbb=222/test?inType=1&a=1&b=1,2,3'));
            console.log(UrlTool.portionFromUrl('' +
                'https://www.baidu.com:8080/test?inType=1&a=1&b=1,2,3'))
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