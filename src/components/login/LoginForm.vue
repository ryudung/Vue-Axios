<template lang="html">
  <div class="">
    <form novalidate @submit.stop.prevent="submit">
  <md-input-container>
    <label>ID</label>
    <md-input type="text" v-model='id'></md-input>
  </md-input-container>

  <md-input-container>
    <label>Password</label>
    <md-input type="password" v-model='pw'></md-input>
  </md-input-container>
  <md-button @click='login' class="md-raised md-primary">Login</md-button>
</form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id:'',
      pw:''
    }
  },
  methods:{
    login(){
      console.log('id: '+this.id);
      console.log('pw: '+this.pw);
      this.navigateToMain();
    },
    navigateToMain(){
      this.$router.push('home');
    }
  }
}
</script>

<style lang="css">
</style>
