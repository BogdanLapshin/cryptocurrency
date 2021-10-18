import Head from 'next/head';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
const index: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default index;
