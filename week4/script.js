let app = new Vue({
  el: "#app",
  data: {
    itemAmount: null,
    itemName: null,
    // theItem: {},
    items: []
  },
  methods: {
    // combineAmountAndName: function() {
    //   let itemWillBeInItems = {};
    //   itemWillBeInItems.amount = this.itemAmount;
    //   itemWillBeInItems.name = this.itemName;
    //   this.items.push(itemWillBeInItems);
    //   //return this.theItem;
    // }
    submitItem: function() {
      this.items.push({ amount: this.itemAmount, name: this.itemName });
      return this.items;
    }
  }
});
