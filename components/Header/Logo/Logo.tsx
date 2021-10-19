import styles from './Logo.module.scss';

type LogoPropsType = {
  name?: string;
};

const Logo: React.FC<LogoPropsType> = ({ name }): JSX.Element => {
  return (
    <div className={styles.logo}>
      <div className={styles.logo__img} />
      <div className={styles.logo__name}>{name}</div>
    </div>
  );
};

export default Logo;
