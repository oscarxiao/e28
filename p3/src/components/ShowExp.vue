<template>
  <div class="center">
    <div class="row">
      <div class="col s12 m12">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{exp.name}}</span>
            <p>{{ exp.description }}</p>

            <table>
              <thead>
                <tr>
                  <th>Peptide A</th>
                  <th>Peptide B</th>
                  <th>Peptide C</th>
                  <th>Peptide D</th>
                  <th>No peptide 1</th>
                  <th>No peptide 2</th>
                  <th>pop 1ug</th>
                  <th>Pair Seq</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{{ exp.pepA }}</td>
                  <td>{{ exp.pepB }}</td>
                  <td>{{ exp.pepC }}</td>
                  <td>{{ exp.pepD }}</td>
                  <td>{{ exp.pepZero1 }}</td>
                  <td>{{ exp.pepZero2 }}</td>
                  <td>{{ exp.pop1ug }}</td>
                  <td>{{ exp.pairSeq }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["exp"],
  data: function() {
    return {};
  }
};
</script>

<style>
.center {
  margin: 50px;
  width: auto;
  height: 500px;
}
</style>
