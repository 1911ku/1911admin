import React,{Component}from 'react'
import { Form, Icon, Input, Button, Card } from 'antd';
import './index.less'
class Login extends Component{
  login=()=>{
    let result=this.props.form.getFieldsValue()
    //获取一组输入控件的值，如不传入参数，则获取全部组件的值
    console.log(result)
  }
  render(){
    console.log(this.props)
    const { getFieldDecorator } = this.props.form;
    // getFieldDecorator是一个高阶组件,用于和表单进行双向绑定，
    return(
      <Card className='login'>
        <Form.Item>
          {getFieldDecorator('us',{})(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"/>
          )}    
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('ps',{})(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="password"/>
          )}    
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button onClick={this.login} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Card>
    )
  }
}
export default Form.create()(Login)
//Form.create是一个高阶组件，处理过后props中就会有form