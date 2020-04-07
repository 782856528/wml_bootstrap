<template>
  <div
    class="container-fluid"
    style="background: url('https://zhennann.com/assets/images/background.png');"
  >
    <div class="row">
      <div class="col bg-dark" style="padding:10px;">
        <h4 class="text-light">欢迎来到卫梦立的博客</h4>
        <h6 class="text-white">在这里你可以学到新的技术</h6>
      </div>
    </div>
    <nav
      class="navbar bg-secondary navbar-expand-sm  navbar-fixed-sm navbar-dark container"
      style="margin-top:-10px;"
      role="navigation"
    >
      <router-link class="navbar-brand active" to="/">首页</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">
              说说
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home1">随笔</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >类别</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link
                class="dropdown-item"
                to="/home1"
                v-for="(item,index) in list"
                :key="index"
              >{{item.name}}</router-link>
            </div>
          </li>
        </ul>
        <div class="dropdown-divider"></div>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="搜索" />
          <button class="btn btn-info my-2 my-sm-0" type="submit">搜索</button>
        </form>
      </div>
    </nav>
    <div class="container">
      <div class="container-fluid">
      <div class="row">
        <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8">
          <div style="width:100%;background:white;margin-top:10px;">
            <router-view></router-view>
          </div>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <div style="width:100%;margin-top:10px;">
           
              <div class="card text-left">
                <div class="card-header">个人信息</div>
                <div class="card-body">
                  <div>姓名：卫梦立</div>
                </div>
              </div>
            
          </div>
          <div style="width:100%;margin-top:10px;">
       
              <div class="card text-left">
                <div class="card-header">标签</div>
                <div class="card-body">

                  <ul class="media-list list  container-fluid">
                    <li class="media" v-for="(item,index) in tag" :key="index">
                      <div class="media-body">
                        <router-link :to="item.url">{{item.name}}</router-link>
                      </div>
                      <div class="media-right">
                        <span class="badge badge-secondary">{{item.count}}</span>
                      </div>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      a: "测",
      list: [{ name: "员工" }, { name: "财务" }, { name: "主管" }],
      tag: [
        { name: "vue", url: "/tag", count: 10 },
        { name: "es6", url: "http://baidu.com", count: 10 },
        { name: "html", url: "http://baidu.com", count: 10 },
        { name: "css", url: "http://baidu.com", count: 10 },
        { name: "js", url: "http://baidu.com", count: 10 }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
