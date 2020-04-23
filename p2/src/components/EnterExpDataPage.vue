<template>
  <div>
    <h2>Add New Experiment Data</h2>

    <label for="name">Name</label>
    <input type="text" v-model="exp.name" id="name" />

    <label for="slug">URL Identifier:</label>
    <input type="text" v-model="exp.slug" id="slug" />

    <label for="price">Price:</label>
    <input type="text" v-model="exp.price" id="price" />

    <label for="available">Quantity available:</label>
    <input type="text" v-model="exp.available" id="available" />

    <label for="weight">Weight (in lbs):</label>
    <input type="text" v-model="exp.weight" id="weight" />

    <label for="perishable">Perishable?</label>
    <input type="checkbox" v-model="exp.perishable" id="perishable" />

    <label for="description">Description</label>
    <textarea v-model="exp.description" id="description"></textarea>

    <input type="submit" value="Add" />
  </div>
</template>

<script>
export default {
  name: "",
  data: function() {
    return {
      added: false,
      exp: {
        name: "",
        slug: "",
        price: "",
        available: "",
        weight: "",
        perishable: false,
        description: "",
      },
    };
  },
};
</script>

<style scoped>
input {
  font-size: 15pt;
}

textarea,
input[type="text"] {
  width: 50%;
}

textarea {
  height: 75px;
  display: block;
  margin: auto;
}

label {
  margin-top: 20px;
  display: block;
  font-weight: bold;
}

input[type="submit"] {
  display: inline-block;
  margin-top: 10px;
}
</style>
