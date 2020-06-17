<template>
  <div class="product-item">
            <div class="product-container">
              <router-link :to="{name: 'Product', params: {id: productId}}">
                <div class="product-title">
                {{ productData.title }}  
                </div>
                <div class="product-image">
                    <img :src="productData.mediaId" :alt="productData.title">
                </div>
                  </router-link>
                <div>
                    <del class="product-original-price">
                    {{ productData.price.original }},- Kč
                    </del><br>
                    <span class="product-price">
                    {{ productData.price.current }},- Kč
                    </span>
                </div>
                <div class="counting">
                     <add-to-cart :product-id="productId" />
                </div>
            </div>
    
    </div>
</template>

<script>
import AddToCart from './AddToCart'
export default {
  name: 'ProductItem',
  components: { AddToCart },
  props: {
    productData: {
      type: Object,
      default: () => {return {}}
    },
    productId: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import './../style/variables.scss';
  .product-item {
    text-decoration: none;
    text-align: left;
    background-color: $bg-color;
    padding: 0 0 1rem;
    border-radius: 5px;
    border: 1px solid $accent8;
    overflow: hidden;
    a {
    text-decoration: none;
    }
    :hover .product-title{
    background-color:  $accent7;
    color: $bg-color;
    }
  }
    .product-item:hover {
   transform: scale(1.03);
  }

  .product-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .product-title {
    color: $text-color;
    font-size: 1.2em;
    text-decoration: none;
    font-family: $headlines;
    margin: 0 0 15px;
    background-color: $bg-color;
    color: $accent1;
    padding: 1.2rem;
    height: 40px;
  }
  
  .product-image {
      display: flex;
      justify-content: center;
   img {
      max-height: 170px;
  }
  }



</style>
