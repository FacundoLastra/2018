<template>
    <section>
      <h2 v-if="editMod">Por favor, modifique los datos de la persona</h2>
      <h2 v-else>Agregar Nueva Persona</h2>
      <p v-if="errors.length">
        <b>Por favor, corriga los siguientes error(es):</b>
        <ul>
            <li v-for="error in this.errors" :key="error.id">{{ error }}</li>
        </ul>
      </p>
      <input type="text" v-model="persona.nombre" placeholder="Ingresar nombre de persona">
      <span v-if="!persona.nombre">*Requerido*</span>
      <div>
          <div>
              <input type="radio" v-model="persona.sexo" value="Masculino" id="masculino">
              <label for="masculino">Masculino</label>
          </div>
          <div>
              <input type="radio" v-model="persona.sexo" value="Femenino" id="femenino">
              <label for="femenino">Femenino</label>
          </div>
          <div>
              <input type="radio" v-model="persona.sexo" value="Otro" id="otro">
              <label for="otro">otro</label>
          </div>
          <span v-if="!persona.sexo">*Requerido*</span>
      </div>
      <input type="number" v-model="persona.edad" placeholder="edad">
      <span v-if="!persona.edad">*Requerido*</span>

      <button v-if="!editMod" @click="enviarPersona()">Agregar</button>
      <button v-else @click="enviarPersona()">Confirmar Edicion</button>
    </section>
    
</template>
<script>
export default {
  name: "NewPerson",
  data() {
    return {
      persona: {
        nombre: "",
        sexo: "",
        edad: 0
      },
      errors: [],
      editMod: false
    };
  },
  props: ["personToModify"],
  beforeMount: function() {
    if (this.personToModify && this.editMod == false) {
      this.persona.nombre = this.personToModify.nombre;
      this.persona.sexo = this.personToModify.sexo;
      this.persona.edad = this.personToModify.edad;
      this.editMod = true;
    }
  },
  methods: {
    validarForm() {
      this.errors = [];
      if (
        this.persona.nombre &&
        this.persona.edad > -1 &&
        this.persona.edad < 200 &&
        this.persona.sexo
      ) {
        return true;
      }
      if (!this.persona.nombre) {
        this.errors.push("Nombre debe contener datos");
      }
      if (typeof this.persona.edad != "number") {
        this.errors.push("Edad debe contener un numero");
      } else if (this.persona.edad < 0) {
        this.errors.push("La edad no puede ser negativa");
      } else if (this.persona.edad > 200) {
        this.errors.push("La edad supera el limite permitido");
      }
      if (!this.persona.sexo) {
        this.errors.push("Debe seleccionar un sexo");
      }
    },
    enviarPersona() {
      if (this.validarForm()) {
        let copy = Object.assign({}, this.persona);
        if (!this.editMod) {
          this.$emit("agregarPersona", copy);
        } else {
          this.$emit("editPersonLastEmit", copy);
          this.editMod = false;
        }
      }
      this.persona.nombre = "";
      this.persona.sexo = "";
      this.persona.edad = 0;
    }
  }
};
</script>
<style>
</style>


