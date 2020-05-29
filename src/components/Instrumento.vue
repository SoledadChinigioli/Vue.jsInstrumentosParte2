<template>
 <div>
  <b-card
    tag='article'
    style='max-width: 20rem; min-width: 20rem'
    class='mb-2'
  >
    <b-card-img
      :src="require('D:/Sole/Documents/workspace-sts-3.9.8.RELEASE/backInstrumentos/TP2REACT/backInstrumentos/target/classes/images/' + instrumentoParam.imagen)"
        alt='Image'
        style='min-height:200px; max-height:200px'
    ></b-card-img>
    <b-card-title :title="instrumentoParam.instrumento"></b-card-title>
    <b-card-text>
        $ {{ instrumentoParam.precio }}
        <br />
         <span style='color:green' v-if="instrumentoParam.costoEnvio == 'G'"><img :src="'/images/camion.png'">Envío gratis a todo el país</span>
         <span style='color:red' v-else>Costo de Envío: ${{ instrumentoParam.costoEnvio }}</span>
    </b-card-text>
     <div style='text-align:center'>
        <b-button
          :href="'/detalle/' + instrumentoParam.id"
          variant='primary'
          style='width:100%'>
            <b>Detalle</b>
        </b-button>
        <b-button :href="'/editFormulario/'+instrumentoParam.id"  variant='warning'>Editar</b-button>
        <b-button variant='danger' style="margin: 20px"  @click="eliminar(instrumentoParam.id)">Eliminar</b-button>
      </div>
  </b-card>
  </div>
</template>

<script>
const URL = 'http://localhost:9000/api/v1/instrumentoApiWeb';

export default {
    props: ['instrumentoParam'],
    name: 'instrumento',
    components: {},
    mounted () {
        this.getInstrumentoXId()
    },
    data () {
        return{
            instrumentoEncontrado: []
        }
    },
    methods: {
        async getInstrumentoXId () {
            const parametroId = this.$route.params.id
            const res = await fetch(URL + '/editFormulario/'+ parametroId);
            const resJson = await res.json();
            this.instrumentoEncontrado = await resJson;
            console.log(resJson);
    },
    async eliminar(id){
      if(confirm("¿Seguro que desea eliminar el registro? Si acepta, no podrá recuperar el instrumento.")){
      const res = await fetch(URL + '/'+ id,{
        method: 'DELETE'
      });      
      const resJson = await res.json();
      console.log(resJson);

      window.location.href = 'http://localhost:8080/producto';
      }
    }
}
}
</script>
<style lang=''></style>