<template>
    <div>
        {{msg}}
        <p>hahh</p>
    </div>
</template>
<script>
export default{
    data(){
        return{
            msg:""
        }
    },
    beforeMount(){
        this.msg=this.$store.state.hlhome.count
    }
}
</script>
<style scoped lang="less">
div{
    width:80px;
    height: 80px;
    border:1px solid red;
    >p{
        color: blue;
    }
}
</style>