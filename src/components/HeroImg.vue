<template>
  <b-jumbotron header="Promocija počinje" :lead="promotionStart">
  </b-jumbotron>
</template>

<script>
export default {
  name: 'HeroImg',
  props: {
    promotionStart: String
  },
  watch: {
    promotionStart(newVal) {
      this.promotionStart = newVal;
    }
  },
}
</script>

<style scoped>
  .jumbotron {
    background: url('../assets/beer_and_rosemary.jpeg') center center / cover no-repeat;
    color: #fff;
    height: 100vh;
    padding-top: 10%;
    text-align: left;
  }

  h1 {
    font-weight: 600;
    text-transform: uppercase;
  }

  p {
    font-size: 60px;
    font-weight: 600;
  }
</style>