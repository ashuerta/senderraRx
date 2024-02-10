import styles from './auth-feature.module.scss';

/* eslint-disable-next-line */
export interface AuthFeatureProps {}

export function AuthFeature(props: AuthFeatureProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AuthFeature!</h1>
    </div>
  );
}

export default AuthFeature;
