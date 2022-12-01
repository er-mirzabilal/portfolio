
import Navbar from '../components/Navbar';
import StickyMedia from '../components/stickyMedia';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Navbar/>
     <StickyMedia/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
