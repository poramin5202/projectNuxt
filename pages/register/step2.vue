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
                         label="Name"> 
                    </v-text-field>
                    <v-text-field 
                         v-model="form.phoneNumber"
                         dense
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
                                prepend-icon="mdi-account"
                                single-line
                                class="pt-0 pl-0 mt-0"
                            ></v-select>
                            </v-col>
                    <v-btn class="w100 my-btn mt-5 " width="100%" rounded color="primary" dark  @click="next">    Next </v-btn>
                    </v-form>
                
                </v-col>


                
         </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
          form: {
                name: '',
                phoneNumber:'',
                date:new Date().toISOString().substring(0,10),  
                perple:''      
            },
            modal: false,
            states: [ 'jom','att','poramin']
        }
    },
    methods: {
     next() {
         
            this.$store.dispatch('setHair', this.form)
             this.$router.push("/register/step3");
         
         if(this.form.bt==false){
             this.dialog=true
         }
     }
 }
}
</script>

