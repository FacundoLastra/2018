<template>
<div>
    <section>
      <h2 v-if="editMod">Por favor, modifique los datos de la persona</h2>
      <h2 v-else>Agregar Nueva Persona</h2>
      
      <p v-if="errors.length">
        <b>Por favor, corriga los siguientes error(es):</b>
        <ul>
            <li v-for="error in this.errors" :key="error.id">{{ error }}</li>
        </ul>
      </p>
      <el-row>
        <el-col :span="8" :offset="8">
          <div class="form">
            <el-form ref="form" label-width="120px">
              <el-form-item label="Nombre:">
                <el-input v-model="persona.nombre"></el-input>
              </el-form-item>
              <el-form-item label="Edad" >
                <el-input-number v-model="persona.edad" :min="0" :max="125"></el-input-number>
              </el-form-item>
              <el-form-item label="Genero:">
                <el-select v-model="persona.sexo" placeholder="por favor seleccione su genero">
                  <el-option label="Masculino" value="Masculino"></el-option>
                  <el-option label="Femenino" value="Femenino"></el-option>
                  <el-option label="Otro" value="Otro"></el-option>
                </el-select>
                </el-form-item>
              <el-form-item>
                <el-button type="primary" v-if="!editMod" @click="enviarPersona()">Crear Persona</el-button>
                <el-button type="primary" v-else @click="enviarPersona()">Editar Persona</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </section>
    
    </div>
</template>
<script>
import router from "@/router";
import personsService from "@/service/personsService.js";
export default {
  name: "NewPerson",
  data() {
    return {
      persona: {
        nombre: "",
        sexo: "",
        edad: 0,
        id: 0
      },
      errors: [],
      editMod: false
    };
  },
  beforeMount: function() {
    if (this.$route.params.id !== undefined) {
      personsService.getOne(this.$route.params.id).then(person => {
        this.persona.nombre = person.nombre;
        this.persona.sexo = person.sexo;
        this.persona.edad = person.edad;
        this.editMod = true;
      });
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
          personsService.save(copy);
        } else {
          copy.id = this.$route.params.id;
          personsService.editPerson(copy);
          this.editMod = false;
        }
        this.persona.nombre = "";
        this.persona.sexo = "";
        this.persona.edad = 0;
        router.push("/");
      }
      
    }
  }
};
</script>
<style>
</style>


