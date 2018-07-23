<template>
  <div class="container">
    <header>
    <div class="header" style="max-width:100%">
    <h1>{{title}}</h1>
    <input type="text" v-model="name" v-on:keyup.enter="getComics" placeholder="Shearch comics ...">
    <select>
      <option value="Comics">Comics</option>
      <option value="Author">Author</option>
    </select>
    </div>  
    </header>
    <main>
    <div class="comics" v-for="content in contents" :key="content.id">
        <router-link :to ="'/comics/' + content.id"><img v-if="content.images.length > 0" :src="content.images[0].path + '.jpg'" alt="" style="max-width: 100%"></router-link>
    </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      title: 'MARVELDEX',
      name: '',
      contents:[],
      v_offset: 0
    }
  },
  methods: {

    getComics() {
      return axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=200&titleStartsWith='+this.name+
      '&limit=20&offset='+this.v_offset+'&apikey=51b5cc962a5a02f71eeb2d22812a1d76&hash=25a28cb827a496759cb3bc00dd173578')
      .then(res => {this.contents = [...this.contents , ...res.data.data.results];
      this.v_offset += 20})
      
    },
    
    scroll() {
      window.onscroll = () => {
        let bottomofWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if(bottomofWindow) {
        this.getComics();
        console.log(this.contents)
        }
      }
    }
  },

  mounted () {
    this.scroll();
  }
}
</script>

<style scoped>

header {
  background-color: black;
  display: grid;
  grid-template-columns: 1fr minmax(0, 60em) 1fr;

  }

.header {
  background-color: black;
  display: grid;
  grid-column: 2/-2;
  grid-template-columns: 1fr 1fr 1fr;
}

h1 {
  color: red;
  display: inline;
  text-align: center;
}

input {
margin: 15px;
}

select {
margin: 15px;
}

main {
  display: grid;
  grid-template-columns:repeat(5, 1fr);
}

.comics {
  display: flex;
  justify-content: center;
}
</style>