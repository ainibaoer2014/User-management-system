##搭建最简单的路由环境
1.生成项目
```
create-react-app react-router-4-lesson
cd react-router-4-lesson
yarn start
```
2.安装react-router-dom
```
npm install react-router-dom -S
```
3. 配置基本路由
```
src/App.js

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Home = () => (
    <div>
        <h2>首页</h2>
    </div>
)

const User = () => (
    <div>
        <h2>用户管理</h2>
    </div>
)

const Profile = () => (
    <div>
        <h3>个人设置</h3>
    </div>
)

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">主页</Link></li>
                <li><Link to="/user">用户管理</Link></li>
                <li><Link to="/profile">个人设置</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/user" component={User}/>
            <Route path="/profile" component={Profile}/>
        </div>
    </Router>
)
export default App

```
##5.switch只显示一个组件
##6.另一种渲染组件的方式
##7.实现登录和退出功能
##8.自定义菜单
- Redirect 重定向到另一个路由
- withRouter 使用此方法来插入react-router路由参数