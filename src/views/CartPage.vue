<template>
  <div id="page-wrap">
    <h1>My Shopping Cart</h1>
    <div
      v-for="product in cartItems"
      :key="product.id"
      class="product-container"
    >
      <img class="product-image" :src="product.imageUrl" />
      <div class="details-wrap">
        <h3>{{ product.name }}</h3>
        <p>${{ product.price }}</p>
      </div>
      <button class="remove-button">Remove From Cart</button>
    </div>
    <h3 id="total-price">Total: ${{ sumPrice }}</h3>
    <button id="checkout-button">Proceed to Checkout</button>
  </div>
</template>

<script>
import { cartItems } from '../assets/fake-data';

export default {
    name: 'Cart Page',
    data() {
      return {
        cartItems,
      }
    },
    computed: {
      sumPrice() {
        return this.cartItems.reduce(
          (sum, item) => sum + Number(item.price),
          0,
        );
      }
    }
};
</script>

<style scoped>
h1 {
  border-bottom: 1px solid darkblue;
  margin: 0;
  margin-top: 16px;
  padding: 18px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  width: 100%;
}

.product-container {
  align-content: "center";
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.remove-button {
  flex: 1;
  margin: auto;
}
</style>
