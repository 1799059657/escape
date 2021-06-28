<template>
  <div class="queryTable" style="width: 100%">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        v-for="item in formData"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
      >
        <el-input
          v-if="item.type == 'text'"
          type="text"
          v-model="ruleForm[item.prop]"
          autocomplete="off"
        ></el-input>
        <el-select
          v-if="item.type == 'select'"
          v-model="ruleForm[item.prop]"
          placeholder="请选择"
        >
          <el-option
            v-for="option in item.select"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          >
          </el-option>
        </el-select>
        <el-date-picker
          v-if="item.type == 'date'"
          v-model="ruleForm[item.prop]"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >搜索</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "queryTable",
  data() {
    return {
      rules: {
        // pass: [{ validator: validatePass, trigger: "blur" }],
        // checkPass: [{ validator: validatePass2, trigger: "blur" }],
        // age: [{ validator: checkAge, trigger: "blur" }]
      },
      ruleForm: {},
    };
  },
  props: {
    formData: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit("getQuery", this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.$emit("getQuery", this.ruleForm);
    },
    setRules() {
      this.formData.forEach((element) => {
        this.rules[element.prop] = element.rules;
      });
    },
  },
  created() {
    this.setRules();
  },
};
</script>

<style scoped lang="less">
.queryTable {
  /deep/ .el-form .el-form-item {
    width: 300px;
    height: 30px;
    display: inline-block;
  }
  /deep/ .el-input__inner {
    height: 30px;
  }
  /deep/ .el-button {
    height: 30px;
    padding: 0 20px;
    line-height: 30px;
  }
}
</style>
