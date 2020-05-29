<template>
  <div class='producto'>
    <b-container fluid>
      <b-card-group deck>
        <div
          v-for="instrumento in instrumentosData"
          :key="instrumento.id"
          style='margin-top:15px'
        >
          <instrumento-item :instrumentoParam="instrumento"></instrumento-item>
        </div>
      </b-card-group>
      <br />
      <b-button href='/' variant='dark' align='right'>IR A HOME</b-button>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Instrumento from '@/components/Instrumento.vue'

const URL = 'http://localhost:9000/api/v1/instrumentoApiWeb';

export default {
  name: 'Producto',
  components: {
    'instrumento-item': Instrumento
  },
  mounted () {
    this.getInstrumentos()
  }, 
  data () {
    return {
      instrumentosData: [] 
    }
  },
  methods: {
    async getInstrumentos () {
      const res = await fetch(URL +'/');
      const resJson = await res.json();
      console.log(resJson);
      this.instrumentosData = resJson;
    }
  
   
    }
}
</script>
