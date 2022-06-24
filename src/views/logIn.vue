<template>
  <div app="LogIn" id="Login">
    <div>
      {{confirm}}
    </div>
    <div class="contrainer">
      <img src="../assets/LogoFDJ.png" alt="Logo" />
      <P style="color: #fa6c6c; font-size: 70px; margin: 0"
        >B<small>UNNY</small>J<small>OB</small></P
      >
      <p style="color: #fc9999; font-size: 50px; margin: 0">
        "Find Your Future"
      </p>
    </div>
    <div class="User">
      <div id="btw-user">
        <button id="หางาน"><b>หางาน</b></button>
        <button id="หาคน"><b>หาคน</b></button>
      </div>
      <form action="#" id="User" @submit.prevent="login()">
        <input
          type="text"
          placeholder="อีเมล"
          style="width: 100%"
          v-model="user"
          required
        /><br /><br />
        <input
          type="password"
          placeholder="รหัสผ่าน"
          style="width: 100%"
          v-model="password"
          required
        /><br /><br />
        <div style="text-align: right">
          <a href="#">ลืมรหัสผ่าน?</a>
        </div>
        <br />
        <div style="text-align: center">
          <button id="btw-login">เข้าสู่ระบบ</button>
          <div style="display: flex; justify-content: center">
            <p>ยังไม่ได้เป็นสมาชิก Buuny Job?</p>
            <a
              href="#"
              style="margin: 16px"
              @click.prevent="$router.push('/register')"
              >สมัครสมาชิก</a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "logIn",
  data() {
    return {
      user:'',
      password:'',
      username:'admin',
      pass:'1234'
      
    }
  },
  methods: {
    login(){
      if(this.username==this.user&&this.pass==this.password){
        localStorage.setItem("user",this.user)
        this.$router.push('/homeCompany')
        this.$store.state.isLogged=!this.$store.state.isLogged
      }else {
        alert("Invalid Username or password!!")
      }
    }
    
  },
};
</script>

<style scoped>
#btw-user {
  text-align: right;
}
#หางาน {
  border: none;
  padding: 20px;
  font-size: 20px;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #fa6c6c;
  width: 40%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);
}
#หาคน {
  border: none;
  padding: 20px;
  font-size: 20px;
  background-color: #fa6c6c;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
  width: 40%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);
}

a {
  margin: 16px;
  text-decoration: none;
  color: #fa6c6c;
}
#btw-login {
  width: 100px;
  border-radius: 10px;
  border: none;
  background-color: #fa6c6c;
  color: white;
  font-size: 20px;
  padding: 4px;
}
input {
  border: #fa6c6c solid 2px;
  border-radius: 20px;
  padding: 10px 10px;
  font-size: 20px;
}
::placeholder {
  color: #fa6c6c;
}
.User {
  margin-top: 10rem;
  width: 40%;
  margin-left: 8rem;
  margin-right: 15rem;
}
#User {
  margin: 0;
  border: #fa6c6c solid 2px;
  border-radius: 40px;
  padding: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#Login {
  display: flex;
  height: 100%;
  justify-content: center;
}
.contrainer {
  padding: 1rem;
  margin: 2rem;
  margin-top: 100px;
}
img {
  width: 80%;
}
</style>>

