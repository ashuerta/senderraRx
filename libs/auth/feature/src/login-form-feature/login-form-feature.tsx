import styles from './login-form-feature.module.scss';
//import senderraLogo from './Senderra-Logo_Stacked_WHITE.png';
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
      <Flex justify={'center'} align={'center'} gap="small" wrap="wrap">
        <Layout className={styles['login']}>
      <div className={styles['logo']}>
          <a href="/">
              <img src='/assets/common/Senderra-Logo_Stacked_WHITE.png' alt="" />
              {/* <img src={senderraLogo} alt="" /> */}
          </a>
      </div>
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
            <Form.Item<FieldType>
              label="Username"
              name="username"
              style={{ fontWeight: 700 }}
              rules={[{ required: true, message: 'Please input your username!' }]}
              >
              <Input autoComplete="off" placeholder="Please input your username!"/>
            </Form.Item>
            <Form.Item<FieldType>
              label="Password"
              name="password"
              style={{ fontWeight: 700 }}
              rules={[{ required: true, message: 'Please input your password!' }]}
              >
              <Input.Password/>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>

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
        </Layout>
      </Flex>
  );
}

export default LoginFormFeature;
