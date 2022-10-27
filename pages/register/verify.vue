<template>
    <div>
              {{next()}}
    </div>
                </template>
<script>
export default {
    data() {
        return{
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
    methods: {
      printDate: function () {
        return new Date().toLocaleDateString();
      },
      printTime: function () {
        return new Date().toLocaleTimeString();
      },
      next() {
          if(this.form.summinute != '0'){
           this.$store.dispatch('setTime', this.form)
           this.$axios.patch(`https://projectbarber64-9435e-default-rtdb.asia-southeast1.firebasedatabase.app/userLineliff/${this.$store.getters.getLine.userId}/data.json`, this.$store.getters.getLine)
           this.$axios.patch(`https://projectbarber64-9435e-default-rtdb.asia-southeast1.firebasedatabase.app/userLineliff/${this.$store.getters.getLine.userId}/data.json`, this.$store.getters.getTime)
           this.$axios.patch(`https://projectbarber64-9435e-default-rtdb.asia-southeast1.firebasedatabase.app/userLineliff/${this.$store.getters.getLine.userId}/data.json`, this.$store.getters.getDatahair).then((res) => {
            this.$router.push("/register/step4")
           })
         
        }else{
            this.$router.push("/register/verify");
        }
           }
       
    },
    mounted: function () {
      this.form.dateEnd = this.printDate();
      this.form.timeEnd = this.printTime();
      this.form.min = (this.form.timeEnd.slice(3, 5));
      this.form.minute = Number(this.form.min);
      this.form.hor = (this.form.timeEnd.slice(0, 2));
      this.form.hour = Number(this.form.hor);
      this.form.summinute = (this.form.hour*60)+(this.form.minute);
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
        }
    },
    
    
};
</script>