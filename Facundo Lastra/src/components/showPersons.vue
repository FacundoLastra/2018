<template>
    <section>
          <h2>¿Como desea visualizar?</h2>
        <select @change="getPersons" name="options" v-model="filtro">
            <option value="todos" selected>Todos</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
        </select>
        <ul>
            <li v-for="persona in this.getPersons" :key="persona.id">
                <singlePerson :person="persona" :id="persona.id" @edit="editPerson" @delete="deletePerson"></singlePerson>
            </li>
        </ul>
        <h3>Hay {{getPersons.length}} persona/s</h3>
    </section>
</template>
<script>
import singlePerson from "./singlePerson.vue";
import router from "@/router";
import personsService from "@/service/personsService.js";
export default {
  name: "showPersons",
   data() {
    return {
      filtro: "todos",
      persons: []
    };
  },
  components: {
    singlePerson
  },
  created() {
    this.persons = personsService.getAll();
  },
  computed: {
    getPersons: function() {
      let personsfiltred;
      if (this.filtro == "todos") {
        personsfiltred = this.persons;
      } else {
        personsfiltred = this.persons.filter(
          (persona) => persona.sexo === this.filtro
        );
      }
      return personsfiltred;
    }
  },
  methods: {
    editPerson(idPerson){
      router.push({ name: 'edit', params: { id: idPerson }});
    },
    deletePerson(personId){
      let persontoDelete = this.persons.find(per => per.id === personId);
      let ind = this.persons.indexOf(persontoDelete);
      this.persons.splice(ind,1);
      personsService.saveAll(this.persons);
    }
  }
};
</script>
<style>
</style>


