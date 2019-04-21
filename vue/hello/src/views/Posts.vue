
<template>
    <div>
        <h1>test posts</h1>
        <ul>
            <li v-for="post in posts" :key="post">
               <router-link :to="'/posts/post/'+post.id">{{post.title}}</router-link>
            </li>
        </ul>
        <router-view/>
    </div>
</template>


<script>
export default {
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

