/*
* 有些时候我们希望一个组件不管匹配不匹配都可以显示一些东西,只是显示的样式不一样，可以用children方法渲染组件
* component:对应一个组件 当URL路径和当前Route的path匹配时渲染
* render:对应一个匿名组件函数，当URL路径和当前Route的path匹配时渲染
*children:对应一个匿名函数，不管匹不匹配偶会渲染，只是渲染的样式不同
* */
import React from 'react';
import {Route,Link} from 'react-router-dom';
/*
export default function ({to,label}) {
         <Route path={to} children={({match})=>{
             return <li className={match?'active':''}><Link to={to}>{label}</Link></li>
         }}/>
     )
}*/

export default function ({label,to}) {
    return (
        <Route path={to} children={({match})=>{
            return (
                <li className={match?'active':''}>
                    <Link to={to}>{label}</Link>
                </li>
            )
        }}/>
    )
}
