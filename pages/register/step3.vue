<template>
    <div>
        <v-app-bar
      color="primary"
      dense
      flat
      dark
    >
    <v-toolbar-title>สรุป</v-toolbar-title>
        </v-app-bar>
        <v-container class="pt-0 pb-0">
          <v-row>
            <v-col cols="12" >
                    <div class="mt-8 text-primary text-title text-center">
                    Step 3 to 4 
                   </div>
                   <br>
                   <h3 class=" text-center"> ตรวจสอบรายละเอียด </h3>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    outlined
                    readonly
                    height="220"
                    success
                    name="input-7-4"
                    label="สรุปรายละเลียด"
                    :value = " 'ชื่อในการจอง : '+getDatahair.name+ 
                      '\nเบอร์ติดต่อ     : '+getDatahair.phoneNumber+
                      '\nอีเมลติดต่อ     : '+getDatahair.email+
                      '\nวันที่จองคิว     : '+getDatahair.date+
                      '\nช่างที่เลือก      : '+getDatahair.perple+
                      '\nเวลาจอง         : '+getDatahair.time+
                      '\nเพิ่มเติมถึงช่าง : '+getDatahair.etc
                      "
                ></v-textarea>
                </v-col>
            <v-col cols="12">
              <v-btn class="w100 my-btn mt-5 " width="100%" rounded color="primary" dark  @click="next">    Next </v-btn>  
              <v-btn class="w100 my-btn mt-5" width="100%" rounded color="#C0F0F0"   @click="back">    Back </v-btn>
            </v-col>

          </v-row>
        </v-container>
        <div class="mb-0 mt-10">
            <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Nuxt+Vuetify</strong><h6>By.ECT_Barber Shop Booking System</h6>
    </v-col>
  </v-footer>
        </div>
        </div>
 </template>
 <script>
 export default {
  data() {
        return{
            form:{
      dateEnd: '',
      timeEnd: '',
      minute:'',
      min:'',
      hour:'',
      hor:'',
      summinute:''
     }
   }
  },
computed: {
        getBt(){
           return this.$store.getters.getBt;
        },
        getDatahair(){
           return this.$store.getters.getDatahair;
        }
    },
    
  methods:{
    next() {
           
           if( this.$store.getters.getBt.bt == false){
               this.dialog=true
           }else{
          this.$store.dispatch('setTime', this.form)
           this.$router.push("/register/verify");
           }
  
                },
    back() {
               this.$router.push("/register/step2");
           },
     printDate: function () {
        return new Date().toLocaleDateString();
      },
      printTime: function () {
        return new Date().toLocaleTimeString();
      },
                },
    mounted: function () {
      this.form.dateEnd = this.printDate();
     // console.log(this.printDate())
      const d = Number((this.printDate().slice(0, 2)));
      //console.log(d)
      const m = Number((this.printDate().slice(3, 5)));
     //console.log(m)
      const y= Number((this.printDate().slice(6, 10)));
     // console.log(y)


      this.form.timeEnd = this.printTime();
      this.form.min = (this.form.timeEnd.slice(3, 5));
      this.form.minute = Number(this.form.min);
      this.form.hor = (this.form.timeEnd.slice(0, 2));
      this.form.hour = Number(this.form.hor);

      this.form.summinute = (this.form.hour*60)+(this.form.minute)+( (1440*d)+(44640*m)+(525600*y) );
    },
  }

</script>