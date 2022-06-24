<template>
  <div id="boxcard">
    <div style="display: inline-block; margin-left: 10px; width: 25%">
      <h3>ตำแหน่งงาน</h3>
      <p>{{ postdt.positionjop }}</p>
    </div>
    <div style="display: inline-block; margin-lef: 10px; width: 35%">
      <h3>สถานที่ทำงาน</h3>
      <p>{{ postdt.province }}</p>
    </div>
    <div style="display: inline-block; margin-lef: 10px; width: 35%">
      <h3>จำนวนผู้สมัคร</h3>
      <p style="margin-left:50px">{{ postdt.num_position }}</p>
    </div>
    <div style="display: flex; margin: 10px; width: 50%; justify-content:start;">
      <div class="submit" style="margin-top:10px; margin-right:20px" >
        <router-link :to="'/editpost/' + index" id="submit">แก้ไข</router-link>
      </div>
      <a href="#" @click="confirmdelete()">ลย</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "card",
  props: ["postdt", "index"],
  methods: {
    ...mapActions(["deletepost"]),
    confirmdelete() {
      var confirm = window.confirm("คุณต้องการจะลบใช่ไหม");
      if (confirm) this.deletepost(this.index);
      else return;
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
p {
  color: #7c7b7b;
}
h3 {
  color: #fa6c6c;
}
#boxcard {
    
  margin: 20px;
  padding: 20px;
  border: 2px solid #fa6c6c;
  width: 40%;
  border-radius: 20px;
}
#submit,
a {
  text-decoration: none;
  background-color: #fa6c6c;
  color: #ffffff;
  box-shadow: #b8b4b4;
  padding: 10px;
  border-radius: 4px;
}
#boxcard{
    background-color: white;
}
</style>