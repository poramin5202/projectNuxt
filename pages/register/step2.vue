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
                    Step 2 to 2
                      </div>
                </v-col>
                <v-col cols="12">
                    <v-form>
                         <v-text-field 
                         v-model="form.name"
                         dense
                         label="name"> 
                    </v-text-field>
                    <v-text-field 
                         v-model="form.phone"
                         dense
                         label="phoneNumber"> 
                    </v-text-field>
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
                
            }
        }
    }
}
</script>