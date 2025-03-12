<template>
  <div class="contacto">
    <h2>Contacto</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "ContactoForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      successMessage: "",
    };
  },
  methods: {
    async submitForm() {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        this.successMessage =
          "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.";
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      } else {
        this.successMessage =
          "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.";
      }
    },
  },
};
</script>

<style scoped>
.contacto {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 20px;
}

.form-group {
  margin-bottom: 15px;
  display: block;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 30%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.success-message {
  margin-top: 20px;
  color: green;
}
</style>
