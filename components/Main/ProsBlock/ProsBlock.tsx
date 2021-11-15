import Card from '../Card/Card';
import Title from '../Title/Title';
import styles from './ProsBlock.module.scss';
import main_styles from '../../../styles/Home.module.scss';
const ProsBlock: React.FC = (): JSX.Element => {
  return (
    <section className={styles.pros__block}>
      <div className={main_styles.container}>
        <div className={styles.inner}>
          <Title title="What Pros Are Saying..." />
          <div className={styles.cards__wrapper}>
            <Card
              className="pros__card"
              name="Nia"
              text="“This task can be perfect for students from FIT”"
            />
            <Card
              className="pros__card"
              name="Abigale"
              text="“I am so sexy, that men are doing  test tasks for me for free.”"
            />
            <Card className="pros__card" name="Fedya" text="“Kuku Epta. EZ Task.”" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProsBlock;
