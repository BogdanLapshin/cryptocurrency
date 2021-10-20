import CurrencyRateBlock from './CurrencyRateBlock/CurrencyRateBlock';
import styles from './Main.module.scss';
const Main: React.FC = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titles__wrapper}>
          <h1>Do The Task And Have Fun</h1>
          <h2>Be Persistent & Attentive To Details</h2>
        </div>
        <CurrencyRateBlock />
      </div>
    </main>
  );
};

export default Main;
