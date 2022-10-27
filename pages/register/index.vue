<template>
    <div>
        <v-app-bar
      color="primary"
      dense
      flat
      dark
    >
    <v-toolbar-title>ตรวจสอบเงื่อนไข</v-toolbar-title>
        </v-app-bar>
        <v-container class="pt-0 pb-0">
            <v-row>
                <v-col cols="12" >
                    <div class="mt-8 text-primary text-title text-center">
                    Step 1 to 4
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
        <v-col cols="12"  md="6" class="pt-0 pb-0">
             <v-textarea 
             readonly
          dense
          outlined
          name="input-7-4"
          label="เงื่อนไขการใช้บริการจองคิว"
          value="- มัดจำ100 - ไม่มายึดเงิน - อ่านและกดยอมรับเงื่อนไข  Gread A +  (รอเขียนเพิ่ม)" >
              </v-textarea>
        </v-col>
      <v-col cols="12" >
    <div class="bt-group d-flex mt-0">
        <h3 style="align-self: center;"> ยอมรับเงื่อนไข คลิก >> &nbsp;</h3>
        <div class="circle" :class="form.bt==true ? 'active' : ''" @click="validate(true)">
             <h1>&nbsp;✓</h1> 
        </div>
    </div>
</v-col>
      <v-col class="pt-0 pb-0">
        <v-form >
          
            <v-btn class="w100 my-btn mt-0 " width="100%" rounded color="primary" dark  @click="next"> 
           Next </v-btn>
          
        </v-form>
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
    <v-dialog 
    v-model="dialog" 
    max-width="290"
    transition="dialog-bottom-transition"
    dark>
      <v-card>
        <v-card-title>Form Error</v-card-title>
              <v-card-text>
                <h3>   กรุณากดปุ่มยอมรับเงื่อนไขเพื่อใช้บริการ</h3>
             </v-card-text>
      </v-card>
    </v-dialog>

    </div>
</template>

<script>

export default {
    mounted(){
            liff.init({
                liffId: '1657521762-klyEy4wR'
            }).then(() => {
                if(liff.isLoggedIn()){
                    liff.getProfile().then(profile => {
                        this.$store.dispatch('setLine',profile);
                    })
                }else{
                    liff.login();
                }
            })
        }, 
    computed: {
        getLine(){
           return this.$store.getters.getLine;
        }
    },
    data() {
        return {
          
            dialog:false,
            form: {
                bt:false
            }
        };
    },
    methods: {
     
        validate() {
            this.form.bt =  !this.form.bt
        },
        next() {
            if (this.form.bt==true) {
                this.$store.dispatch('setbt',this.form)
                this.$router.push("/register/step2");
            }
            if(this.form.bt==false){
                this.dialog=true
            }
        },
    }
}

</script>


<style lang="scss" scoped>
.bt-group{
    .circle{
        width: 45px;
        height: 45px;
        background: rgb(212, 189, 189);
        color: white;
        border-radius: 50%;
        position: relative;
       &.active{
        background: #1a56BE;
       }
    }
}
</style>
