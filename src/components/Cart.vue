<template>
  <div class="cart">
    <h2>{{ $t('app.cart') }}</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        <img :src="item.image" :alt="item.name" class="cart-image" />
        <span v-if="item.quantity > 1" class="quantity-badge">
          {{ item.quantity }}
        </span>
        <span>{{ item.name }} - {{ item.price }} €</span>
        <button @click="removeFromCart(index)">❌</button>
      </li>
    </ul>
    <div v-if="cartItems.length > 0" class="cart-buttons">
      <router-link to="/checkout">
        <button class="cart-btn view-cart-btn">{{ $t('app.checkout') }}</button>
      </router-link>
      <button class="cart-btn continue-btn" @click="closeCart">{{ $t('app.continue_shopping') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartShop',
  props: {
    cartItems: Array
  },
  methods: {
    removeFromCart(index) {
      this.$emit('remove-from-cart', index);
    },
    closeCart() {
      this.$emit('close-cart');
    }
  }
};
</script>

  
  <style scoped>
  .cart {
    background: white;
    border: 1px solid #ddd;
    padding: 15px;
    width: 330px;
    position: fixed;
    top: 50px;
    right: 20px;
  }
  
  .cart ul {
    list-style: none;
    padding: 0;
  }
  
  .cart li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-bottom: 1px solid #ddd;
  }
  
  .cart-image {
    width: 50px;
  }
  
  .cart-buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
  
  .cart-btn {
    width: 130px;
    padding: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }
  
  .quantity-badge {
    background-color: green;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 3px 7px;
    border-radius: 50%;
    min-width: 20px;
    text-align: center;
  }
  
  .view-cart-btn {
    background-color: #00aeff;
    color: white;
  }
  
  .view-cart-btn:hover {
    background-color: #0089b3;
  }
  
  .continue-btn {
    background-color: #007bff;
    color: white;
  }
  
  .continue-btn:hover {
    background-color: #0056b3;
  }
  
  .success-message {
    color: green;
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
  }
  </style>
  