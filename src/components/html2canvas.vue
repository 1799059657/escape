<template>
  <div class="html2canvas">
    <div
      class="content"
      ref="content"
      style="position: relative; width: 10rem; height: 10rem"
    >
      <img
        :src="imgUrl"
        alt=""
        style="width: 100%; height: 100%; display: block"
      />
      <span
        style="
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%);
        "
        >hahahah</span
      >
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  name: "html2canvas",
  data() {
    return {
      imgUrl: require("@/assets/logo.png")
    };
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      html2canvas(this.$refs.content).then((resolve) => {
        let imgUrl = resolve.toDataURL("image/png"); //此时就得到了dom元素转成了base64的图片
        console.log(imgUrl);
      });
    });
  }
};
</script>

<style scoped lang="less"></style>
