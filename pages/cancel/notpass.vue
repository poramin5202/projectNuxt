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
               indeterminate
                    label="อยู่ในช่วงที่สามารถยกเลิก"
                    color="success"
                    value="success"
                    hide-details
                    readonly
                    class="ml-5"
            ></v-checkbox>
                </v-col>
                <v-col cols="12">
                            <v-btn class="w100 my-btn mt-5 " width="100%" rounded color="#555555" readonly >    Cancel </v-btn>
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
        getCancel(){
           return this.$store.getters.getCancel;
        }

    },
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
        data () {
      return {
        ex4: ['success'],
      }
    }
}
</script>