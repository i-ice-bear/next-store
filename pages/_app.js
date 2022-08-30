import React from "react";
import "../styles/globals.css";
import NavbarComponent from "./Router/Navbar";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const lightTheme = createTheme({
  type: "light",
  theme: {},
});

const darkTheme = createTheme({
  type: "dark",
  theme: {},
});

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = React.useState({});
  const [subTotal, setSubTotal] = React.useState();

  React.useEffect(() => {
    console.log("Log from console from _app.js");
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = () => {
    localStorage.setCart("Cart", newCart);
  };
  const addToCart = (variant, quantity, price, item, name, itemCode) => {
    let mycart = cart;
    if (mycart in cart) {
      newCart[itemCode].quantity = newCart[itemCode].quantity + quantity;
    } else {
      newCart[itemCode] = { quantity: 1, price, variant, item, name, quantity };
    }
    setCart(newCart);
    saveCart(newCart);
  };
  const removeFromCart = (variant, quantity, price, item, name, itemCode) => {
    let mycart = cart;
    if (mycart in cart) {
      newCart[itemCode].quantity = newCart[itemCode].quantity - quantity;
    }
    if (newCart[itemCode]["quantity"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart;
    let subt = 0;
    let keys = Object.keys(cart)
    for(let i=0; keys.length; i++){
      subt += mycart[keys[i]] * mycart[keys[i]].quantity
    }
    setSubTotal(subt)
  };
  return (
    <>
      <NextThemesProvider
        defaultTheme="light"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Component
            {...pageProps}
            cart={cart}
            subTotal={subTotal}
            clearCart={clearCart}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            saveCart={saveCart}
          />
          <NavbarComponent
            cart={cart}
            subTotal={subTotal}
            clearCart={clearCart}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            saveCart={saveCart}
          />
        </NextUIProvider>
      </NextThemesProvider>
    </>
  );
}

export default MyApp;
