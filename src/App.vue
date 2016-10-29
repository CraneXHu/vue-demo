<template>
  <div class="chat">
    <Panel></Panel>
    <Message></Message>
  </div>
</template>

<script>
import Panel from './components/Panel.vue'
import Message from './components/Message.vue'
import store from './store'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    Panel, Message
  },
  methods: mapActions(['initData']),
  created (){
    console.log(this)
    this.initData()
  }
}
</script>

<style>
html, body {
  height: 100%;
}

body{
  margin: 0px;
  background: url("./assets/chat_bg.jpg") no-repeat center;
}

* {
  box-sizing: border-box;
}

.chat{
  margin:20px auto;
  width:800px;
  height: 600px;
  overflow: hidden;
  border-radius: 3px;
  background-color: #2c3e50;
}
</style>
