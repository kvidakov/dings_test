<template>
  <b-container class="prize" fluid>
    <b-row>
      <b-col cols="12" md="4">
        <b-img :src="prize.imageUrl" fluid :alt="prize.name"></b-img>
      </b-col>
      <b-col cols="12" md="8" class="pt-5 pl-3 pl-md-5 text-left">
        <h1 class="mb-3 prize-name">{{ prize.name }}</h1>
        <h3 class="mb-2 prize-subtitle">{{ prize.subtitle }}</h3>
        <p class="prize-description" v-html="prize.description"></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Prize',
  data() {
    return {
      prize: {},
      prizeId: null,
      prizeImageUri: '',
      prizesUrl: 'https://pan.playad.co/api/prizes/teaser/',
      contentBaseUrl: 'https://pan.playad.co',
    }
  },
  methods: {
    getPrize() {
      let prizeUrl = this.prizesUrl + this.prize.id;
      Axios.get(prizeUrl)
        .then(res => {
          console.log('res: ', res);
          if (res.data.success) {
            this.prize = Object.assign({}, this.prize, res.data.prize);
          }
        })
        .catch(err => console.log('error: ', err));
    },
  },
  created() {
    console.log('this.$route.params: ', this.$route.params);
    console.log('this.$route.params.id: ', this.$route.params.id);
    this.prize.id = this.$route.params.id;
    this.prize.imageUrl = this.$route.params.image_url;
    this.getPrize();
  }
}
</script>