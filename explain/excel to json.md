### excel表格转为json数据加预览表格

#### 	参数

##### 1、templateUrl		excel模板路径（静态资源要放到public里）

```js
:templateUrl="templateUrl"

templateUrl: "./static/dingdan.xls",
```



##### 2、templateName 	excel模板文件名

```js
:templateName="templateName"

templateName: "text.xls",
```



3、tableModel 		预览表格的 tableModel和转化格式 		（具体看Table组件）

```
label	---》 excel表格的每条数据的键
prop	---》 转化excel表格对应的键名
```



4、tableData 		转化后的数据

```js
//转化完成后回传父组件

this.$emit("update:tableData", this.list);
```



##### 5、view		是否显示预览表格