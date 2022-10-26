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
                    name="input-7-4"
                    label="สรุปรายละเลียด"
                    :value = " 'ชื่อในการจอง : '+getDatahair.name+ 
                      '\nเบอร์ติดต่อ     : '+getDatahair.phoneNumber+
                      '\nวันที่จองคิว     : '+getDatahair.date+
                      '\nช่างที่เลือก      : '+getDatahair.perple+
                      '\nเวลาจอง         : '+getDatahair.time
                      "
                ></v-textarea>
                </v-col>
            <v-col cols="12">
             {{getDatahair.name}}    
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
           
           if(this.form.bt==false || this.form.name == "" || this.form.date == "" || this.form.perple == "" || this.form.time == "" || this.form.phoneNumber.length !=10 || this.bt == false){
               this.dialog=true
           }else{
                     this.$store.dispatch('setDatahair', this.form)
                     this.$router.push("/register/step4");
           }
  
                },
  }
}
</script>