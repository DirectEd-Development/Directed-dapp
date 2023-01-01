import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, Navbar } from "../components";
import { WalletProvider } from '../contexts/wallet';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
    </WalletProvider>
  );
}

export default MyApp;
