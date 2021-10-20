import styles from './CurrencyBlock.module.scss';
import CurrencyCard from './CurrencyCard/CurrencyCard';
const CurrencyBlock: React.FC = (): JSX.Element => {
  return (
    <div className={styles.currency__block}>
      <div className={styles.title}>Fonts & Colors Matter</div>
      <CurrencyCard title="Responsive Design" text="You’ll Learn A Lot From This Task" />
      <CurrencyCard title="Mobile Friendly " text="Don’t Forget About Small Devices" />
    </div>
  );
};

export default CurrencyBlock;
