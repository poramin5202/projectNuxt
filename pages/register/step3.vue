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
        </div>
 </template>
 <script>
 export default {
computed: {
        getBt(){
           return this.$store.getters.getBt;
        },
        getDatahair(){
           return this.$store.getters.getDatahair;
        }
    },
    data(){
        return {
          
        }
  },
  methods:{
    next() {
           
           if( this.$store.getters.getBt.bt == false){
               this.dialog=true
           }else{
                       this.$router.push("/register/verify");
           }
  
                },
    back() {
               this.$router.push("/register/step2");
           }
                },
  }

</script>