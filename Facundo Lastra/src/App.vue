<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-if="this.editMode === null">
      <new-person  @agregarPersona="agregarPersona"></new-person>
    </div>
    <new-person v-else :personToModify=getEditMode @editPersonLastEmit="finalizeEdition"></new-person>
    <gender-selector @genderSelected="setFilter"></gender-selector>
    <show-persons :persons=getPersons @deletePerson="deletePerson" @editPersonStep1="editPersonStep1"></show-persons>

  </div>
</template>

<script>
import newPerson from "./components/newPerson.vue";
import genderSelector from "./components/genderSelector.vue";
import showPersons from "./components/showPersons.vue";

export default {
  name: "app",
  components: {
    newPerson,
    genderSelector,
    showPersons
  },
  data() {
    return {
      idInicial: 0,
      filtro: "todos",
      personas: [],
      totalPersons: 0,
      editMode: null
    };
  },
  computed: {
    getPersons: function() {
      let personsfiltred;
      if (this.filtro == "todos") {
        personsfiltred = this.personas;
      } else {
        personsfiltred = this.personas.filter(
          persona => persona.sexo === this.filtro
        );
      }
      return personsfiltred;
    },
    getEditMode: function() {
      return this.editMode;
    }
  },
  methods: {
    agregarPersona(newPersona) {
      this.personas.push({
        id: this.idInicial++,
        nombre: newPersona.nombre,
        sexo: newPersona.sexo,
        edad: newPersona.edad
      });
    },
    setFilter(filter) {
      if (filter) {
        this.filtro = filter;
      }
    },
    findPerson(person) {
      let found = this.personas.find(function(element) {
        return (
          element.nombre == person.nombre &&
          element.edad == person.edad &&
          element.sexo == person.sexo
        );
      });
      return found;
    },
    deletePerson(person) {
      if (person) {
        let found = this.findPerson(person);
        if (found) {
          this.personas = this.personas.filter(
            persona => persona.id !== found.id
          );
        }
      }
    },
    editPersonStep1(person) {
      if (person) {
        this.editMode = person;
      }
    },
    finalizeEdition(person) {
      if (person && this.editMode) {
        let found = this.findPerson(this.editMode);
        if (found) {
          found.nombre = person.nombre;
          found.sexo = person.sexo;
          found.edad = person.edad;
        }
        this.editMode = null;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
