import styles from './Card.module.scss';
import Image from 'next/image';
type CardPropsType = {
  name?: string;
  position?: string;
  text?: string;
  className?: any;
};
const Card: React.FC<CardPropsType> = ({ name, position, text, className }) => {
  const classNames = [styles.card];
  className != '' && classNames.push(styles[className]);
  return (
    <div className={classNames.join(' ')}>
      <div className={styles.photo__wrapper}>
        <Image
          src={'/assets/people/' + name + '.jpeg'}
          alt="person"
          width="100%"
          height="100%"
          layout="responsive"
          className={styles.card__photo}
        />
      </div>
      <div className={styles.person__info}>
        <div className={styles.name}>{name}</div>
        {position != '' && <div className={styles.position}>{position}</div>}
      </div>
      <div className={styles.message}>{text}</div>
    </div>
  );
};

export default Card;
