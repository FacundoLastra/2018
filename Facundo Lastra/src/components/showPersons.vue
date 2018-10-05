<template>
    <section>
        <ul>
            <li v-for="persona in persons" :key="persona.id">
                <singlePerson :person="persona"></singlePerson>
                <button @click="deletePerson(persona)">delete</button>
                <button @click="editPerson(persona)">edit</button>
            </li>
        </ul>
        <h3>Hay {{persons.length}} persona/s</h3>
    </section>
</template>
<script>
import singlePerson from "./singlePerson.vue";

export default {
  name: "showPersons",
  props: ["persons"],
  components: {
    singlePerson
  },
  methods: {
    deletePerson(person) {
      if (person) {
        this.$emit("deletePerson", person);
      }
    },
    editPerson(person) {
      if (person) {
        this.$emit("editPersonStep1", person);
      }
    }
  }
};
</script>
<style>
</style>


