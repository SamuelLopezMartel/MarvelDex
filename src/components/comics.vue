<template>
  <div class="container">
  <div class="img">
  <img :src="data[0].images[0].path + '.jpg'" alt="">
  </div>
  <div>
    {{data[0].description}}
  </div>
  
  </div>
</template>




<script>
import axios from 'axios'
export default {
  name: 'home',
  created (){
    this.id = this.$route.params.id;
    this.getDataComic();
  },
  data () {
    return {
      msg: 'comics',
      id:'',
      data:[],
    }
  },
  methods: {
    getDataComic () {
      axios.get('https://gateway.marvel.com:443/v1/public/comics/'+
      this.id+'?ts=200&apikey=51b5cc962a5a02f71eeb2d22812a1d76&hash=25a28cb827a496759cb3bc00dd173578')
      .then(res => this.data = res.data.data.results);
    }
  }
}
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
}

.img{
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
}
</style>

