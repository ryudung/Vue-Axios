<template>
  <div class="">
    <LoginHeader></LoginHeader>
    <LoginForm></LoginForm>
    <LoginSNS></LoginSNS>
  </div>
</template>

<script>
import LoginHeader from '../common/LoginHeader.vue'
import LoginForm from './LoginForm.vue'
import LoginSNS from './LoginSNS.vue'

export default {
  components:{
    LoginHeader:LoginHeader,
    LoginForm:LoginForm,
    LoginSNS:LoginSNS
  }
}
</script>

<style lang="css">
</style>
