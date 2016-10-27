<template>
  <div class="main">
    <div class="message">
      <ul>
        <li v-for="msg in messages">
          <p class="time"><span>{{msg.time}}</span></p>
          <div v-bind:class="{'self':msg.self}">
            <img :src="msg.avatar">
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
  export default{
    data(){
      var res
      var xmlhttp
      if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest()
      }
      else
      {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
      }
      xmlhttp.open("GET","http://localhost:3000/" ,false)
      xmlhttp.send()
      res = JSON.parse(xmlhttp.responseText)
      return res
    },
    components:{
    },
    methods:{
      send(event){
        if (event.ctrlKey && event.keyCode == 13){
          var date = new Date();
          var time = date.getHours() + ":" + date.getMinutes();
          this.messages.push({
            time:time,
            avatar:require('assets/logo.png'),
            msg: this.content,
            self: true
          })
          this.content = ''
        }
      }
    }
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

  .message li{

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

