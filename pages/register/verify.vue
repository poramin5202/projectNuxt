<template>
    <div>
    {{next()}}
    </div>
                </template>
<script>
export default {

    methods: {
      
      next() {
           this.$router.push("/register/step4")
          }
         }    
    
    
};
</script>