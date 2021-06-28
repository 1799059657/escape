<template>
  <div class="table">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      v-loading="loading"
      ref="tableDom"
      @selection-change="selectionChange"
    >
      <el-table-column
        type="selection"
        v-if="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        v-for="item in tableModel"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template slot-scope="scope">
          <el-popover
            v-if="item.popover"
            placement="top-end"
            trigger="hover"
            :content="scope.row[item.prop] + ''"
          >
            <span slot="reference">{{
              typeof item.formatter == "function"
                ? item.formatter(scope.row[item.prop])
                : scope.row[item.prop]
            }}</span>
          </el-popover>
          <span v-else>{{
            typeof item.formatter == "function"
              ? item.formatter(scope.row[item.prop])
              : scope.row[item.prop]
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" v-if="tableShop.length > 0">
        <template slot-scope="scope">
          <button
            v-for="item in tableShop"
            :key="item.event"
            @click="clickEvent(item.event, scope.row)"
            :class="{ shopBnt: true, shopBnt2: item.type == 'text' }"
            :style="{
              color: item.color,
              background: item.type == 'text' ? 'none' : item.btnColor
            }"
          >
            {{ item.value }}
          </button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      v-if="!pagination.hidden"
      layout="prev, pager, next"
      :total="pagination.total"
      :page-size="pagination['page-size']"
      :current-page="pagination['current-page']"
      @current-change="changePage"
      style="float: right"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
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
    tableShop: {
      type: Array,
      default: function () {
        return [];
      }
    },
    queryList: {
      type: Array,
      default: function () {
        return [];
      }
    },
    pagination: {
      type: Object,
      default: function () {
        return {
          "page-size": 10,
          total: 10,
          "current-page": 1,
          hidden: false
        };
      }
    },
    loading: {
      type: Boolean,
      default: function () {
        return false;
      }
    },
    selection: {
      type: Boolean,
      default: function () {
        return true;
      }
    }
  },
  methods: {
    clickEvent(event, row) {
      this.$emit(event, row);
    },
    selectionChange(selection) {
      this.$emit("update:queryList", selection);
    },
    changePage(currentPage) {
      this.pagination["current-page"] = currentPage;
      this.$emit("update:pagination", this.pagination);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.table {
  /deep/ .el-table .cell 
    //单行显示超出显示...
  {
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  //  //多行显示超出显示...
  // {
  //   text-align: center;
  //   word-break: break-all;
  //   text-overflow: ellipsis;
  //   overflow: hidden;
  //   display: -webkit-box;
  //   -webkit-line-clamp: 3;
  //   -webkit-box-orient: vertical;
  // }
  /deep/ .el-table table {
    width: 100%;
  }
  .shopBnt {
    width: 50px;
    height: 25px;
    line-height: 25px;
    margin: 0 5px;
    border: none;
    border-radius: 4px;
  }
  .shopBnt2:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
