<template>
    <div>
        <h1>test posts</h1>
        <div >title</div>
        <div >content</div>
    </div>
</template>


<script>
export default {
    created(){
        /* eslint-disable no-console */
          console.log("post>>>>   ", this.$route.fullPath,this.$route.params, this.$route.query)
        /* eslint-enable no-console */         
        
    },
    data(){
        return{
            posts:[
                {id:1 ,title:"1 번 글 입니다"},
                {id:2 ,title:"2 번 글 입니다"},
                {id:3 ,title:"3 번 글 입니다"},
            ]
        }
    }
}
</script>

