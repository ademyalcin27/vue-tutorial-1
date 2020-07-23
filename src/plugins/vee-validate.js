import Vue from 'vue';
import { localize, extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { email, max, min, numeric, required } from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';
import { format } from 'date-fns';

extend('email', email);
extend('max', max);
extend('min', min);
extend('numeric', numeric);
extend('required', required);

extend('min_date', {
  validate: (value, { date }) => (
    Number.isNaN(Date.parse(date)) || (new Date(value) < new Date(date))
  ),
  params: ['date'],
});
extend('max_date', {
  validate: (value, { date }) => (
    Number.isNaN(Date.parse(date)) || (new Date(value) > new Date(date))
  ),
  params: ['date'],
});

localize('en', {
  ...en,
  messages: {
    ...en.messages,
    min_date: (v, { date }) => `${v} can not big this ${format(new Date(date), 'yyyy-MM-dd')} date`,
    max_date: (v, { date }) => `${v} can not small this ${format(new Date(date), 'yyyy-MM-dd')} date`,
  },
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
