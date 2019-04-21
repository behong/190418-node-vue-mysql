<template>
   <div class="home">
     <h1 class="red">{{_.random(10)}}</h1>
    <ul>
      <li v-for="reply in replies" :key="reply.rno">
        {{reply.rno}}
        <input type="text" v-model="reply.replytext"/>
        <button @click.prevent="saveReply(reply)" >Save</button>
        </li>
    </ul>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input type="text" v-model="msg" />
    <span class="red">{{reversMessage}}</span>
      <TodoItem v-for="item in gList"
        :todo="item"
        :key="item.id"></TodoItem>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TodoItem from '@/components/todo-item'


export default {
  name: 'home',
  components: {
    HelloWorld,
    TodoItem
  },
created(){
  this.fetchReplies()
},
  computed:{
    reversMessage: function (){
      return this.msg.split('').reverse().join('')
    }
  },
  data (){
    return{
      msg : 'test',
      gList: [
        { id:0 ,name : "hhh"},
        { id:1 ,name : "hhh1"},
        { id:2 ,name : "hhh2"},
        { id:3 ,name : "hhh3"},        
      ],
      replies:[],
      replyText: '',
    }
  },
  methods :{
    saveReply(reply){
        this.$http.put('http://localhost:7000/apis/replies/265/'+ reply.rno,reply).then( ret=>{
        if(ret.status != '200') return []
        /* eslint-disable no-console */
          console.log( "=============>  ", ret.toString())
        /* eslint-enable no-console */        
          alert(ret.data)
        })
    },
    fetchReplies(){
      this.$http.get('http://localhost:7000/apis/replies/265').then( ret =>{
        if(ret.status != '200') return;
          this.replies = ret.data
      })
    }
  }
}
</script>

<style>
.res {color: red}
</style>
