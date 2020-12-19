# auto_create_image

针对移动端： 展示多数量图片时，无需手动创建img标签

使用方法:

1.引入模块

```javascript
<script src="AutoPicture.js" type="text/javascript"></script>
```

2.调用

```javascript
let autopic = new AutoPicture({
    src: './images/',
    type: 'jpg',
    mountElement: document.getElementsByClassName('container')[0],
    end: 10
})
```

3.参数解释:

`src`:图片路径(必填项)

`type`:图片类型( jpg | png | gif )(必填项)

`name`:传入标签类名，参数默认为img-fluid(搭配bootstrap)(可选)

`mountElement`:挂载的父容器(必填)

`start`:默认参数:0(可选)

`end` : 生成图片数量(必填)

exp:对于图片排序，切片时从0开始命名