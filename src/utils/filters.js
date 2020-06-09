import Vue from 'vue';

// 15.10.2019
const DateFormat1 = (value) => {
  if (!value) {
    return value;
  }
  return new Date(value).toLocaleDateString('tr-TR');
};

Vue.filter('dateFormat1', DateFormat1);
