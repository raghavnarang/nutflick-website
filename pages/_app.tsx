import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ShopifyProvider } from "@shopify/hydrogen/dist/esnext/foundation/ShopifyProvider";
import { CartProvider } from "@shopify/hydrogen";
import config from "../shopify.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShopifyProvider shopifyConfig={config}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ShopifyProvider>
  );
}

export default MyApp;
