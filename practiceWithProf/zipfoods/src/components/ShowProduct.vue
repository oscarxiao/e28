<template>
    <router-link class='product' :to='{ name: "product", params: {slug: product.slug }}'>
        <div class='product-name'>{{ product.name }}</div>
        <img class='product-thumb' :src='imageSrc' />
        <div class='product-price'>${{ product.price }}</div>
    </router-link>
</template>

<script>
export default {
    name: '',
    props: ['product'],
    data: function() {
        return {};
    },
    computed: {
        imageSrc: function() {
            try {
                return require('@/assets/images/products/' +
                    this.product.slug +
                    '.jpg');
            } catch (e) {
                return require('@/assets/images/products/image-not-available.jpg');
            }
        }
    }
};
</script>

<style scoped>
</style>