<template>
  <div class="HorizontalChoice">
    <img class="person-img side" src="../assets/images/2.jpg" alt="" />
    <div class="items side">
      <span class="name">Amy Santiago</span>
      <span class="phone">+90 555 555 55 55</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.HorizontalChoice {
  position: relative;
  width: 700px;
  height: 95px;
  background-color: #1d2537;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
  .side {
    flex: 1;
  }
  .person-img {
    flex: none;
    width: 72px;
    height: 72px;
    border-radius: 100%;
  }
  .items {
    display: grid;
    justify-items: center;
    float: right;
    color: #b1b9d8;
    gap: 10px;
    .phone {
      font-size: 15px;
    }
  }
}
.HorizontalChoice::after {
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
