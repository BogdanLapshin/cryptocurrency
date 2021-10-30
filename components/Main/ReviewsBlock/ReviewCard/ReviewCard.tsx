import styles from './ReviewCard.module.scss';
import Star from './Star';
import Image from 'next/image';
type ReviewCardPropsType = {
  firstname?: string;
  lastname?: string;
  review?: string;
  time?: string;
  starsAmount?: any;
};
const ReviewCard: React.FC<ReviewCardPropsType> = ({
  firstname,
  lastname,
  review,
  time,
  starsAmount,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.photo__wrapper}>
          <Image
            src={'/assets/people/' + firstname + '.jpeg'}
            width="100%"
            height="100%"
            className={styles.person__img}
          />
        </div>
        <div className={styles.review__wrapper}>
          <div className={styles.review}>{review}</div>
          <div className={styles.name}>{firstname + ' ' + lastname}</div>
        </div>
      </div>
      <div className={styles.review__info}>
        <div className={styles.time}>{time}</div>
        <div className={styles.stars__wrapper}>
          {[...Array(5)].map((e, i) => (
            <Star color={parseInt(starsAmount) <= i ? 'rgba(255, 255, 255,0.5)' : '#FFD450'} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
