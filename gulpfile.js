///**
// * Created by slashhuang on 16/4/5.
// */
//
//var gulp=require('gulp');
//var open=require('gulp-open');
//var server=require('./server')
//
//gulp.task('default',function(){
//    /**
//     *dev环境下调试使用
//     *有多重模式：
//     *  1.如下用webpack-dev-server路径（iframe模式）
//     *  2.配置config.output.publicPath
//     *  3.在entry中配置client参数
//     *        "webpack-dev-server/client?http://localhost:3000",
//     * 注意！！！ index.html中引用js必须用虚拟dom对应的publicpath(文档中说是在内存中的)
//     *
//     * 现在的开发选用第一中模式
//     *
//     */
//    server();//加载dev-server
//    //本质上automatic refresh应该都是从dev-server(会监听所有bundle文件)走的，publicPath只是提供了个路径连接到dev-server
//    gulp.src(__dirname).pipe(
//        open({
//            'uri': "http://localhost:3001/index.html"
//        }))});