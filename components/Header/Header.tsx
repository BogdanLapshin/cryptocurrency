import styles from './Header.module.scss';
import Logo from './Logo/Logo';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo name="Test Task" />
      </div>
    </header>
  );
};

export default Header;
