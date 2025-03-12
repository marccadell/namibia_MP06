<template>
  <div class="product-card">
    <img :src="image" :alt="name" />
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <span class="price">{{ $t('product.price') }}: {{ price }} €</span>
    <button @click="addToCart">{{ $t('product.add_to_cart') }}</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    price: Number,
    image: String
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', {
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image,
        quantity: 1
      });
    }
  }
};
</script>

<style scoped>
.product-card {
  width: 200px;
  height: 360px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.product-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

.product-card h2 {
  font-size: 1.2rem;
  margin: 10px 0;
}

.product-card p {
  font-size: 0.9rem;
  color: #555;
  flex-grow: 1;
}

.price {
  font-size: 1.2rem;
  color: #007bff;
  font-weight: bold;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
