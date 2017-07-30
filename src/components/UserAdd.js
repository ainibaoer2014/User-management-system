import React,{Component} from 'react';
export default class UserAdd extends Component{
    handleSubmit=()=>{
         //获取输入框的值
        let name=this.name.value;
        //从缓存中读取原来本地缓存中的数据
        let userStr=localStorage.getItem('users');
        //将读取出来的数据字符串 解析为对象
        let users=userStr ? JSON.parse(userStr) : [];
        //将要添加的数据 添加到数据库中
        users.push({id:Date.now(),name});
        //将数据 又 转换为字符串 存储在本地缓存中
        localStorage.setItem('users',JSON.stringify(users));
        //提交完数据后 跳转到 用户列表
        //用于跳转页面  this.props.history中用于跳转页面的方法：
        // go():参数：数字 作用：向前或后退几个页面
        // goBack()：无参数 作用：后退到上一页
        // goForward()：无参数  作用：向前到下一页
        // push()：参数：路径  作用：跳转到具体路径的页面
        this.props.history.push('/user/list');
    };
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="control-label">姓名</label>
                    {/*ref:引用真实的DOM元素
                       ref=>this.name=ref : 当页面挂载真正的Input元素后，会执行该函数，将Input元素挂载在当前组件的name属性上
                    */}
                    <input type="text" className="form-control" ref={ref=>this.name=ref}/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}