import React,{Component} from 'react';
export default class UserDetail extends Component{
    render(){
        //console.log(this.props)
        //history:跳转路径的 里面有方法 goBack()/goForward()/go()
        //location：里面的pathname:当前路径
        //match:匹配结果的，匹配上就是对象，匹配不上就是null；里面的params中的id 就是当前路径中的id值
        let id=this.props.match.params.id;
        //从缓存中读取原来本地缓存中的数据
        let userStr=localStorage.getItem('users');
        //将读取出来的数据字符串 解析为对象
        let users=userStr ? JSON.parse(userStr) : [];
        //从users中查找对应id的那个对象
        let user=users.find(user=>user.id==id);
        return (
            <table className="table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>姓名</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

