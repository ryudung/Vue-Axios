<template lang="html">
  <div class="">
    {{geoLocation}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      geoLocation:{}
    }
  },
  methods:{
    getGeoLocation(){
      var self = this;
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
        self.geoLocation = position;
        self.getGeoAPI();
      });
    },
    getGeoAPI() {
     var self = this;

      axios.get('')
      .then((result) => {
        console.log(result.data.RealtimeCityAir.row[0]);
        self.geoLocation = result.data.RealtimeCityAir.row[0];

        //this.geoLocation =
      })
    }
  },
  created(){
    if(window.navigator.geolocation){
      console.log('geoLocation 사용가능');
      this.getGeoLocation();
    }else{
      alert('geoLocation 사용불가');
    }
  }
}
</script>

<style lang="css">
</style>
