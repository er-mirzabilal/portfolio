
import Navbar from '../components/Navbar';
import StickyMedia from '../components/stickyMedia';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
     <Navbar/>
     <StickyMedia/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
