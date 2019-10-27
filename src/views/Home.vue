<template>
  <div class="home">
    <HeroImg :promotion-start="promotionStart"/>
    <Prizes />
  </div>
</template>

<script>
// @ is an alias to /src
import Axios from 'axios';
import moment from 'moment';
import HeroImg from '@/components/HeroImg';
import Prizes from '@/components/Prizes';

export default {
  name: "home",
  components: {
    HeroImg,
    Prizes
  },
  data() {
    return {
      baseUrl: 'https://pan.playad.co/api/',
      promotionUrl: 'https://pan.playad.co/api/settings/promotion',
      promotionStart: '',
    }
  },
  created() {    
    Axios.get(this.promotionUrl)
      .then(res => {
        console.log('res: ', res);
        if (res.data.success) {
          this.promotionStart = moment(res.data.promotion_start).format('DD.MM.YYYY.');
        }
      })
      .catch(err => console.log('error: ', err));
  }
};
</script>
