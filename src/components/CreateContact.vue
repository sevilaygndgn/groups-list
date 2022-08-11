<template>
  <div class="card-template">
    <div class="create-contact">
      <router-link class="circle" :to="'/form'">
        <div class="plus">+</div>
      </router-link>
      <span class="create-contact-text">Create Contact</span>
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
.card-template {
  position: relative;
  height: 200px;
  background-color: #2E3650;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, .2);
  border-radius: 10px;
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 15px;
  .create-contact {
    display: grid;
    justify-items: center;
    gap: 20px;
    .circle {
      text-decoration: none;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1a2036;
      border-radius: 100%;
      width: 56px;
      height: 56px;
      &:hover {
        cursor: pointer;
      }
      .plus {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1a2036;
        color: #808fbe;
        width: 32px;
        height: 32px;
        font-size: 30px;
      }
    }
    .create-contact-text {
      font-size: 15px;
      color: #8795c5;
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
