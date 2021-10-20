import styles from './Card.module.scss';
type CardPropsType = {
  name?: string;
  position?: string;
  text?: string;
  className?: any;
};
const Card: React.FC<CardPropsType> = ({ name, position, text, className }) => {
  const classNames = [styles.card];
  className != '' && classNames.push(className);
  return (
    <div className={classNames.join(' ')}>
      <div className={styles.photo__wrapper}>
        <img src="#" alt="person" />
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
