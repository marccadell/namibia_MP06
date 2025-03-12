<script setup>
defineProps({
  msg: {
    type: String,
    required: true, // `msg` es obligatorio, pero podemos hacer que no lo sea si sigue causando problemas
  },
  cart: {
    type: Array,
    default: () => [], // `cart` es opcional pero debería recibir un array vacío por defecto
  },
});
</script>

<template>
  <nav class="navbar">
    <div class="logo-container">
      <img class="logo" src="../../public/img/logo.jpg" alt="Logo" />
    </div>
    <h1 class="title">{{ msg }}</h1>
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
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fefefe;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo-container {
  flex: 0 0 auto;
}

.logo {
  width: 100%;
  height: 45px;
  object-fit: cover;
}

.title {
  flex: 1 1 auto;
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

.nav-links {
  flex: 0 0 auto;
  display: flex;
  gap: 15px;
}

.nav-links a {
  text-decoration: none;
  font-size: 1rem;
  color: #333;
  padding: 5px 10px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-links a:hover {
  background-color: #007acc;
  color: #fff;
  border-radius: 5px;
}

@media (max-width: 960px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .nav-links {
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }

  .title {
    margin-top: 10px;
    font-size: 1.25rem;
  }
}
</style>
