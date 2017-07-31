//当通过函数定义组件时参数是props属性对象
//定义组件    需要状态    类定义
//定义组件   不需要状态   函数定义
import React from 'react';
import {Redirect,Route} from 'react-router-dom';
/*export default function ({component:Component,...rest}) {
 return <Route {...rest} render={(props)=>
  localStorage.getItem('login') ? <Component/>: <Redirect to={{
  pathname:'/login',
  state:{from:props.location.pathname}
 }}/>
 }/>
 }*/

export default function ({component:Component,...rest}) {
    return (
        <Route {...rest} render={(props)=>(
            localStorage.getItem('login')?<Component/>:
                <Redirect to={{
                     pathname:'/login',
                     state:{from:props.location.pathname}
                }}/>
        )}/>
    )
}
