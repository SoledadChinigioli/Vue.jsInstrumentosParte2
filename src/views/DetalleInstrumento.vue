<template>
  <div>
    <b-container fluid>
        <b-row>
          <b-col> <img
            style='max-height:400px'
            :src="require('D:/Sole/Documents/workspace-sts-3.9.8.RELEASE/backInstrumentos/TP2REACT/backInstrumentos/target/classes/images/' + instrumentoEncontrado.imagen)"
        /><br /><br />
         <b-row>
            <b-col
              ><h4>Descripción: {{ instrumentoEncontrado.descripcion }}</h4></b-col>
          </b-row>
        </b-col>
        <b-col>
            <b-row>
            <b-col
              ><h6>Cantidad Vendida: {{ instrumentoEncontrado.cantidadVendida}}</h6></b-col>
          </b-row>
            <b-row>
            <b-col
              ><h1><strong>{{ instrumentoEncontrado.instrumento }}</strong></h1></b-col>
          </b-row>
           <b-row>
            <b-col
              ><h3>Marca: {{ instrumentoEncontrado.marca }}</h3></b-col>
          </b-row>
           <b-row>
            <b-col
              ><h3>Modelo: {{ instrumentoEncontrado.modelo }}</h3></b-col>
          </b-row>
           <b-row>
            <b-col
              ><h3>Precio: ${{ instrumentoEncontrado.precio }}</h3>
              <span style='color:green' v-if="instrumentoEncontrado.costoEnvio == 'G'"><img :src="'/images/camion.png'">Envío gratis a todo el país</span>
              <span style='color:red' v-else>Costo de Envío: ${{ instrumentoEncontrado.costoEnvio }}</span>
              </b-col>
          </b-row>
          <br /><br />
          <b-row style='text-align:left'>
            <b-col
              ><b-button href='/producto' variant='outline-info'
                >VOLVER</b-button
              ></b-col
            >
             <b-col
              ><b-button href='/' variant='outline-success'
                ><img style='max-height:20px' :src="'/images/carrito.png'"> Agregar al carrito </b-button
              ></b-col
            >
          </b-row>
        </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>

const URL = 'http://localhost:9000/api/v1/instrumentoApiWeb';
export default {
  
    name: 'DetalleInstrumento',
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
          debugger;
            const parametroId = this.$route.params.id
            const res = await fetch(URL + '/'+ parametroId);
            const resJson = await res.json();
            this.instrumentoEncontrado = await resJson;
            console.log(resJson);
    }
}
}
</script>>
