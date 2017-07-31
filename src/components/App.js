import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Home from './Home';
import User from './User';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import MenuLink from './MenuLink';
/*
* 当用户访问个人设置时，只有是登录状态下才能显示个人设置页面，未登录不显示个人设置页面，跳转到登录页，如果登录成功。跳回登录前的页面
* */

export default (
    <Router>
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                           用户管理系统
                        </div>
                    </div>
                    <ul className="nav navbar-nav">
                        <MenuLink label="首页" to="/home"/>
                        <MenuLink label="用户管理" to="/user"/>
                        <MenuLink label="个人设置" to="/profile"/>

                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        {/*Switch:从上往下匹配，有一个匹配上，就不匹配其他的*/}
                        <Switch>
                            {/*<Route exact path="/" render={props=><div>首页</div>}/>*/}
                            {/*<Route path="/:name" render={props=><div>{props.match.params.name}</div>}/>*/}
                            <Route path="/home" component={Home}/>
                            <Route path="/user" component={User}/>
                            <Route path="/login" component={Login}/>
                            <ProtectedRoute path="/profile" component={Profile}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    </Router>
)






