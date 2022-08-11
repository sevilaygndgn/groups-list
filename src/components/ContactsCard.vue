<template>
  <div class="card-template" :class="{'vertical': getTabStatus}">
    <div class="contacts">
      <img src="../assets/images/2.jpg" class="person-img" alt="" />
      <div class="items">
        <span class="name">{{contact.name}}</span>
        <span class="mail">{{contact.email}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: "ContactsCard",
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  computed: {
   ...mapGetters(["getTabStatus"])
  },
  methods: {
    ...mapMutations(["setTabStatus"])
  }
};
</script>
<style lang="scss" scoped>
.card-template {
  position: relative;
  height: 200px;
  background-color: #1d2537;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, .2);
  border-radius: 10px;
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 15px;
  .contacts {
    display: grid;
    justify-items: center;
    gap: 10px;
    .person-img {
      width: 72px;
      height: 72px;
      border-radius: 100%;
    }
    .items {
      display: grid;
      justify-items: center;
      gap: 5px;
      color: #b1b9d8;
      .mail {
        font-size: 12px;
      }
    }
  }
}
.card-template::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #8e66ff;
  width: 6px;
  height: 6px;
  top: 10px;
  right: 12px;
}
</style>
