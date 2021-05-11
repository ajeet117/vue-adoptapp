<template>
  <div class="home">
    <h1>Adopt a new Best Friend</h1>
    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>

    <b-form @submit.prevent="handleChange"  v-if="showPetForm">
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats','dogs']"
          required
        ></b-form-select>
      </b-form-group>

       <b-form-group id="input-group-2" label="Age:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="formData.age"
          placeholder="Enter age"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex'

export default {
  name: 'Home',
  data()
  {
    return{
      showPetForm:false,
      formData:{
        name:"",
        age:0,
        species:null
      }
    }
  },
  methods:{
    ...mapActions([
      'addPet'
    ]),
    togglePetForm()
    {
      this.showPetForm=!this.showPetForm;
    },
    handleChange()
    {
      const {species,age,name} = this.formData;
      const payload={
        species,
        pets:{
        age,
        name
        }
      }
      this.addPet(payload);

      this.formData={
        name:'',
        age:0,
        species:null
      }
    }
  }
}
</script>
