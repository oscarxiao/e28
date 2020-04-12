let app = new Vue({
    el: '#app',
    data: {
        item: '',
        qty: '',
        items: [],
        itemCount: 0,
    },
    methods: {
        addItem: function () {
            this.itemCount += this.qty;

            // let newItem = {};
            // newItem.qty = this.qty;
            // newItem.item = this.item;

            this.items.push({ qty: this.qty, item: this.item });

            // Clear the fields
            this.item = '';
            this.qty = '';
        }
    }
})
