import CurrencyRateBlock from './CurrencyRateBlock/CurrencyRateBlock';
import styles from './Main.module.scss';
import ProsBlock from './ProsBlock/ProsBlock';
import ReviewCard from './ReviewsBlock/ReviewCard/ReviewCard';
import ReviewsBlock from './ReviewsBlock/ReviewsBlock';
import MainTitle from './Title/MainTitle';
const Main: React.FC = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <MainTitle />
      <CurrencyRateBlock />
      <ProsBlock />
      <ReviewsBlock />
    </main>
  );
};

export default Main;
