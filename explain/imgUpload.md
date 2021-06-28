### imgUpload 单张图片上传组件

#### 	参数

##### 			1、value 图片地址(双向绑定参数)

```js
//<imgUpload
  //    v-model="value"
  //    :uploadImgUrl="uploadImgUrl"
  //    :headers="headers"
  //  ></imgUpload>
    
    //可用于回显，修改后新的url父组件也可以第一时间获取
```



##### 			2、uploadImgUrl 图片上传地址

```js
// /api是代理前缀，开发环境用到代理是使用,生产环境则需要去掉 , axios设置了 defaultUrl时不需要自己加 /api

uploadImgUrl: process.env.NODE_ENV === "development" ? "/api/common/upload" : "/common/upload",	
```



##### 			3、headers 请求头设置

```js
headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImU1NmVjYzA1LWY3MWEtNDM0MS1hMGQzLTNiNTQ0MmZkZTAxMSJ9.W4PXJDmKCL_SyijLjx7Iiywsb82QFZgMacXA2msRzdWKrQt9K9yWJ_7uWEVSjfc_rLL3SDw5iFyXJuOHwgvESA"
      }

// 可以设置一些token之类的东西
```





#### 修改大小

1、

```js
//添加以下样式
.swiper::v-deep .el-upload--picture-card {
  width: 300px;
  overflow: hidden;
}

```









### repeatedlyUpload 多张图片上传



#### 参数

##### 1、uploadImgUrl 图片上传地址

```js
// /api是代理前缀，开发环境用到代理是使用,生产环境则需要去掉 , axios设置了 defaultUrl时不需要自己加 /api

uploadImgUrl: process.env.NODE_ENV === "development" ? "/api/common/upload" : "/common/upload",	
```

##### 2、previewList 图片展示列表

​	用于回显和选择图片后显示

##### 3、fileList 上传成功后的文件列表

```js
:fileList.sync="fileList"

handleSuccess(response, file, fileList) {
  this.$emit("update:fileList", fileList);
}
handleRemove(file, fileList) {
    this.$emit("update:fileList", fileList);
},
```

##### 4、headers 请求头设置

```js
headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImU1NmVjYzA1LWY3MWEtNDM0MS1hMGQzLTNiNTQ0MmZkZTAxMSJ9.W4PXJDmKCL_SyijLjx7Iiywsb82QFZgMacXA2msRzdWKrQt9K9yWJ_7uWEVSjfc_rLL3SDw5iFyXJuOHwgvESA"
      }

// 可以设置一些token之类的东西

```

