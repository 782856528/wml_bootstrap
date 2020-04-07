<template>
        <div class="contailer">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" v-for="(item,index) in list" :key="index">
          <router-link to="item" v-if="index!=list.length-1">{{item}}</router-link>
          <span v-else>{{item}}</span>
        </li>
      </ol>
    </div>
</template>
<script>
export default {
    data(){
        return{
             list:[],
        }
    },
    created(){
        console.log()
        this.$route.matched.forEach(e => {
                this.list.push(e.meta.title)
        });
    }
}
</script>