import styles from './CurrencyCard.module.scss';
import CurrencyArrow from './CurrencyArrow';
type CurrencyCardPropsType = {
  title?: string;
  text?: string;
  price?: number;
  percentage: number;
};
const CurrencyCard: React.FC<CurrencyCardPropsType> = ({
  title,
  text,
  price,
  percentage,
}): JSX.Element => {
  const customClass = percentage < 0 ? styles.percent__up : styles.percent__down;
  const percentAmount =
    percentage >= 0
      ? '+' + parseFloat(`${percentage}`).toFixed(1) + '%'
      : parseFloat(`${percentage}`).toFixed(1) + '%';
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.price__wrapper}>
        <div className={styles.price}>${price && Math.round(price)}</div>
        <div className={styles.percent__wrapper + ' ' + customClass}>
          {percentAmount}
          <CurrencyArrow
            direction={percentage > 0 ? '0' : '180'}
            color={percentage > 0 ? '#FE805C' : '#4643D3'}
          />
        </div>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default CurrencyCard;
