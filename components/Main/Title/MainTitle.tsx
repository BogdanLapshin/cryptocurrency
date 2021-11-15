import styles from './Title.module.scss';
import main_title from '../../../styles/Home.module.scss';
const MainTitle = () => {
  return (
    <div className={styles.titles__wrapper}>
      <div className={main_title.container}>
        <div className={styles.inner}>
          <h1>Do The Task And Have Fun</h1>
          <h2>Be Persistent & Attentive To Details</h2>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
