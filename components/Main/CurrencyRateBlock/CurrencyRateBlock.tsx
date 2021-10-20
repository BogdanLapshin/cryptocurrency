import Card from '../Card/Card';
import CurrencyBlock from './CurrencyBlock/CurrencyBlock';
import style from './CurrencyRateBlock.module.scss';
const CurrencyRateBlock = () => {
  return (
    <section className={style.currency__rate__block}>
      <Card
        name="Andy"
        position="Head Of UX Design"
        text="“The Style Of This Test Task
        Matches The Style That You Will
        Be Making Real Job In.”"
      />
      <CurrencyBlock />
    </section>
  );
};

export default CurrencyRateBlock;
