<template>
  <section>
    <GoBack />
  </section>
</template>

<script>
import GoBack from "../../components/GoBack";

export default {
  name: "ProductShow",
  components: { GoBack },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.background {
  /* background: url("../../../public/img/product_background.webp") no-repeat; */
  /* background-color: aquamarine; */
  background-position: center;
  height: 100%;
  width: 80%;
  background-size: cover;
  position: fixed;
}

</style>
