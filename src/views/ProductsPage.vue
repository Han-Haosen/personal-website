<template>
  <div id="page-wrap">
    <h1>List of Products</h1>
    <div class="grid-wrap">
      <div
        v-for="product in products"
        class="product-item"
        v-bind:key="product.id"
      >
        <img v-bind:src="product.imageUrl" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">${{ product.price }}</p>
        <router-link v-bind:to="'/products/' + product.id">
          <button>View Details</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../assets/fake-data";
export default {
  name: "Products Page",
  data() {
    return {
      products,
    };
  },
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

.img-wrap {
  text-align: center;
}

.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}

.product-item {
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 1px 5px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 100px;
  width: 100px;
}

a {
  width: 100%;
}

button {
  width: 100%;
}
</style>
