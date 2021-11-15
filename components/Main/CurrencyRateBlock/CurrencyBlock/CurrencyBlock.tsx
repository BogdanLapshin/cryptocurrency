import axios from 'axios';
import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import styles from './CurrencyBlock.module.scss';
import CurrencyCard from './CurrencyCard/CurrencyCard';
const CurrencyBlock = () => {
  const [currency, setCurrency] = useState<any>(null);
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((response) => {
        setCurrency(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!currency) {
    return null;
  }

  return (
    <div className={styles.currency__block}>
      <div className={styles.title}>Fonts & Colors Matter</div>
      <CurrencyCard
        title="Responsive Design"
        text="You’ll Learn A Lot From This Task"
        price={currency[0].current_price}
        percentage={currency[0].price_change_percentage_24h}
      />
      <CurrencyCard
        title="Mobile Friendly "
        text="Don’t Forget About Small Devices"
        price={currency[1].current_price}
        percentage={currency[1].price_change_percentage_24h}
      />
    </div>
  );
};

export default CurrencyBlock;
