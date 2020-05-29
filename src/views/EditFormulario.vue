<template>
  <div>
    <strong>Editar Instrumento</strong>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Instrumento:"
        label-for="input-1"
        description="Ingrese el nombre del nuevo instrumento."
      >
        <b-form-input
          id="input-1"
          v-model="form.instrumento"
          type="text"
          required
          placeholder="Nuevo Intrumento"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Marca:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.marca"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Modelo:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.modelo"
          :options="modelos"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="precio:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.precio"
          type="number"
          required
          placeholder="Ingrese precio"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Costo de Envío:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.costoEnvio"
          required
          placeholder="Ingrese costo de Envío"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Cantidad Vendida:" label-for="input-6">
        <b-form-input
          id="input-5"
          v-model="form.cantidadVendida"
          type="number"
          required
          placeholder="Ingrese cantidad de instrumentos vendidos"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Descripción:" label-for="input-7">
        <b-form-input
          id="input-7"
          v-model="form.descripcion"
          type="text"
          required
          placeholder="Ingrese descripción del instrumento"
        ></b-form-input>
      </b-form-group>

    <br />     
        <b-form-file
      input type="file" required id="imagen" name="imagen"
      v-model="form.imagen"
      placeholder="Elija una imagen"
      drop-placeholder="Arrastre la imagen hasta aquí"
    ></b-form-file>
    <br />

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger" style="margin: 20px">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <b-button href='/producto' variant='dark'>IR A PRODUCTOS</b-button>
     <br />  <br />
  </div>
</template>

<script>
  const URL = 'http://localhost:9000/api/v1/instrumentoApiWeb';
  export default {
    props: ['instrumentoParam'],
    name: 'EditFormulario',
    components: {},
    mounted () {
        this.getInstrumentoXId()
      },
    data() {
      return {
        form: 
        {
          id: '',
          instrumento: '',
          marca: '',
          modelo: '',
          precio: '',
          costoEnvio: '',
          cantidadVendida: '',
          descripcion: ''
          ,imagen: null         
        }
        ,
        modelos: [{ text: 'Elija modelo', value: null }, 'Cuerda', 'Viento', 'Percusión', 'Cuerda/percusión'],
        show: true
      }
    },

     
    methods: {
      
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        this.updateInstrumentos(this.form)
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.instrumento = ''
        this.form.marca = ''
        this.form.modelo = null
        this.form.precio = ''
        this.form.costoEnvio = ''
        this.form.cantidadVendida = ''
        this.form.descripcion = ''
        this.form.imagen = null
       
     
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
       async getInstrumentoXId () {
            const parametroId = this.$route.params.id;
            const res = await fetch(URL + '/'+ parametroId);
            const resJson = await res.json();
            const instrumentoEncontrado = await resJson;
            this.form = await resJson;

            console.log(resJson);
            
            this.form.id = instrumentoEncontrado.id;
            this.form.instrumento = instrumentoEncontrado.instrumento;
            this.form.marca = instrumentoEncontrado.marca;
            this.form.modelo = instrumentoEncontrado.modelo;
            this.form.precio = instrumentoEncontrado.precio;
            this.form.costoEnvio = instrumentoEncontrado.costoEnvio;
            this.form.cantidadVendida = instrumentoEncontrado.cantidadVendida;
            this.form.descripcion = instrumentoEncontrado.descripcion;
            this.form.imagen = this.instrumentoEncontrado.imagen

            this.modelos.value = this.form.modelo;
    },
    async updateInstrumentos (frm) {
        const id = frm.id
        const instrumento = frm.instrumento
        const marca = frm.marca
        const modelo = frm.modelo
        const precio = frm.precio
        const costoEnvio = frm.costoEnvio
        const cantidadVendida = frm.cantidadVendida
        const descripcion = frm.descripcion
        //const imagen = frm.imagen;

        const imagen = document.getElementById('imagen').files[0].name;
        
        let h = new Headers();
        h.append('Accept', 'application/json');
        var formData = new FormData();
        formData.append("imagen", document.getElementById('imagen').files[0], imagen)


        let req = new Request(URL+'/saveImage',{
          method: 'POST',
          header: h,
          body: formData
        });



        const data = {
            id, instrumento, marca, modelo, precio, costoEnvio, cantidadVendida, descripcion,imagen
        }

      const res = await fetch(URL +'/'+ data.id,{
        method: 'PUT', 
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json'
       }
      })
      
      fetch(req);
       const resJson = await res.json().then(data=>{
         this.post(data).then(formData => {

                this.postImage(formData)
      });
     
     console.log(resJson);
      this.data = resJson;
      window.location.href = 'http://localhost:8080/producto';
    }
      )},
    
  }
    }
</script>