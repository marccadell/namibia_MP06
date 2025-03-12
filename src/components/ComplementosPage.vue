<template>
  <div class="complementos-page">
    <h2>Complementos</h2>
    <SearchBar @search="filterProducts" />
    <div class="product-list">
      <ProductCard
        v-for="(product, index) in filteredProducts"
        :key="index"
        :name="product.name"
        :description="product.description"
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
  name: "ComplementosPage",
  components: {
    ProductCard,
    SearchBar,
  },
  data() {
    return {
      searchQuery: "",
      products: [
        { id: "comple1", name: "Bolso", description: "Para el día a día", price: 49.99, image: new URL('../assets/comp1.jpg', import.meta.url).href },
        { id: "comple2", name: "Colgante", description: "Sofisticado", price: 89.99, image: new URL('../assets/comp2.jpg', import.meta.url).href },
        { id: "comple3", name: "Pendientes", description: "Comodidad y estilo", price: 39.99, image: new URL('../assets/comp3.jpg', import.meta.url).href }
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
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
.complementos-page {
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
