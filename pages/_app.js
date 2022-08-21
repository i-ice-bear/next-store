import "../styles/globals.css";
import NavbarComponent from "./Router/Navbar";
import { createTheme, NextUIProvider } from "@nextui-org/react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

const lightTheme = createTheme({
  type: "light",
  theme: {},
});

const darkTheme = createTheme({
  type: "dark",
  theme: {},
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      > */}
        {/* <NextUIProvider> */}
          <Component {...pageProps} />
          <NavbarComponent />
        {/* </NextUIProvider> */}
      {/* </NextThemesProvider> */}
    </>
  );
}

export default MyApp;
