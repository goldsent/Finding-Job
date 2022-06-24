<template>
  <div class="">
      <h1 style="color:#fa6c6c;margin-left:20px">รายการตำแหน่งงาน</h1>
      <div id="bg">
     <card v-for="(post,index) in $store.state.postjopinfo"
          :postdt="post"
          :index="index"/>
          </div>
  </div>
</template>

<script>
import card from "@/components/card.vue";
export default {
    name:"managepost",
    components:{
        card
    }


}
</script>

<style scoped>
#bg {
    margin: 20px;
    width: 80%;
    background-color: #fa6c6c;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>