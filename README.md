## 精简化的移动端前端框架
## 技术选型
- react
- ES6 + ES7
- webpack

## 架构工具
- npm scripts
- gulp

## 目录结构
- src(js文件)
    - entries(每个html对应的js文件)
    - containers(每个html对应的入口)
    - components(每个js对应的组件化列表)
    - lib(js文件的工具集合)
- less(样式目录)  
    - entries(样式集合)
    - common(公用的修饰样式库)
    - colors(统一的颜色库)
    - layout(管理页面文档流定位)
- html(静态页面路口)  
- js(打包后的生成js目录)
- css(打包后的css目录) 

### 架构思路
- 减法
> 优化移动端首屏加载，放弃react-router一次打包的方案
> 移动端页面较小，放弃redux/flux而采用纯state的数据管理方案

- 加法
> 采用npm scripts，更灵活的命令行打包方式
    


