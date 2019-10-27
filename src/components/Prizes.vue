<template>
  <b-container class="prizes" fluid>
    <h1 class="my-5">Nagrade</h1>
    <b-row>
      <template v-for="prize in prizes">
        <b-col :key="prize.id" cols="12" md="3">
          <b-card
            :title="prize.name"
            :img-src="generatePrizeImgUrl(prize.image_uri)"
            :img-alt="prize.name"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-3"
          >
            <b-button @click="goToPrizeDetails(prize.id, prize.name, generatePrizeImgUrl(prize.image_uri))" variant="primary">Detalji</b-button>
          </b-card>
        </b-col>
      </template>
    </b-row>
  </b-container>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Prizes',
  data() {
    return {
      prizesUrl: 'https://pan.playad.co/api/prizes/teaser',
      contentBaseUrl: 'https://pan.playad.co',
      prizes: null
    }
  },
  methods: {
    getPrizes() {
      Axios.get(this.prizesUrl)
        .then(res => {
          if (res.data.success) {
            this.prizes = res.data.prizes;
          }
        })
        .catch(err => console.log('error: ', err));
    },
    generatePrizeImgUrl(imgUri) {
      return this.contentBaseUrl + imgUri;
    },
    goToPrizeDetails(prizeId, prizeName, image_url) {
      this.$router.push({
        name: 'prize',
        params: {
          id: prizeId,
          name: prizeName,
          image_url
        }
      })
    }
  },
  created() {
    this.getPrizes();
  }
}
</script>