<template>
  <div class="home">
    <html2canvas></html2canvas>
  </div>
</template>

<script>
// @ is an alias to /src
import html2canvas from "@/components/html2canvas.vue";
// import axios from "axios";
export default {
  name: "Home",
  components: { html2canvas },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  watch: {}
};
</script>
