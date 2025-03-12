<template>
    <div class="checkout">
      <h2>{{ $t('app.checkout') }}</h2>
  
      <!-- Si hay productos en el carrito, mostramos la tabla -->
      <table v-if="cartItems.length > 0">
        <thead>
          <tr>
            <th>{{ $t('product.description') }}</th>
            <th>{{ $t('product.price') }}</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.price }} €</td>
            <td>{{ item.quantity }}</td>
            <td>{{ (item.price * item.quantity).toFixed(2) }} €</td>
          </tr>
        </tbody>
      </table>
  
      <!-- Si no hay productos en el carrito -->
      <p v-if="cartItems.length === 0">{{ $t('app.cart') }} está vacío.</p>
  
      <div class="total">
        <strong>{{ $t('app.checkout') }}: {{ totalPrice }} €</strong>
      </div>
  
      <div class="buttons">
        <router-link to="/">
          <button class="continue-btn">{{ $t('app.continue_shopping') }}</button>
        </router-link>
        <button class="buy-btn" @click="completePurchase">{{ $t('app.checkout') }}</button>
      </div>
  
      <p v-if="purchaseSuccess" class="success-message">
        {{ $t('app.purchase_success') }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "CheckoutShop",
    props: {
      cartItems: Array, // Recibimos los productos desde App.vue
    },
    data() {
      return {
        purchaseSuccess: false,
      };
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
      },
    },
    methods: {
      completePurchase() {
        this.purchaseSuccess = true;
        this.$emit("clear-cart"); // Vaciamos el carrito después de la compra
      },
    },
  };
  </script>
  
  <style scoped>
  .checkout {
    text-align: center;
    padding: 20px;
  }
  
  table {
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  
  th {
    background-color: #f5f5f5;
  }
  
  .total {
    margin-top: 10px;
    font-size: 1.2rem;
  }
  
  .buttons {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .continue-btn {
    background-color: #007bff;
    color: white;
  }
  
  .continue-btn:hover {
    background-color: #0056b3;
  }
  
  .buy-btn {
    background-color: #28a745;
    color: white;
  }
  
  .buy-btn:hover {
    background-color: #1e7e34;
  }
  
  .success-message {
    margin-top: 20px;
    color: green;
    font-weight: bold;
  }
  </style>
  