# auto_create_image

使用场景移动端（PC）： 展示多数量图片时，无需手动创建img标签

使用方法:

1.引入模块

```javascript
<script src="AutoPicture.js" type="text/javascript"></script>
```

2.调用

```javascript
let image_object =new AutoPicture({
    src:'./images/',
    type:'jpg',
    mountElement:document.getElementsByClassName('container')[0],
    end: 10
})
```

3.参数解释:

`src`:图片路径

`type`:图片类型( jpg | png | gif )

`name`:img-类名，参数默认为img-fluid,可不传参

`mountElement`:挂载的父容器

`start`:无参数默认为0

`end` : 填入路径图片数量(文件夹图片有多少张，就填多少)

文件夹的图片要更名,从0开始排序