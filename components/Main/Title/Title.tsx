import styles from './Title.module.scss';
type TitlePropsType = {
  title?: string;
};
const Title: React.FC<TitlePropsType> = ({ title }): JSX.Element => {
  return <h4 className={styles.title}>{title}</h4>;
};

export default Title;
