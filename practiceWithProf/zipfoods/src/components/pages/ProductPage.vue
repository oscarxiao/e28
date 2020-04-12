<template>
    <div id='product-page' v-if='product'>
        <h1>{{ product.name }}</h1>
        <!-- <img
            class='product-thumb'
            :alt='"Product image of  " + product.name'
            :src='require("@/assets/images/products/" + product.id + ".jpg")'
        />-->
        <p class='description'>{{ product.description }}</p>
        <div class='price'>${{ product.price }}</div>

        <router-link :to='{name: "products"}'>&larr; Return to all products</router-link>
    </div>
</template>

<script>
export default {
    name: '',
    props: ['slug'],
    data: function() {
        return {
            //id: this.$route.params.id
            product: null
        };
    },
    mounted: function() {
        // TODO: Load product details from Firestore
    }
};
</script>

<style scoped>
</style>