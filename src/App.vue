<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo-container">
        <img class="logo" src="./assets/logo.jpg" alt="Logo" />
      </div>
      <div class="nav-links">
        <ul>
          <li>
            <router-link to="/">{{ $t("app.home") }}</router-link>
          </li>
          <li>
            <router-link to="/ropa">{{ $t("app.clothing") }}</router-link>
          </li>
          <li>
            <router-link to="/calzado">{{ $t("app.shoes") }}</router-link>
          </li>
          <li>
            <router-link to="/complementos">{{ $t("app.accessories") }}</router-link>
          </li>
          <li>
            <router-link to="/checkout"
              >{{ $t("app.cart") }} ({{ cartItems.length }})</router-link
            >
          </li>
        </ul>
      </div>

      <div class="btn-navbar">
        <button @click="toggleCart" class="btn-cart">
          {{
            isCartOpen ? "🛒" + " (" + cartItems.length + ")" : "🛒"
          }}
        </button>

        <select v-model="$i18n.locale" @change="changeLanguage" class="btn-lang">
          <option value="es">🇪🇸 Español</option>
          <option value="en">🇬🇧 English</option>
          <option value="fr">🇫🇷 Français</option>
        </select>
      </div>
    </nav>

    <main>
      <router-view @add-to-cart="addToCart" :cartItems="cartItems" @clear-cart="clearCart"></router-view>
    </main>
    
    <Cart
      v-if="isCartOpen"
      :cartItems="cartItems"
      @remove-from-cart="removeFromCart"
      @close-cart="toggleCart"
    />

    <FooterC />
  </div>
</template>

<script>
import Cart from "./components/Cart.vue";
import FooterC from "@/components/FooterC.vue";

export default {
  components: { Cart, FooterC },
  data() {
    return {
      cartItems: [],
      isCartOpen: false,
    };
  },
  methods: {
    addToCart(product) {
      const existingProduct = this.cartItems.find((item) => item.name === product.name);
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
      localStorage.setItem("lang", this.$i18n.locale);
    },
  },
};
</script>

<style scoped>
*{
  font-family: Arial, Helvetica, Arial, sans-serif;
}

main {
  min-height: 80vh;
}

header {
  background: #f5f5f5;
  padding: 20px;
  text-align: center;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: #fefefe;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.logo-container {
  flex: 0 0 auto;
}

.logo {
  height: 50px;
  object-fit: cover;
}

.nav-links {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-links ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  text-decoration: none;
  font-size: 1rem;
  color: #333;
  padding: 8px 15px;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
}

.nav-links a:hover {
  background-color: #007acc;
  color: #fff;
  border-radius: 8px;
}

select {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}

.btn-navbar {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Botón del carrito */
.btn-cart {
  background-color: #007acc;
  color: #fff;
  border: none;
  padding: 8px 15px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn-cart:hover {
  background-color: #005f99;
}

/* Selector de idioma */
.btn-lang {
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn-lang:hover {
  border-color: #007acc;
}


/* Responsive */
@media (max-width: 960px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }

  .nav-links {
    position: static;
    transform: none;
    margin-top: 10px;
  }

  .nav-links ul {
    flex-direction: column;
    text-align: center;
  }

  .nav-links a {
    display: block;
    width: 100%;
    padding: 10px;
  }

  select {
    margin-top: 10px;
  }

  .btn-navbar {
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }

  .btn-cart {
    width: 100%;
    text-align: center;
  }

  .btn-lang {
    width: 100%;
    text-align: center;
  }
}
</style>
