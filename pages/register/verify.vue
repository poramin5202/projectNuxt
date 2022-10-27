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
        for(i=0; i<12 ||this.form.summinute > 0;i++){
          if(this.form.dateEnd != '') {
           this.$store.dispatch('setTime', this.form)
           this.$router.push("/register/step4")
           }
          }

           if(this.form.dateEnd != '') {
           this.$store.dispatch('setTime', this.form)
           this.$router.push("/register/step4")
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