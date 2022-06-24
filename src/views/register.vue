<template>
<div class="register">
  <div class="User">
    <div id="btw-user">
      <button id="หางาน"><b>สมัครสมาชิกสำหรับผู้สมัครงาน</b></button>
      <button id="หาคน"><b>สมัครสมาชิกสำหรับผู้ประกอบการ</b></button>
    </div>
    <form action="#" id="User" @submit.prevent="addlogin({username,
			password}),$router.push('/login'),success()">
      <input type="email" placeholder="อีเมล" style="width: 100%" v-model="username" required/><br /><br />
      <input
        type="password"
        placeholder="รหัสผ่าน"
        style="width: 100%"
        v-model="password"
        required
      /><br /><br />
      <input
        type="password"
        placeholder="ยืนยันรหัสผ่าน"
        style="width: 100%"
        v-model.lazy='checkPassword'
      /><br /><br />
      <div class="matches" v-if='notSamePasswords'>
		<p style="color:red;margin-left:10px">Passwords don't match.</p>
	</div>
      <div style="display: flex; justify-content: center">
        <input type="checkbox" id="par" name="par" value="par" required />
        <label for="par" style="color:#fa6c6c"
          >ยอมรับ เงื่อนไขข้อตกลงการใช้บริการ<br />
          และ นโยบายความเป็นส่วนตัว ของ Bunny Job</label
        >
        
      </div>
      <br>
      <div style="display: flex; justify-content: center">
      <button type="submit" id="btw-login" >สมัครสมาชิก</button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "register",
  data() {
    return {
      
			rules: [
				{ message:'One lowercase letter required.', regex:/[a-z]+/ },
				{ message:"One uppercase letter required.",  regex:/[A-Z]+/ },
				{ message:"8 characters minimum.", regex:/.{8,}/ },
				{ message:"One number required.", regex:/[0-9]+/ }
      ],
      username:"",
			password:'',
			checkPassword:'',
			passwordVisible:false,
			submitted:false
		}
	},
	methods: {
    ...mapActions(["addlogin"]),
    success(){
      return alert("ขอบคุณที่สมัครเป็นสมาชิกกับเรา")}
	},
	computed: {

		notSamePasswords () {
			if (this.passwordsFilled) {
				return (this.password !== this.checkPassword)
			} else {
				return false
			}
		},
		passwordsFilled () {
			return (this.password !== '' && this.checkPassword !== '')
		},
		passwordValidation () {
			let errors = []
			for (let condition of this.rules) {
				if (!condition.regex.test(this.password)) {
					errors.push(condition.message)
				}
			}
			if (errors.length === 0) {
				return { valid:true, errors }
			} else {
				return { valid:false, errors }
			}
		}
	}
};
</script>

<style scoped>
.register{
    margin-left: 20rem;
}

#btw-user {
  text-align: right;
  margin: 0px;
  
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
  box-shadow: 0px -2px 30px rgb(201, 201, 201);
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
}

a {
  margin: 16px;
  text-decoration: none;
  color: #fa6c6c;
}
#btw-login {
  width: 200px;
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
  width: 60%;
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
  
}
</style>