import Title from '../Title/Title';
import ReviewCard from './ReviewCard/ReviewCard';
import styles from './ReviewsBlock.module.scss';
import main_styles from '../../../styles/Home.module.scss';
const ReviewsBlock = () => {
  return (
    <section className={styles.reviews__block}>
      <div className={main_styles.container}>
        <div className={styles.inner}>
          <Title title="What Other Coders Are Saying..." />
          <ReviewCard
            firstname="John"
            lastname="Kennedy"
            review="Wow, this test task is absolutely amazing! Loved it!"
            time="05:20"
            starsAmount="5"
          />
          <ReviewCard
            firstname="Vasiliy"
            lastname="Igorsky"
            review="Holy cow, developers rock, but I missed the 5 stars button."
            time="14:30"
            starsAmount="4"
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewsBlock;
