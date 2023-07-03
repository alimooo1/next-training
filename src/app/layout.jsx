import "./styles/globals.css";
import { Dosis } from "next/font/google";

export const metadata = {
  title: "Users List",
};

const font = Dosis({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
