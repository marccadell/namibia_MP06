<template>
  <div id="app">
    <header>
      <h1 class="logo">{{ $t('app.title') }}</h1>
      <nav>
        <ul>
          <li><router-link to="/">{{ $t('app.home') }}</router-link></li>
          <li><router-link to="/ropa">{{ $t('app.clothing') }}</router-link></li>
          <li><router-link to="/calzado">{{ $t('app.shoes') }}</router-link></li>
          <li><router-link to="/complementos">{{ $t('app.accessories') }}</router-link></li>
          <li><router-link to="/checkout">{{ $t('app.cart') }} ({{ cartItems.length }})</router-link></li>
        </ul>
      </nav>

      <select v-model="$i18n.locale" @change="changeLanguage">
        <option value="es">🇪🇸 Español</option>
        <option value="en">🇬🇧 English</option>
        <option value="fr">🇫🇷 Français</option>
      </select>
    </header>

    <router-view @add-to-cart="addToCart" :cartItems="cartItems" @clear-cart="clearCart"></router-view>

    <Cart
      v-if="isCartOpen"
      :cartItems="cartItems"
      @remove-from-cart="removeFromCart"
      @close-cart="toggleCart"
    />

    <button @click="toggleCart">
      {{ isCartOpen ? $t('app.cart') + ' (' + cartItems.length + ')' : $t('app.cart') }}
    </button>
    <FooterC />
  </div>
</template>

<script>
import Cart from './components/Cart.vue';
import FooterC from '@/components/FooterC.vue';

export default {
  components: { Cart, FooterC },
  data() {
    return {
      cartItems: [],
      isCartOpen: false
    };
  },
  methods: {
    addToCart(product) {
      const existingProduct = this.cartItems.find(item => item.name === product.name);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    clearCart() {
      this.cartItems = [];
    },
    changeLanguage() {
      localStorage.setItem('lang', this.$i18n.locale);
    }
  }
};
</script>

<style scoped>
header {
  background: #f5f5f5;
  padding: 20px;
  text-align: center;
}

header .logo {
  font-size: 2.5rem;
  color: #333;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

nav ul li a {
  text-decoration: none;
  color: #007bff;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
