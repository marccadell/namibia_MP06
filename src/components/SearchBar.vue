<template>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscar productos..."
        @input="emitSearch"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchBar",
    data() {
      return {
        searchQuery: "",
      };
    },
    methods: {
      emitSearch() {
        this.$emit("search", this.searchQuery);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .search-bar input {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  </style>
  