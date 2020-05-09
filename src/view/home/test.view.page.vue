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
        mounted() {
            console.log(this.id);
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .test-view-page{
        font-size:20px;
        color:yellow;
    }
</style>