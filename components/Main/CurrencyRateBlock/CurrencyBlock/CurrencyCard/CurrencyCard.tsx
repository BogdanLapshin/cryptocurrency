import styles from './CurrencyCard.module.scss';
type CurrencyCardPropsType = {
  title?: string;
  text?: string;
};
const CurrencyCard: React.FC<CurrencyCardPropsType> = ({ title, text }): JSX.Element => {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.price}>$12380</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default CurrencyCard;
