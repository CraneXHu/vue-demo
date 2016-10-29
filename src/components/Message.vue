<template>
  <div class="main">
    <div class="message">
      <ul>
        <li v-for="msg in session.messages">
          <p class="time"><span>{{msg.time}}</span></p>
          <div v-bind:class="{'self':msg.self}">
            <img :src="session.user.avatar">
            <div class="content">{{msg.msg}}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="editor">
      <textarea placeholder="按 Ctrl + Enter 发送" v-model="content"  v-on:keyup="send"></textarea>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default{
    data(){
      return{content : ''}
    },
    computed: mapGetters([
      'user',
      'session'
    ]),
    methods:{
      ...mapActions(['sendMessage']),
      send(event){
        if (event.ctrlKey && event.keyCode == 13){

          this.sendMessage(this.content)
          this.content = ''
        }
      }
    },
  }
</script>

<style>
  .main{
    height:100%;
    overflow: hidden;
    background: #eee;
  }

  .message{
    padding: 10px 15px;
    height: calc(100% - 160px);
    overflow-y: scroll;
  }

  .message ul{
    padding-left: 10px;
    list-style: none;
  }

  .message p{
    margin: 10px 0;
    text-align: center;
  }

  .message p span{
    display: inline-block;
    padding: 4px 12px;
    font-size: 12px;
    color: #fff;
    border-radius: 2px;
    background-color: #dcdcdc;
  }

  .message img{
    float: left;
    margin-right: 20px;
    width: 30px;
    height:30px;
  }

  .self{
    text-align: right;
  }

  .self img{
    float: right;
    margin-left: 20px;
    margin-right: 0;
  }

  .content{
    display: inline-block;
    position: relative;
    padding: 0 10px;
    max-width: calc(100% - 40px);
    min-height: 30px;
    line-height: 2.5;
    font-size: 12px;
    text-align: left;
    word-break: break-all;
    background-color: #fafafa;
    border-radius: 4px
  }

  .content:before{
    content: " ";
    position: absolute;
    top: 9px;
    right: 100%;
    border: 6px solid transparent;
    border-right-color: #fafafa;
  }

  .self .content{
    background-color: #b2e281;
  }

  .self .content:before{
    right: inherit;
    left: 100%;
    border-right-color: transparent;
    border-left-color: #b2e281;
  }

  .editor{
    height: 160px;
  }

  .editor textarea{
    padding: 10px;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    resize: none;
  }
</style>

