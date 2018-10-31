<template>
      <el-card class="box-card">
       <div slot="header" class="clearfix name">
        <span>{{person.nombre}}</span>
       </div>
       <div class="text item">
        {{'Genero: ' + person.sexo }}
       </div>
       <div class="text item">
        {{'Edad: ' + person.edad }}
       </div>
       <div class="buttosZone">
          <el-button size="medium" type="primary" icon="el-icon-edit" @click="editPerson"></el-button>
          <el-button size="medium" type="primary" icon="el-icon-delete" @click="deletePerson"></el-button>
        </div>
      </el-card>
</template>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .name {
    text-transform: capitalize;
    font-weight: bold;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
<script>
/*
<p>{{ person.nombre}} - {{ person.sexo}} - {{person.edad}}</p>
      <el-button-group>
        <el-button size="medium" type="primary" icon="el-icon-edit" click="editPerson"></el-button>
        <el-button size="medium" type="primary" icon="el-icon-delete" @click="deletePerson"></el-button>
      </el-button-group>
      <!--<button @click="deletePerson">delete</button> !-->
      <!--<button @click="editPerson">edit</button> !-->
      */
export default {
  name: "singlePerson",
  props: ["person", "id"],
  methods: {
    editPerson() {
      let persontoSend = this.person;
      this.$emit("edit", persontoSend.id);
    },
    deletePerson() {
      this.$emit("delete", this.person.id);
    }
  }
};
</script>

