type CurrencyArrowPropsType = {
  direction?: string;
  color?: string;
};

const CurrencyArrow: React.FC<CurrencyArrowPropsType> = ({ direction, color }): JSX.Element => {
  return (
    <svg
      width="10"
      height="11"
      transform={'rotate(' + direction + ')'}
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.19551 0.940112C5.04186 0.93941 4.88797 1.00233 4.77743 1.12884L0.920263 5.54332C0.719742 5.77282 0.743229 6.12141 0.972723 6.32193C1.20222 6.52246 1.55081 6.49897 1.75134 6.26947L4.64667 2.9558V10.3209C4.64667 10.6256 4.89372 10.8727 5.19848 10.8727C5.50324 10.8727 5.75029 10.6256 5.75029 10.3209L5.75029 2.96525L8.64612 6.27006C8.84696 6.49927 9.19559 6.52227 9.42481 6.32142C9.65402 6.12058 9.67701 5.77195 9.47617 5.54274L5.65517 1.1821C5.5559 1.03604 5.38839 0.940104 5.19848 0.940104C5.19749 0.940104 5.1965 0.940107 5.19551 0.940112Z"
        fill={color}
      />
    </svg>
  );
};

export default CurrencyArrow;
