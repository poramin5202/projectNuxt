<template>
    <div>
        <v-app-bar
      color="#20DE79"
      dense
      flat
      dark
    >
    <v-toolbar-title>Success ✓</v-toolbar-title>
        </v-app-bar>
        <v-container class="pt-0 pb-0">
          <v-row>
            <v-col cols="12" >
                    <div class="mt-8 text-primary text-title text-center">
                    Step 4 to 4
                      </div>
                </v-col>

                <v-col cols="12" class="text-center">
                  <v-avatar
                    size="150"
                    center
                  >
                  <img
                       :src="this.$store.getters.getLine.pictureUrl"  
                    >
                  </v-avatar>
                  
               </v-col>
               <v-col class="text-center">
                  <h3 class="text-primary">ขอบคุณที่ใช้บริการ</h3> 
                   {{ getLine.displayName}}
               </v-col>

                <v-col cols="12">
                  <v-textarea
                    outlined
                    readonly
                    height="100"
                    success
                    name="input-7-4"
                    label="รายละเอียดอื่นๆหลังการจองคิว"
                    :value = " 
                    'จองคิวเสร็จสิ้นวันที่ : '+getTime.date+ 
                    '\nจองคิวเสร็จสิ้นเวลา : '+getTime.time+
                    '\n(ยกเลิก หรือ เปลี่ยนเวลา ได้ตามเงื่อนไขที่กำหนด) '
                      "
                ></v-textarea>
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
    computed: {
        getLine(){
           return this.$store.getters.getLine;
        },
        getTime(){
           return this.$store.getters.getTime;
        }
    },
    
};
</script>