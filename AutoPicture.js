/*version:1.0*/
class AutoPicture {
    constructor(prop) {
        this.defaultOptions = {
            src: prop.src,
            type: '.' + prop.type,
            name: prop.name || 'image-fluid',
            mountElement: prop.mountElement,
            start: prop.start || 0,
            end: prop.end,
        }
        //实例化时执行
        this.create();
    }

    static frag = document.createDocumentFragment();

    create() {
        const ele_style = {
            dis: 'block',
            mg: 0,
            pd: 0,
        }
        for (let i = this.defaultOptions.start; i < this.defaultOptions.end; i++) {
            //创建image对象
            const img = document.createElement('img');
            //防止图片变形，添加一个容器
            const div = document.createElement('div');
            //设定路径与类型
            img.src = this.defaultOptions.src + i + this.defaultOptions.type;
            //防止图片间隔出现白线
            img.style.display = ele_style.dis;
            img.className = this.defaultOptions.name;
            //设定容器data
            div.className = 'items';
            div.style.margin = ele_style.mg;
            div.style.padding = ele_style.pd;
            //容器添加img
            div.appendChild(img);
            AutoPicture.frag.appendChild(div);
        }
        //添加到父元素
        this.defaultOptions.mountElement.appendChild(AutoPicture.frag);
    }
}