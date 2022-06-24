<template>
  <div class="home">
    <div class="subhome">
      <div class="search">
        <div style="margin:5px; font-size:30px">ค้นหาข้อมูล</div>
        <input type="text" style="width: 80%;font-family:Arial, FontAwesome; margin-left: 5px; margin-bottom:10px;" placeholder=" ใส่ชื่อตำแหน่งงานหรือชื่อบริษัท"/>
      </div>
      <div id="opt-info" >
        <select>
          <option value="0">ประเภทของงาน:</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
        </select>
        <select>
          <option value="0">สถานที่ทำงาน</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
        </select>
        <select>
          <option value="0">เงินเดือนต่ำสุด</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
        </select>
        <select>
          <option value="0">เงินเดือนสูงสุด</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
        </select>
        <select>
          <option value="0">รูปแบบของาน</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
        </select>
      </div>
    </div> 
    <img style="width:45%; margin-top:60px" src="../assets/mockup2.png" alt="mockup">
  </div>
</template>
<style scoped>
.home{
  display:flex;
  justify-content: space-around;
  padding-top: 40px;
}
input {
  width: 80%;
  border: #fa6c6c solid 2px;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 20px;
  margin-top: 5px;
  color: #fa6c6c;
}

.subhome {
  height: 600px;
  border-radius: 30px;
  border: #fa6c6c solid 6px;
  width: 35%;
  padding: 10px;
  height: 30%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 20px;
}
.opt-info {
  display: flex;
  flex-wrap: wrap;
}
select {
  margin: 20px 10px;
  width: 40%;
  border: #fa6c6c solid 2px;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 20px;
  margin-top: 5px;
  color: #fa6c6c;
}
select::after {
  background-color: #f8d5d5;
  opacity: 80%;}
</style> 
  

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";



export default {
  name: "Home",
  components: {
    HelloWorld,
    }
  }
</script>
