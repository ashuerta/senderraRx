// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LoginFormFeature } from '@senderrarx/auth-feature';
import { legacyLogicalPropertiesTransformer, StyleProvider } from '@ant-design/cssinjs'
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div className={styles['container']}>
      < StyleProvider transformers = { [ legacyLogicalPropertiesTransformer ] }> 
          <LoginFormFeature />
          <img src='./assets/common/images/Senderra-Logo_Stacked_WHITE.png' alt="" />
      </ StyleProvider >
    </div>
  );
}

export default App;
