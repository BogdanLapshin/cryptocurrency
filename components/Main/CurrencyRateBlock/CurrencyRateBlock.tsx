import Card from '../Card/Card';
import CurrencyBlock from './CurrencyBlock/CurrencyBlock';
import styles from './CurrencyRateBlock.module.scss';
import main_styles from '../../../styles/Home.module.scss';
const CurrencyRateBlock = () => {
  return (
    <section className={styles.currency__rate__block}>
      <div className={main_styles.container}>
        <div className={styles.inner}>
          <Card
            className="currency__card"
            name="Andy"
            position="Head Of UX Design"
            text="“The Style Of This Test Task
        Matches The Style That You Will
        Be Making Real Job In.”"
          />
          <CurrencyBlock />
        </div>
      </div>
    </section>
  );
};

export default CurrencyRateBlock;
