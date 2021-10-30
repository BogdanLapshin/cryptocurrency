import Card from '../Card/Card';
import CurrencyBlock from './CurrencyBlock/CurrencyBlock';
import styles from './CurrencyRateBlock.module.scss';
const CurrencyRateBlock = () => {
  return (
    <section className={styles.currency__rate__block}>
      <div className={styles.container}>
        <Card
          name="Andy"
          position="Head Of UX Design"
          text="“The Style Of This Test Task
        Matches The Style That You Will
        Be Making Real Job In.”"
        />
        <CurrencyBlock />
      </div>
    </section>
  );
};

export default CurrencyRateBlock;
