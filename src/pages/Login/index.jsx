import React from 'react';
import { Tabs, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.css'
import { connect } from 'react-redux';
import {
     loginUserAction
} from '../../redux/actions';
function Login(props) {
    const { TabPane } = Tabs;
    const [form] = Form.useForm();
    const { onLogin, error } = props;
    
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

    const Demo = () => (
        <Tabs defaultActiveKey="1"
        //  onChange={callback}
        //  size='large'
         centered>
          <TabPane tab="Login" key="1">
          <Form
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={(values) => onLogin(values)}
            layout="vertical"
            hideRequiredMark
            >
            <Form.Item
                label="Username"
                name="username"
                
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input
                // size="large"  
                prefix={<UserOutlined className="site-form-item-icon"  />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                // hasFeedback
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                // size="large"
                placeholder="Password"
                
                />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>
            {error !== "" ?
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'red'
                    }}
                >{error}</div> : null
            }
            
            </Form>
            <div className="btn-submit-form"
                onClick={() => form.submit()}
            >
                Login
            </div>
            <div className="forgot-password">
                    <div className="div">
                        <a className="login-form-forgot" href="">
                        Forgot password
                        </a>
                    </div>
                    <div>
                    <a className="login-form-forgot" href="">
                    Guest Demo
                    </a>
                    </div>
                </div>
                <div className='note-register'>
                Don't have an account? Register now
                </div>
          </TabPane>
          <TabPane tab="Register" key="2">
            Register
          </TabPane>
        </Tabs>);

    return (
        <div className='container'>
            <div className="content">
                <div className="form-content">
                    <div className="header-content">
                        <div className="mind-logo">hello</div>
                        <div className="savina-logo"></div>
                    </div>
                    <div className="main-content">
                        <div className='title-content'>
                        <h5 className='title-content'>SolarFarm</h5>
                        </div>
                        {Demo()}
                    </div>
                    <div className="footer-content">
                        <p>Copyright &copy; 2021 Mindlot All rights reserved</p>
                        <p>Terms & conditions</p>
                    </div>
                </div>
                <div className="image-content"></div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const {  error } = state.userReducer;
    return {
        error: error,

    }
};
  
const mapDispatchToProps = (dispatch) => {
return {
    onLogin: (params) => dispatch(loginUserAction(params)),
};
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);

