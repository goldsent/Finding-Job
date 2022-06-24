<template>
  <div id="app">
    
    <div class="nav_Bar">
      <div id="imglogo">
        <img src="./assets/LogoFDJ.png" alt="#" id="logo" />
        <div id="title"><b>B<small>UNNY</small><br />J<small>OB</small></b></div>
      </div>
      <div>
        
        <ul style="color:white">
          
          <li><router-link to="/register" style="color: white; text-decoration: none;" v-if="!$store.state.isLogged">สมัครสมาชิก  |</router-link></li>
          <li><router-link to="/logIn" style="color: white; text-decoration: none;" v-if="!$store.state.isLogged">เข้าสู่ระบบ |</router-link></li>
          <li><router-link to="/" style="color: white; text-decoration: none;">หน้าหลัก  |</router-link></li>
          <li><router-link to="/postjop" style="color: white; text-decoration: none;" v-if="$store.state.isLogged">ประกาศหางาน  |</router-link></li>
          <li><router-link to="/managepost" style="color: white; text-decoration: none;" v-if="$store.state.isLogged">รายการตำแหน่งงาน  |</router-link></li>
          <li ><a style="color:white;text-decoration: none; background-color:#fa6c6c" v-if="$store.state.isLogged" @click.prevent="$router.push('/'),$store.state.isLogged=!$store.state.isLogged" >ออกจากระบบ  |</a></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
   
};
</script>

<style scoped>
a {
  cursor: pointer;
}
#title{
  color: white;
  font-size: 30px;
}
#imglogo {
  width: 50%;
  display: flex;
  align-items: center;
}
.nav_Bar {
  background-color: #fa6c6c;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

#logo {
  max-width: 100px;
  height: auto;
}

ul {
  margin: 0;
  padding: 0;
  margin-right: 20px; 
}
li {
  list-style: none;
  display: inline-block;
  margin: 10px;
}
router-link{
  color: white;
  text-decoration: none;
}
</style>


