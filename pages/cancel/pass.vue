<template>
    <div>
        <v-app-bar
      color="#F01414"
      dense
      flat
      dark
    >
    <v-toolbar-title>ยกเลิกการจองคิว</v-toolbar-title>
        </v-app-bar>
        <v-container class="pt-0 pb-0">
            <v-row>
                <v-col cols="12" >
                    <div class="mt-8 text-primary text-title text-center">
                    Check booking status
                </div>
                </v-col>
                <v-col cols="12" class="text-center">
                    <v-avatar
                    size="150"
                    center
                  >
                  <img
                  :src="getLine.pictureUrl" 
                    >
                  </v-avatar>
                    
                </v-col>
                 <v-col class="text-center">
                   <h3 class="text-primary">สวัสดีคุณ</h3> 
                    {{ getLine.displayName}}
                </v-col>
                <v-col cols="12">
             <v-checkbox
                    v-model="ex4"
                    label="ทำการจองคิวเรียบร้อย"
                    color="success"
                    value="success"
                    hide-details
                    readonly
                    class="ml-5"
            ></v-checkbox>
            <v-checkbox
                    v-model="ex4"
                    label="อยู่ในช่วงที่สามารถยกเลิก"
                    color="success"
                    value="success"
                    hide-details
                    readonly
                    class="ml-5"
            ></v-checkbox>
                </v-col>
                <v-col cols="12">
                            <v-btn class="w100 my-btn mt-5 " width="100%" rounded color="#FFA500"  @click="next">    Cancel Booking </v-btn>
                        </v-col>
                {{checknot()}}

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
    mounted(){
            liff.init({
                liffId: '1657521762-vLzxz6Ee'
            }).then(() => {
                if(liff.isLoggedIn()){
                    liff.getProfile().then(profile => {
                        this.$store.dispatch('setLine',profile);
                        this.$axios.get(`https://projectbarber64-9435e-default-rtdb.asia-southeast1.firebasedatabase.app/userLineliff/${this.$store.getters.getLine.userId}/data.json`).then((res) => {
                        this.$store.dispatch('setCancel',res.data);
                        });
                    })
                }else{
                    liff.login();
                }
            })
        }, 
        computed: {
        getLine(){
           return this.$store.getters.getLine;
        },
        getCancel(){
           return this.$store.getters.getCancel;
        }

    },
    data () {
      return {
        ex4: ['success'],
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
    methods:{
        checknot(){
             if( ((this.form.summinute) - (this.$store.getters.getCancel.summinute)) >= 60){
                this.$router.push("/cancel/notpass");
            }
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
      const d = Number((this.printDate().slice(0, 2)));  //รอแก้
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