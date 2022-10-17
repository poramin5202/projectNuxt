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
            <v-col cols="12">
              <h3>จองเวลา {{ date }} <br> </h3>
              <h3>จองเวลา {{ time }} <br> </h3>
              <h3>จองเวลา {{ min }} <br> </h3>
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
    
};
</script>