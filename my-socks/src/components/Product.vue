<template>
        <div class="product">
        <div class="product-image">
            <img :src="image">
        </div>
    
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
                <li v-for="(detail, i) in details" :key="i">{{ detail }}</li>
            </ul>
            <div
                v-for="(variant,index) in variants"
                :key="variant.variantKey"
                class="color-box"
                :style="{backgroundColor: variant.variantColor}"
                @click="updateProduct(index)">
            </div>
            <button
                @click="addToCart"
                :disabled="!inStock"
                :class="{disabledButton:!inStock}">
                Add to Cart
                </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
              return {
                  brand: 'Vue',
                  product: 'Socks',
                  selectedVariant: 0,
                  details: [
                      '80% cotton', 
                      '20% polyester', 
                      'Gender-neutral'
                  ],
                  variants: [
                      {
                          variantID: 2334,
                          variantColor: 'green',
                          variantImage: require('@/assets/images/socks_green.jpg'),
                          variantQuantity: 10
                      }, 
                      {
                          variantID: 2335,
                          variantColor: 'blue',
                          variantImage: require('@/assets/images/socks_blue.jpg'),
                          variantQuantity: 0
                      }
                  ]
    
              }
            },
              methods: {
                  addToCart() {
                    this.$emit('add-to-cart');
                  },
                  updateProduct(index) {
                      this.selectedVariant = index
                  }
              },
              computed: {
                  title() {
                      return this.brand + ' ' + this.product
                  },
                  image() {
                      return this
                          .variants[this.selectedVariant]
                          .variantImage
                  },
                  inStock() {
                      return this
                          .variants[this.selectedVariant]
                          .variantQuantity
                  },
                  shipping() {
                      if(this.premium){
                          return "Free Shipping"
                      }else{
                          return "Shipping Cost : 2.99"
                      }
                  }
    
              }
};
</script>