<template>
  <div class="postjop">
    <div class="User" style="width100%; padding:4rem">
      <div id="btw-user" style="margin-left: 2rem">
        <button id="หางาน"><b>รายละเอียดงานและคุณสมบัติผู้สมัคร</b></button>
      </div>

      <form
        action="#"
        style="position: relative"
        @submit.prevent="
          btnFunc({
            occupation,
            positionjop,     
            num_position,
            typejop,
            holiday,
            working,
            sly,
            province,
            district,
            responsible,
            benefit,
            gender,
            age_min,
            age_max,
            age,
            education_level_begin,
            education_level_endexperience,
            experience,
          }),$router.push('/managepost')
        " 
       
      >
        
        <section >
          <h2>ประกาศงาน</h2>
          <div
            id="1"
            style="
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
            "
          >
            <div style="width: 30%; margin: 20px 0">
              <label>หมวดหมู่งาน*</label><br />
              <select style="width: 80%" v-model="occupation" required>
                <option value="เลือกหมวดหมู่งาน">เลือกหมวดหมู่งาน:</option>
                <option value="it">it</option>
                <option value="engineer">engineer</option>
              </select>
            </div>
            <div style="width: 30%; margin: 20px 0">
              <label>ตำแหน่งงาน* </label><br />
              <input type="text" v-model="positionjop" required/>
            </div>
            <div style="width: 30%; margin: 20px 0">
              <label>รูปแบบงาน</label><br />
              <select style="width: 80%" required v-model="typejop">
                <option value="0">เลือกรูปแบบงาน:</option>
                <option value="งานประจำ">งานประจำ</option>
                <option value="งานพาทไทม์">งานพาทไทม์</option>
              </select>
            </div>
            <div style="width: 32%; margin: 20px 0">
              <label>จำนวนอัตราที่รับ* </label><br />
              <input type="number" placeholder="จำนวนคน" v-model="num_position" required/>
            </div>
            <div style="width: 30%; margin: 20px 0">
              <label>วันหยุด </label><br />
              <select style="width: 80%" required v-model="holiday">
                <option value="0">เลือกวัน:</option>
                <option value="เสาร์">เสาร์</option>
                <option value="อาทิตย์">อาทิตย์</option>
                <option value="เสาร์-อาทิตย์">เสาร์-อาทิตย์</option>
              </select>
            </div>
            <div style="width: 30%; margin: 20px; justify-content: left">
              <label>เวลาทำงาน</label><br />
              <select v-model="working_hour">
                <option value="0">เวลาเข้างาน:</option>
                <option value="8.00-16.00">8.00-16.00</option>
                <option value="9.00-17.00">9.00-17.00</option>
                <option value="10.00-18.00">10.00-18.00</option>
              </select>
            </div>
            <div style="width: 100%; margin: 20px">
              <label>เงินเดือน*</label><br />
              <select v-model="sly" required>
                <option value="เงินเดือน">เงินเดือน:</option>
                <option value="25000">25000</option>
                <option value="30000">30000</option>
                <option value="35000">35000</option>
              </select>
              <label style="margin: 0 20px"> บาท</label>
            </div>
          </div>
        </section>
        <section >
          <h2>สถานที่ปฏิบัติงาน</h2>
          <div style="display: flex; justify-content: space-around">
            <div style="width: 40%">
              <label>จังหวัด</label><br />
              <select style="width: 80%" v-model="province" required>
                <option value="0">เลือกจังหวัด:</option>
                <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                <option value="ระยอง">ระยอง</option>
                <option value="ชลบุรี">ชลบุรี</option>
              </select>
            </div>
            <div style="width: 40%">
              <label>อำเภอ/เขต</label><br />
              <select style="width: 80%" v-model="district">
                <option value="0">เลือกอำเภอ/เขต:</option>
                <option value="คลองเตย">คลองเตย</option>
                <option value="จตุจักร">จตุจักร</option>
                <option value="ดินแดง">ดินแดง</option>
                <option value="รังสิต">รังสิต</option>
              </select>
            </div>
          </div>
        </section>
        <section >
          <h2>รายละเอียดงาน</h2>
          <div style="display: flex; justify-content: space-around">
            <div style="width: 40%">
              <label>หน้าที่รับผิดชอบ*</label><br />
              <textarea
                rows="4"
                style="width: 100%"
                v-model="responsible"
                required
              ></textarea>
            </div>
            <div style="width: 40%">
              <label>สวัสดิการ</label><br />
              <textarea
                rows="4"
                style="width: 100%"
                v-model="benefit"
              ></textarea>
            </div>
          </div>
        </section>
        <section >
          <h2>คุณสมบัติผู้สมัครงาน</h2>
          <div
            style="
              display: flex;
              justify-content: space-around;
              flex-warp: warp;
            "
          >
            <div style="width: 25%">
              <label>เพศ</label><br /><br />
              <select style="width: 80%" v-model="gender">
                <option value="เพศ">เพศ:</option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
                <option value="ทุกเพศ">ทุกเพศ</option>
              </select>
            </div>
            <div style="width: 20%">
              <label>อายุ</label><br />
              <select style="width: 40%" v-model="age_min">
                <option value="0">อายุตั้งแต่:</option>
                <option value=">18">18</option>
                <option value="20">20</option>
              </select>
              <select style="width: 40%" v-model="age_max">
                <option value="0">อายุสูงสุด:</option>
                <option value="60">60</option>
                <option value="ไม่จำกัด">ไม่จำกัด</option>
              </select>
              <br />
              <input
                type="checkbox"
                id="ทุกวัย"
                name="par"
                value="ทุกวัย"
                style="width: 10%"
                v-model="age"
              />
              <label>ทุกวัย</label>
            </div>
            <div style="width: 20%">
              <label>ระดับการศึกษา </label><br />
              <select v-model="education_level_begin">
                <option value="0">ระดับการศึกษาเริ่มต้น:</option>
                <option value="1">มัธยมศึกษาปีที่3</option>
                <option value="2">มัธยมศึกษาปีที่6</option>
                <option value="2">ปวช</option>
                <option value="2">ปวส</option>
              </select>
              <label> ถึง </label>
              <select v-model="education_level_end">
                <option value="0">ระดับการศึกษาสูงสุด:</option>
                <option value="ปริญญาตรี">ปริญญาตรี</option>
                <option value="ปริญญาโท">ปริญญาโท</option>
              </select>
            </div>
            <div style="width: 20%">
              <label>ประสบการณ์</label><br />
              <input type="text" v-model="experience" />
              <label>ปี</label>
            </div>
          </div>
        </section>
        <div style="text-align: center; margin-top: 20px" >
          <Button id="submit" >{{btnText}}</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "postjop",
  data() {return this.$route.params && this.$route.params.id
      ? { ...this.$store.state.postjopinfo[this.$route.params.id] }
      :  {
      
      occupation: "",
      positionjop: "",
      working_hour: "",
      typejop:"",
      num_position: "",
      holiday: [],
      working: "",
      sly: "",
      province: "",
      district: "",
      responsible: "",
      benefit: "",
      gender: "ทุกเพศ",
      age_min: "",
      age_max: "",
      age: "",
      education_level_begin: "",
      education_level_end: "",
      experience: "",
    };
  },
  methods: {
    ...mapActions(["addpost","editpost"]),
    editpostByIndex(data){
        this.editpost({data,index:this.$route.params.id})
    },
    
      },
  computed: {
    btnText() {
      if (this.$route.path == "/postjop") return "บันทึก";
      else return "บันทึก";
    },
    btnFunc() {
      if (this.$route.path == "/postjop") return this.addpost;
      else return this.editpostByIndex;
    }
    }
};
</script>

<style scoped>
.model-overay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: #fa6c6c;
}
textarea {
  border: #fa6c6c solid 2px;
  color: #fa6c6c;
  border-radius: 20px;
  font-size: 20px;
}
select {
  width: 30%;
  border: #fa6c6c solid 2px;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 20px;
  margin-top: 5px;
  color: #fa6c6c;
}
select::after {
  background-color: #f8d5d5;
  opacity: 80%;
}
#submit {
  border: none;
  border-radius: 20px;
  padding: 20px;
  font-size: 20px;
  background-color: #fa6c6c;
  color: white;
  width: 20%;
}

::placeholder {
  color: #fa6c6c;
}
h2 {
  color: #fa6c6c;
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
label {
  color: #707070;
  font-size: 20px;
}
#หางาน {
  border: none;
  padding: 20px;
  font-size: 20px;
  background-color: #fa6c6c;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
  width: 40%;
}

form {
  margin: 0;
  border: #fa6c6c solid 2px;
  border-radius: 40px;
  padding: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
}
section {
  width: 100%;
  margin-bottom: 20px;
}
</style>