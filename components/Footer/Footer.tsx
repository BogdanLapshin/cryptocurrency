import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.comment}>Don’t Forget To Deploy Project To GitHub Pages</div>
        <div className={styles.copyright}>
          <div className={styles.info}>© Test Task Limited™, 2020. All rights reserved.</div>
          <div className={styles.terms}>Terms Of Service | Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
