import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
export default class UserList extends Component{
    //用户列表组件中 定义状态对象
    constructor(){
        super();
        this.state={users:[]};
    }
    //当组件将要加载时 加载数据
    componentWillMount(){
        //从缓存中读取原来本地缓存中的数据
        let userStr=localStorage.getItem('users');
        //将读取出来的数据字符串 解析为对象
        let users=userStr ? JSON.parse(userStr) : [];
        //加载完数据，改变状态
        this.setState({users});
    }

    render(){
       /* console.log(this.props);*/
        return (
            <ul className="list-group">
                {
                    this.state.users.map(user=>(
                        <li className="list-group-item">
                            <Link to={"/user/detail/"+user.id}>{user.name}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}