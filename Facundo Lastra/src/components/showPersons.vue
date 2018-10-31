<template>
    <section>
      <el-row>
        <el-col :span="8" :offset="8">
          <h2>¿Como desea visualizar?</h2>
        <el-select v-model="filtro" placeholder="Todos" @change="getPersons">
          <el-option
            :label="'Todos'"
            :value="'todos'">
          </el-option>
          <el-option
            :label="'Masculino'"
            :value="'Masculino'">
          </el-option>
          <el-option
            :label="'Femenino'"
            :value="'Femenino'">
          </el-option>
          <el-option
            :label="'Otro'"
            :value="'Otro'">
          </el-option>
        </el-select>
        </el-col>
        <el-col :span="8">
            <h3>Hay {{getPersons.length}} persona/s</h3>
          </el-col>   
      </el-row>
        <el-row>        
          <el-col :span="8" :offset="8">
            <div v-for="persona in this.getPersons" :key="persona.id" class="grid-content bg-purple-light">
                <singlePerson :person="persona" :id="persona.id" @edit="editPerson" @delete="deletePerson"></singlePerson>
            </div>
            </el-col>
        </el-row>
        
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


