import "../styles/globals.css";
import NavbarComponent from "./Router/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NavbarComponent />
    </>
  );
}

export default MyApp;
