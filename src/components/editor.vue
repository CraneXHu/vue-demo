<template>
  <div class="editor">
    <textarea placeholder="按 Ctrl + Enter 发送" v-on:keydown.enter="send($event);"></textarea>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        msg:'hello vue'
      }
    },
    components:{

    },
    methods:{
      send(event){
        if (event.keyCode == 13){

        }
      }
    }
  }
</script>

<style>
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

