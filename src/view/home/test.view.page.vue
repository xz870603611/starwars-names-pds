<template>
    <div class="test-view-page">
        test
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {}
        },
        computed: {
            id() {
                return this.$route.query.id;
            }
        },
        methods: {
            random() {
                return Math.floor(Math.random() * 100)
            },
            getRandom() {
                let sum = 0;
                for (let i = 0; i < 50; i++) {
                    sum += this.random();
                }
                return sum;
            }
        },
        mounted() {
            console.log(this.id);
            console.log('第一题：');
            let arr = this.getRandom() / 50;
            let brr = this.getRandom() / 50;
            console.log(`第一个班平均分:${arr}`);
            console.log(`第二具班平均分:${brr}`);
            let job = (arr - brr) < 0 ? arr : brr;
            console.error(`答案一：区间0~${job}且不等于${job}`);
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .test-view-page {
        font-size: 20px;
        color: yellow;
    }
</style>