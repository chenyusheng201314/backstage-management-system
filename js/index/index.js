layui.use(['layer', 'form', 'element'], function () {
    var layer = layui.layer,
        form = layui.form, //表单依赖
        element = layui.element; //导航依赖

    //导航监听点击
    element.on('nav(demo)', function (elem) {
        //console.log(elem)
        layer.msg(elem.text());
    });
})