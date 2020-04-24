<template>
  <div class="area">
    <h2>Add New Experiment Data</h2>

    <form class="col s12">
      <div class="row">
        <div class="input-field col s1">
          <label for="name">Name...</label>
          <input type="text" v-model="exp.name" id="name" />
        </div>

        <div class="input-field col s1">
          <label for="pepA">Peptide A</label>
          <input type="number" v-model="exp.pepA" class="validate" id="pepA" />
        </div>

        <div class="input-field col s1">
          <label for="pepB">Peptide B</label>
          <input type="number" v-model="exp.pepB" id="pepB" />
        </div>

        <div class="input-field col s1">
          <label for="pepC">Peptide C</label>
          <input type="number" v-model="exp.pepC" id="pepC" />
        </div>

        <div class="input-field col s1">
          <label for="pepD">Peptide D</label>
          <input type="number" v-model="exp.pepD" id="pepD" />
        </div>

        <div class="input-field col s1">
          <label for="pairSeq">pairSeq</label>
          <input type="number" v-model="exp.pairSeq" id="pairSeq" />
        </div>

        <div class="input-field col s1">
          <label for="pepZero1">No peptide 1</label>
          <input type="number" v-model="exp.pepZero1" id="pepZero1" />
        </div>

        <div class="input-field col s1">
          <label for="pepZero2">No peptide 2</label>
          <input type="number" v-model="exp.pepZero2" id="pepZero2" />
        </div>

        <div class="input-field col s1">
          <label for="pop1ug">Titration 1ug</label>
          <input type="number" v-model="exp.pop1ug" id="pop1ug" />
        </div>

        <div class="input-field col s3">
          <label for="description">Description</label>
          <textarea v-model="exp.description" id="description"></textarea>
        </div>
      </div>
    </form>

    <div class="area col s3">
      <div class="row">
        <input
          type="submit"
          value="Add"
          class="col s1 waves-effect waves-light btn-large teal lighten-2"
          @click.prevent="addExperiment"
        />
      </div>
    </div>

    <div class="reminder" v-if="added" transition="fade">
      Experiment data was saved!
    </div>
  </div>
</template>

<script>
import * as app from "@/common/app.js";
export default {
  name: "",
  data: function() {
    return {
      added: false,
      exp: {
        name: "",
        pepA: "",
        pepB: "",
        pepC: "",
        pepD: "",
        pairSeq: "",
        pepZero1: "",
        pepZero2: "",
        pop1ug: "",
        description: "",
      },
    };
  },
  methods: {
    addExperiment: function() {
      app.api.add("allExperiments", this.exp).then((id) => {
        console.log(
          "Experiment " + id + " was added to collection allExperiments"
        );
      });
      this.added = true;
      setTimeout(() => (this.added = false), 3000);
      this.exp = {
        name: "",
        pepA: "",
        pepB: "",
        pepC: "",
        pepD: "",
        pairSeq: "",
        pepZero1: "",
        pepZero2: "",
        pop1ug: "",
        description: "",
      };
    },
  },
  mounted: function() {
    app.api.find("allExperiments", "name", "eOX1");
  },
};
</script>

<style scoped>
.area {
  padding: 20px;
  widows: 500px;
  height: 100px;
}
.reminder {
  background-color: rgb(82, 204, 82);
  color: white;
  border-radius: radius;
  font-weight: bold;
  padding: 5px;
  margin: 5px;
}
.fade-enter-active,
.face-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
