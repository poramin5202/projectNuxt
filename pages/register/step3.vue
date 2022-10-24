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
  }
}
</script>