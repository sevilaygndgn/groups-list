<template>
  <div class="multiple-contacts">
    <create-contact />
    <contacts-card v-for="contactItem in getContactList" :key="contactItem.name" :contact="contactItem"/>
  </div>
</template>
<script>
import ContactsCard from "./ContactsCard.vue";
import CreateContact from "./CreateContact.vue";
import { mapGetters } from "vuex";
export default {
  components: { ContactsCard, CreateContact },
  computed: {
    ...mapGetters(["getContactList"]),
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/reset.scss";
.multiple-contacts {
  grid-template-columns: repeat(4, 1fr);
  display: grid;
  gap: 20px;
}
</style>
