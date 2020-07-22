<template>
  <div class = "grey darken-1 empty-layout">
    <router-view/>
  </div>

</template>

<script>
  import messages from "../utils/messages";
  export default {
    computed:{
      error()  {
        return this.$store.getters.error //when getters changed, renewed this computed property
      }
    },
    watch: {
      error(fbError){
        console.log(fbError)
        this.$error(messages[fbError.code] || 'Что-то пошло не так')
      }
    }
  }
</script>
