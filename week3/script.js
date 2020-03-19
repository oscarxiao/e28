let app = new Vue({
  el: "#app",
  data: {
    userName: "Oscar"
  },
  methods: {
    clearOutUser: function() {
      this.userName = null;
      console.log(this.userName);
    }
  }
});
