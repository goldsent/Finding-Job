<template>
  <div class="home">
      <img src="../assets/mockup3.png" alt="mockup3" style="width:45%">
        <div style="width:45%">
            <h1 style="color:#fa6c6c;font-size:60px">รายงานของบริษัท</h1>
            <div class="subhome"  >
                <div  style="border:#fa6c6c 2px solid;border-radius:20px;width:40%; margin:30px 20px; padding:15px;text-align:center">
                    <h2 style="color:#fa6c6c">จำนวนผู้สมัครทั้งหมด</h2>
                    <label style="font-size:60px"><b>50</b></label>
                    <label style="font-size:30px" >คน</label>
                </div>
                <div  style="border:#fa6c6c 2px solid;border-radius:20px;width:40%;margin:30px 20px; padding:15px;text-align:center"> 
                    <h2 style="color:#fa6c6c">ประกาศงานทั้งหมด</h2>
                    <label style="font-size:60px"><b>4</b></label>
                    <label style="font-size:30px" >คน</label>
                </div>
                <div  style="border:#fa6c6c 2px solid;border-radius:20px; width:40%;margin:30px 20px; padding:15px;text-align:center">
                    <h2 style="color:#fa6c6c">เปิดเรซูเม่แล้วทั้งหมด  </h2>
                    <label style="font-size:60px"><strong>30</strong></label>
                    <label style="font-size:30px" >คน</label>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
name:"homeCompany",
}
</script>

<style scoped>
.subhome{
    display: flex;
    flex-wrap: wrap;
}
.home{
display:flex;
width:100%;
padding: 20px;
}
</style>