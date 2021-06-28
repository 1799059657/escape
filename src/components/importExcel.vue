<template>
  <div class="importExcel">
    <!-- 可以在input隐藏掉 v-show ；写一个其他的漂亮的样式，点击时用this.$refs.upload.click() 触发   -->
    <input
      type="file"
      ref="upload"
      accept=".xls, .xlsx"
      @change="readExcel"
      class="outputlist_upload"
    />
    <!-- 同上   -->
    <a :href="templateUrl" :download="templateName" style="line-height: 50px"
      >下载模板</a
    >
    <Table
      v-if="view"
      :tableModel.sync="tableModel"
      :tableData.sync="list"
      :pagination="pagination"
    ></Table>
  </div>
</template>

<script>
import XLSX from "xlsx";
import Table from "@/components/Table";
export default {
  name: "importExcel",
  data() {
    return {
      list: [],
      pagination: {
        hidden: true
      }
    };
  },
  props: {
    templateUrl: {
      type: String,
      default: ""
    },
    templateName: {
      type: String,
      default: ""
    },
    tableModel: {
      type: Array,
      default: function () {
        return [];
      }
    },
    tableData: {
      type: Array,
      default: function () {
        return [];
      }
    },
    view: {
      type: Boolean,
      default: function () {
        return true;
      }
    }
  },
  methods: {
    readExcel(e) {
      //表格导入
      const files = e.target.files;
      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: "binary"
          });
          const wsname = workbook.SheetNames[0]; //取第一张表
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //生成json表格内容
          // this.$emit("input", ws);
          // console.log(ws, 'ws')
          this.conversion(ws);
          this.$emit("update:tableData", this.list);
        } catch (e) {
          return false;
        }
      };
      fileReader.readAsBinaryString(files[0]);
    },
    conversion(data) {
      let has = true;
      data.some((element) => {
        let item = Object.keys(element).slice(0, 3);
        let labels = this.tableModel.map((value) => {
          return value.label;
        });
        let props = this.tableModel.map((value) => {
          return value.prop;
        });
        item.some((b) => {
          if (labels.includes(b) == false) {
            has = false;
            this.list = [];
            return true;
          }
        });
        if (!has) {
          alert("excel表格格式有误！推荐使用模板！");
          return true;
        }
        let obj = {};
        labels.forEach((a, i) => {
          obj[props[i]] = element[a];
        });
        this.list.push(obj);
      });
    }
  },
  components: {
    Table
  }
};
</script>

<style scoped></style>
