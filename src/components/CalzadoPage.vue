<template>
  <div class="calzado-page">
    <h2>Calzado</h2>

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
  name: "CalzadoPage",
  components: {
    ProductCard,
    SearchBar,
  },
  data() {
    return {
      searchQuery: "",
      products: [
        { name: "Zapatillas Running", description: "Para correr", price: 79.99, image: new URL('../assets/calzado1.jpg', import.meta.url).href },
        { name: "Botas de Cuero", description: "Elegancia y resistencia", price: 99.99, image: new URL('../assets/calzado2.jpg', import.meta.url).href },
        { name: "Zapatos Casual", description: "Para el día a día", price: 59.99, image: new URL('../assets/calzado3.jpg', import.meta.url).href }
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
.calzado-page {
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
