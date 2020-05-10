<template>
 <div>
  <b-card
    tag='article'
    style='max-width: 20rem; min-width: 20rem'
    class='mb-2'
  >
    <b-card-img
      :src="'/images/' + instrumentoParam.imagen"
        alt='Image'
        style='min-height:200px; max-height:200px'
    ></b-card-img>
    <b-card-title :title="instrumentoParam.nombre"></b-card-title>
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
      </div>
  </b-card>
  </div>
</template>

<script>
export default {
    props: ['instrumentoParam']
}
</script>
<style lang=''></style>