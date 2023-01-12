import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, Navbar, Hero } from "../components";
import { MeshProvider } from "@meshsdk/react";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
    </MeshProvider>
  );
}

export default MyApp;
