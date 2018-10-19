<template>
    <li>
      <p>{{ person.nombre}} - {{ person.sexo}} - {{person.edad}}</p>
      <button @click="deletePerson">delete</button>
      <button @click="editPerson">edit</button>
    </li>
</template>
<script>
export default {
  name: "singlePerson",
  props: ['person', 'id'],
  methods: {
    editPerson(){
      let persontoSend = this.person;
      this.$emit('edit',persontoSend.id);
    },
    deletePerson(){
      this.$emit('delete',this.person.id);
    },
  }
};
</script>

