<template>
  <div class="panel">
    <div class="header">
      <div class="avatar">
        <img :src="user.avatar">
      </div>
      <div class="nickname">
        <h3>{{user.nickname}}</h3>
      </div>
    </div>
    <div class="searcher">
      <input type="text" placeholder="search user">
    </div>
    <div class="chat_list">
      <ul>
        <li v-for="friend in friends">
          <div class="list_item">
            <div class="avatar">
              <img :src="friend.avatar">
            </div>
            <div class="nickname">
              <h3>{{friend.nickname}}</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        user:{
          avatar: '',
          nickname: ''
        },
        friends: [{
          avatar: '',
          nickname: ''
        }]
      }
    },
    components: {
    },
    methods: {
    },
    ready:function () {
      this.$http.get('/', function (data){

      }).error(function (data, status, request) {
        console.log(status)
      })
    }
  }
</script>

<style>
  .panel{
    float: left;
    width: 200px;
    height: 100%;
    background: #2e3238;
  }

  .header{
    position: relative;
    padding: 18px;
  }

  .avatar, .nickname{
    display: table-cell;
    vertical-align: middle;
  }

  h3{
    margin: 0 0 0 15px;
    color: #f4f4f4;
  }

  img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 2px;
  }

  .searcher{
    padding-bottom: 10px;
    border-bottom: 1px solid #24272c;
  }

  .searcher input{
    margin: 0 18px;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background-color: #26292E;
    font-size: 12px;
    border:none;
    border-radius: 2px;
    outline: none;
  }

  .chat_list ul{
    margin-top: 10px;
    padding: 0px;
  }

  .chat_list li:hover{
    background-color: hsla(0,0%,100%,.1);
  }

  .chat_list li{
    margin: 0px;
    padding: 12px 18px;
    height: 54px;
    cursor: pointer;
  }

  .list_item{
    display: inline-block;
  }

  .chat_list img{
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 2px;
  }
</style>
