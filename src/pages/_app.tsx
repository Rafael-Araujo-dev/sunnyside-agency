import type { AppProps } from "next/app";
import GlobalStyled from "@styles/GlobalStyled";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      offset: 50,
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <GlobalStyled />
    </>
  );
}

export default MyApp;
