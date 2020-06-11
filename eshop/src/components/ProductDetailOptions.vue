<template>
  <div>
    <div id="overlayElement">
           <div id="pop-up">
            <div class="pop-up-text" >
                <h1>Balíček budete mít doma dříve, než se nadějete</h1>
                <p>S rychlým doručením budete mít do pár minut hru doma.</p>
            </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailOptions',
  mounted () {
    console.log('mounted')
     const banner = document.getElementById("pop-up");
    banner.style.display = 'block'
  }
}
</script>

<style scoped lang="scss">
@import './../style/variables.scss';


#pop-up {
    background-color: lightgray;
    display: none;
    position: fixed;
    margin: auto;
    width: 56%;
    font-size: 1em;
    text-align: center;
    padding: 5px 0 0;
    top: 15%;
    left: 22%;
    z-index: 99;
    border: 1px solid grey;
}

.pop-up-text {
    display: block;
    margin: auto;
    padding: 10px;
    font-size: 1.1em;
    width: 55%;
    h1 {
    line-height: 1.2em;
    }
}



.pop-up-text p {
    margin: 0 12% 10px;
}
</style>
