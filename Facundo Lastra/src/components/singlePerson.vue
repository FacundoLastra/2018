<template>
    <p>{{ person.nombre}} - {{ person.sexo}} - {{person.edad}}</p>
</template>
<script>
export default {
  name: "singlePerson",
  props: ["person"]
};
</script>

