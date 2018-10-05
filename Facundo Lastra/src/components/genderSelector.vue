<template>
<section>
    <h2>¿Como desea visualizar?</h2>
    <select @change="sendGender" name="options" v-model="filtro">
        <option value="todos" selected>Todos</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
    </select>
</section>
    
</template>
<script>
export default {
  name: "genderSelector",
  data() {
    return {
      filtro: "todos"
    };
  },
  methods: {
    sendGender() {
      if (this.filtro) {
        this.$emit("genderSelected", this.filtro);
      }
    }
  }
};
</script>
