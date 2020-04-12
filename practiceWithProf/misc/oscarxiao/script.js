let app = new Vue({
    el: "#app",
    data: {
        itemAmount: null,
        itemName: null,
        theItem: {},
        items: []
    },
    methods: {
        combineAmountAndName: function () {
            let itemWillBeInItems = {};
            itemWillBeInItems.amount = this.itemAmount;
            itemWillBeInItems.name = this.itemName;
            this.items.push(itemWillBeInItems);
            //return this.theItem;
        }
        // submitItem: function() {
        //   this.items.push(this.theItem);
        //   return this.items;
    }
});