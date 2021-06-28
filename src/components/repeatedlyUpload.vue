<template>
  <div class="repeatedlyUpload">
    <el-upload
      class="upload-demo"
      :action="uploadImgUrl"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :file-list="previewList"
      :headers="headers"
      list-type="picture"
      :multiple="true"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "repeatedlyUpload",
  data() {
    return {};
  },
  methods: {
    handleRemove(file, fileList) {
      this.$emit("update:fileList", fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSuccess(response, file, fileList) {
      this.$emit("update:fileList", fileList);
    }
  },
  props: {
    uploadImgUrl: {
      type: String,
      default: ""
    },
    previewList: {
      type: Array,
      default: function () {
        return [];
      }
    },
    headers: {
      type: Object,
      default: function () {
        return {};
      }
    }
  }
};
</script>

<style scoped></style>
