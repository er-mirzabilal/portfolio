import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import StickyMedia from "../components/stickyMedia";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script src="../node_modules/tw-elements/dist/js/index.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <Navbar />
      <StickyMedia />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
