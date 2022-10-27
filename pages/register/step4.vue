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
                   
                   <img v-if="this.$store.getters.getLine.pictureUrl == ''" src="~/assets/bar.png" alt="" width="155">
                   <img v-else :src="this.$store.getters.getLine.pictureUrl" alt="" width="155">
               </v-col>
               <v-col class="text-center">
                  <h3 class="text-primary">ขอบคุณที่ใช้บริการ</h3> 
                   {{ getLine.displayName}}
               </v-col>

                <v-col cols="12">
                  <v-textarea
                    outlined
                    readonly
                    height="220"
                    success
                    name="input-7-4"
                    label="รายละเอียดอื่นๆหลังการจองคิว"
                    :value = " 
                    'จองคิวเสร็จสิ้นเวลา : '+getTime.date+ 
                      '\nเบอร์ติดต่อ     : '+getDatahair.phoneNumber+
                      '\nวันที่จองคิว     : '+getDatahair.date+
                      '\nช่างที่เลือก      : '+getDatahair.perple+
                      '\nเวลาจอง         : '+getDatahair.time+
                      '\nเพิ่มเติมถึงช่าง : '+getDatahair.etc
                      "
                ></v-textarea>
                </v-col>
            <v-col cols="12">
              <h3>จองเวลา {{ date }} <br> </h3>
              <h3>จองเวลา {{ time }} <br> </h3>
              <h3>นาที่ {{ minute }} <br> </h3>
              <h3>ชม {{ hour }} <br> </h3>
              <h3>ชม {{ summinute }} <br> </h3>
            </v-col>
          </v-row>
        </v-container>
        </div>
 </template>

<script>
export default {
    data: () => ({
      date: '',
      time: '',
      minute:'',
      min:'',
      hour:'',
      hor:'',
      summinute:''
    }),
    methods: {
      printDate: function () {
        return new Date().toLocaleDateString();
      },
      printTime: function () {
        return new Date().toLocaleTimeString();
      },
    },
    mounted: function () {
      this.date = this.printDate();
      this.time = this.printTime();
      this.min = (this.time.slice(3, 5));
      this.minute = Number(this.min);
      this.hor = (this.time.slice(0, 2));
      this.hour = Number(this.hor);
      this.summinute = (this.hour*60)+(this.minute);
    },
    computed: {
        getBt(){
           return this.$store.getters.getBt;
        },
        getDatahair(){
           return this.$store.getters.getDatahair;
        },
        getLine(){
           return this.$store.getters.getLine;
        },
        getTime(){
           return this.$store.getters.getTime;
        }
    },
    
};
</script>