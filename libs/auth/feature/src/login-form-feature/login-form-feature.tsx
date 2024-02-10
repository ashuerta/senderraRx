import styles from './login-form-feature.module.scss';
import { Layout, Button, Checkbox, Form, Input, Flex } from 'antd';

/* eslint-disable-next-line */
export interface LoginFormFeatureProps {}

export function LoginFormFeature(props: LoginFormFeatureProps) {
  const { Content } = Layout;
  const boxStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    minHeight: '100%',
  };
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    <Layout>
      <Flex className={styles['login']} justify={'center'} align={'center'} gap="middle" wrap="wrap">
        <div className={styles['content']}>
        <Form
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            layout={'vertical'}
            action="/Account/Login" className=" login-form" method="post">
            <h3 className="form-title">Sign In</h3>
            <div id="validationSummary" className="alert alert-danger display-hide"></div>
            <Form.Item label="User Name">
              <Input type="text" value="" name="UserName" id="UserName" autoComplete="off" placeholder="input placeholder" />
            </Form.Item>
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
              >
              <Input autoComplete="off" placeholder="Please input your username!"/>
            </Form.Item>
            <div className="form-group">
              <label htmlFor="UserName" className="control-label bold">User Name</label>
              <input type="text" value="" name="UserName" id="UserName" autoComplete="off" className="validate form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="Password" className="control-label bold">Password</label>
              <input type="password" value="" name="Password" id="Password" autoComplete="off" className="validate form-control" />
            </div>
            <div className="form-actions text-center">
              <button type="submit" className="btn uppercase srx-orange">Login</button>
              <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-md-6">
                  <a href="/Account/ForgotPassword" className="rememberme">Forgot Password?</a>
                </div>
                <div className="col-md-6">
                  <a href="/Account/ForgotUserName" className="forget-password">Forgot User Name?</a>
                </div>
              </div>
            </div>
            <div className="create-account">
              <p>
                <a href="/Account/Register" className="uppercase">Create an account</a>
              </p>
            </div>
        </Form>
        </div>
      </Flex>
    </Layout>
  );
}

export default LoginFormFeature;
