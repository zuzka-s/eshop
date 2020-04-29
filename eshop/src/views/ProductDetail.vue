<template>
  <div>
    <div v-if="isLoading">Stránka se načítá...</div>
    <div v-else>
      <h1>{{ productData.title }}</h1>
      <div class="rating-box"><span class="rating">Hodnocení hráčů:</span><br> {{ productData.rankingAvg }}/ 5 </div>
      <div class="product-container">
        <div class="product-image">
            <img :src="productData.mediaId" :alt="productData.title">
        </div>
        <div class="product-brief">
          <p class="product-brief-text"> {{ productData.brief }} </p>
           <del class="product-original-price">Cena: {{ productData.price.original }},- Kč</del>
          <p class="product-price">Cena: {{ productData.price.current }},- Kč</p>
          <div class="product-available" v-if="productData.availability > 0">Zboží máme skladem</div>
          <div class="product-available not-available" v-else>Zboží je momentálně nedostupné</div>
           <div class="add-to-cart">
                    <button>Přidat do košíku</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data () {
    return {
      isLoading: true,
      productData: {}
    }
  },
  mounted () {
    const productId = this.$route.params.id
    fetch(`http://localhost:3000/api/product/${productId}/`)
      .then((response) => response.json())
      .then((data) => this.productData = data)
      .then(() => this.isLoading = false)
  }
}
</script>

<style scoped lang="scss">
@import './../style/variables.scss';

.product-container {
  display: flex;
  justify-content: center;
  padding: 1.5em;
  overflow: hidden;
}

@media screen and (max-width: 700px) {
.product-container {
  flex-direction: column;
}
}

.product-image {
  width: 55%;
  margin: 1.5rem;
  img {
  width: 100%;
  max-width: max-content;
  }
}

@media screen and (max-width: 700px) {
.product-image{
  width: 100%;
}
}

.product-brief {
  width: 40%;
  margin: 1.5rem;
}

@media screen and (max-width: 700px) {
.product-brief{
  width: 100%;
}
}

.product-brief-text {
  font-size: 1.2em;
}

.product-available {
  background-color: $accent6;
  padding: 0.1em 1em;
  border-radius: 30px;
  width: max-content;
  color: $bg-color;
  margin: 2em 0;
}
.not-available {
  background-color: $accent2;
}

.add-to-cart button {
    font-size: 1.3em;
}

  .rating-box {
  border: 3px solid $accent3;
  color: $accent3;
  font-size: 1.5em;
  width: max-content;
  padding: 0.2em;
  text-align: center;
  font-weight: bold;
  border-radius: 6px;
  .rating {
    font-size: 0.7em;
    font-weight: normal;
  }
  }





</style>