### table组件

#### 传参：

##### 		1、tableModel

​				

```js
tableModel:[
    {
        prop:"字段",
        label:"表头文字",
        width:"",
        popover:false,		//是否悬浮显示内容，一般用于表格内容过长的列
        formatter: function (cellValue) {		//相当于filters
              return cellValue + "0";
            }
	},
    ......
]
```

##### 	2、tableData

后端返回的数据，循环 **tableModel**  渲染表格

##### 	3、 tableShop 

表格操作功能，template slot-scope="scope" 内循环

```js
tableShop:[
    {
        type:"text",		//基本上都是按钮的啦，纯文本按钮或者普通按钮
        color:"",			//文本颜色
        btnColor:"",		//按钮背景色
        event："",			//对应触发的事件
        value:""
    },
    ...
]
```

##### 	4、loading

​	加载数据时loading

```js
loading:false
```

#### 5、queryList 选中的数据

```
selectionChange(selection) {
      this.$emit("update:queryList", selection);
    }
```

#### 6、selection 是否显示表头的选择框

#### 7、独立传参,pagination分页组件的参数

```js
:pagination.sync="pagination"

pagination：{
          "page-size": 10,
          total: 10,
          "current-page": 1,
          hidden: false	//是否隐藏分页组件
        };


changePage(currentPage) {
      this.pagination["current-page"] = currentPage;
      this.$emit("update:pagination", this.pagination);
    }
watch: {
    pagination: {
      handler(item) {
        console.log(item);
      },
      deep: true
    }
  }
```



#### 事件：

##### 	clickEvent(event,scope.row)

```js
//<button @click="clickEvent(item.event)">按钮</button>
clickEvent(event,row){
	this.$emit(event,row)
}
```



#### 父组件使用

```js
<table v-bing.sync="tableView" @shop1="shop1" @shop2="shop2"></table>

// script
//data
tableView:{
    tableModel:[],
    tableData:[],
    tableShop:[
        {
            type:"text",
            event:"shop1"
        },
        {
            type:"btn",
            event:"shop2"
        },
    ]，
    loading:true，
    pagination：{
          "page-size": 10,
          total: 10,
          "current-page": 1,
          hidden: false	//是否隐藏分页组件
        };
}
//methods
shop1(){},
shop2(){}
//使用loading后必须要在数据加载完成后设置为false
```







