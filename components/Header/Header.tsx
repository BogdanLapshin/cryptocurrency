import styles from './Header.module.scss';
import main_styles from '../../styles/Home.module.scss';
import Logo from './Logo/Logo';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={main_styles.container}>
        <div className={styles.inner}>
          <Logo name="Test Task" />
        </div>
      </div>
    </header>
  );
};

export default Header;
