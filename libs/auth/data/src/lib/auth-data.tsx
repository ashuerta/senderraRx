import styles from './auth-data.module.scss';

/* eslint-disable-next-line */
export interface AuthDataProps {}

export function AuthData(props: AuthDataProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AuthData!</h1>
    </div>
  );
}

export default AuthData;
