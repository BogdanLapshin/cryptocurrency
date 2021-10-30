import CurrencyRateBlock from './CurrencyRateBlock/CurrencyRateBlock';
import styles from './Main.module.scss';
import ProsBlock from './ProsBlock/ProsBlock';
import ReviewCard from './ReviewsBlock/ReviewCard/ReviewCard';
import ReviewsBlock from './ReviewsBlock/ReviewsBlock';
const Main: React.FC = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <div className={styles.titles__wrapper}>
        <h1>Do The Task And Have Fun</h1>
        <h2>Be Persistent & Attentive To Details</h2>
      </div>
      <CurrencyRateBlock />
      <ProsBlock />
      <ReviewsBlock />
    </main>
  );
};

export default Main;
