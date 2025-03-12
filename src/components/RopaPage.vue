<template>
  <div class="ropa-page">
    <h2>{{ $t('app.clothing') }}</h2>
    <SearchBar @search="filterProducts" />
    <div class="product-list">
      <ProductCard
        v-for="(product, index) in filteredProducts"
        :key="index"
        :name="$t(`products.${product.id}.name`)"
        :description="$t(`products.${product.id}.description`)"
        :price="product.price"
        :image="product.image"
        @add-to-cart="$emit('add-to-cart', $event)"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  components: { ProductCard, SearchBar },
  data() {
    return {
      searchQuery: "",
      products: [
        { id: "dress", price: 29.99, image: new URL('../assets/ropa1.jpg', import.meta.url).href },
        { id: "jersey", price: 49.99, image: new URL('../assets/ropa2.jpg', import.meta.url).href },
        { id: "jeans", price: 59.99, image: new URL('../assets/ropa3.jpg', import.meta.url).href }
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        this.$t(`products.${product.id}.name`).toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    filterProducts(query) {
      this.searchQuery = query;
    },
  },
};
</script>

<style scoped>
.ropa-page {
  text-align: center;
  margin-top: 30px;
  padding: 20px;
}

.product-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
