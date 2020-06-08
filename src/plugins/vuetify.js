// eslint-disable-next-line
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify, { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    themes: {
      dark: {
        primary: colors.pink.darken1,
      },
      light: {
        primary: '#fff',
      },
    },
  },
});
