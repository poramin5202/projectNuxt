<template>
<div>
        <v-app-bar
      color="primary"
      dense
      flat
      dark
    >
    <v-toolbar-title>จองคิวใช้บริการ</v-toolbar-title>
        </v-app-bar>
        <v-container class="pt-0 pb-0">
            <v-row>
                <v-col cols="12" >
                    <div class="mt-8 text-primary text-title text-center">
                    Step 2 to 4
                      </div>
                </v-col>
                <v-col cols="12">
                    <v-form>
                         <v-text-field 
                         v-model="form.name"
                         dense
                         required
                         prepend-icon="mdi-account"
                         :rules="nameRules"
                         label="Name"> 
                    </v-text-field>
                    <v-text-field 
                         v-model="form.phoneNumber"
                         dense
                         :rules="phoneRules"
                         prepend-icon="mdi-phone"
                         @keypress="onlyNumber($event,10)"
                         label="phoneNumber"> 
                    </v-text-field>

                    <v-dialog
                        ref="dialog"
                        v-model="modal"
                        persistent
                        width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="form.date"
                            label="Choose a booking date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            class="dateIcon mt-0 mb-0"
                            
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        :min="new Date().toISOString().substring(0,10)"
                        v-model="form.date"
                        scrollable
                        :allowed-dates="allowedDates"
                             >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="modal = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(date)"
                        >
                            OK
                        </v-btn>
                        </v-date-picker>
                        </v-dialog>
                        <v-col cols="12" class="pt-0 pl-0 mt-0">
                            <v-select
                                v-model="form.perple"
                                :items="states"
                                menu-props="auto"
                                label="เลือกช่าง"
                                hide-details
                                prepend-icon="mdi-account-filter"
                                single-line
                                class="pt-0 pl-0 mt-0"
                            ></v-select>
                            </v-col>

                            <v-col cols="12" class="pt-0 pl-0 mt-0">
                            <v-select
                                v-model="form.time"
                                :items="time"
                                menu-props="auto"
                                label="เลือกเวลา"
                                hide-details
                                prepend-icon="mdi-clock-time-five-outline"
                                single-line
                                class="pt-0 pl-0 mt-0"
                            ></v-select>
                            </v-col>
                            <v-col cols="12"  md="6" class="pt-0 pb-0">
                                <v-textarea 
                                v-model="form.etc"
                            dense
                            outlined
                            name="input-7-4"
                            label="รายละเอียดอื่นๆถึงช่าง"
                            value="- มัดจำ100 - ไม่มายึดเงิน - อ่านและกดยอมรับเงื่อนไข  Gread A +  (รอเขียนเพิ่ม)" >
                                </v-textarea>
                            </v-col>
                    <v-btn class="w100 my-btn mt-5 " width="100%" rounded color="primary" dark  @click="next">    Next </v-btn>
                    </v-form>
                
                </v-col>


                
         </v-row>
        </v-container>
        <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title>Form Error</v-card-title>
              <v-card-text>
                <h3>   กรุณาใส่ข้อมูลให้ครบ</h3>
             </v-card-text>
      </v-card>
    </v-dialog>
    </div>
</template>

<script>
const REGEX_PHONE = /^[0]([0-9]{9})*$/
const REGEX_NUMBER = /^[0-9]*$/
export default {
    computed: {
        getBt(){
           return this.$store.getters.getBt;
        },
        getDatahair(){
           return this.$store.getters.getHair;
        }
    },
    data(){
        return {
          form: {
                name: '',
                phoneNumber:'',
                date:'',  
                perple:'',
                time:'',
                etc:''      
            },
            modal: false,
            states: [ 'jom','att','poramin'],
            time: [ '10.00','10.30','11.00','11.30','12.00','12.30',
            '13.00','13.30','14.00','14.30','15.00','15.30','16.00','16.30',],
            nameRules:[ value => this.nameValidator(value) ],
            phoneRules:[value => this.phoneValidator(value)],
            dialog:false,
              }
    },
    methods: {
        nameValidator(value){
            if(value == ''){
                return 'กรุณากรอกชื่อที่ใช้จองคิว'
            }
            
        },
        phoneValidator(value){
            if(REGEX_PHONE.test(value) && value.length == 10){
                return true 
            }
            if(value == ''){
                return 'กรุณากรอกเบอร์โทรติดต่อ'
            }
            return "กรุณากรอกเบอร์โทรให้ถูกต้อง"
        },
        onlyNumber(event,max){
            if(event.target.value.length == 0){
                if(event.key != 0) {
                    return event.preventDefault()
                }
            }
            if(!REGEX_NUMBER.test(event.key) || event.target.value.length == max){
                return event.preventDefault()
            }
        },
     next() {
         
       // this.$store.dispatch('Datahair', this.form)
                //   this.$router.push("/register/step3");
         
         if(this.form.bt==false || this.form.name == "" || this.form.date == "" || this.form.perple == "" || this.form.time == "" || this.form.phoneNumber.length !=10 || this.bt == false){
             this.dialog=true
         }else{
                   this.$store.dispatch('setDatahair', this.form)
                   this.$router.push("/register/step3");
         }

              },
     //   allowedDates: val => { if( (new Date(val).toString().substring(0,3) != "Sun") && ( new Date(val).toString().substring(0,3) != "Sat" )) { return true } } 
             
      
 },
 
}
</script>

