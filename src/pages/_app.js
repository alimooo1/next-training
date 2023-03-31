import "@/styles/globals.css";
import { Dosis } from "next/font/google";

const font = Dosis({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />;
    </main>
  );
}
