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

<style>
.background {
  /* background: url("../../../public/img/product_background.webp") no-repeat; */
  /* background-color: aquamarine; */
  background-position: center;
  height: 100%;
  width: 80%;
  background-size: cover;
  position: fixed;
}

.back {
  margin-top: 20px;
  margin-left: -1100px;
}
</style>
