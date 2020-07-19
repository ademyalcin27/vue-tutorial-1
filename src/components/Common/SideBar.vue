<template>
  <v-navigation-drawer v-model="drawer" app color="pink darken-1" dark>
    <v-list>
      <v-list-item link :to="'/'" class="avatar">
        <v-list-item-avatar tile width="100%" height="auto" color="transparent">
          <v-img :src="require('@/assets/logo.png')" max-width="150" />
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-group v-for="menu in menuList" :key="menu.id" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item v-for="item in menu.items" :key="item.name" :to="item.url" class="pl-10">
          <v-list-item-content>
            <v-list-item-title> {{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'SideBar',
  data: () => ({
    menuList: [
      {
        id: 1,
        items: [{ id: 1, name: 'Campaigns', url: '/campaigns' }],
        title: 'Menu 1',
      },
      {
        id: 2,
        items: [
          { id: 1, name: 'Promotions', url: '/promotions' },
          { id: 2, name: 'PromotionCode', url: '/promotionCode' },
        ],
        title: 'Menu 2',
      },
    ],
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit('setDrawer', val);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
  .v-list-item--active {
    &:before {
      background-color: #fff;
      opacity: 0.08;
    }

  }
  .v-list-item__title {
    color: #fff !important;
  }
</style>
