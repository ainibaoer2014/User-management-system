import React,{Component} from 'react';
export default class UserDetail extends Component{
    render(){
        //console.log(this.props)
        //history:跳转路径的 里面有方法 goBack()/goForward()/go()
        //location：里面的pathname:当前路径
        //match:匹配结果的，匹配上就是对象，匹配不上就是null；里面的params中的id 就是当前路径中的id值

        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}

