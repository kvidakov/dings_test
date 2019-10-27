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
    background: url('../assets/beer_and_rosemary.jpeg') 58% center / cover no-repeat;
    color: #fff;
    height: 100vh;
    text-align: left;
  }

  h1 {
    font-weight: 600;
    margin-top: 5%;
    text-transform: uppercase;
  }

  p {
    font-size: 60px;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    h1.display-3 {
      font-size: 50px;
      margin-top: 10%;
    }

    p {
      font-size: 35px;
      font-weight: 600;
    }
  }
</style>