import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// const inter = Inter({ subsets: ["latin"] });

const ubuntu = Ubuntu({ weight: ["400"], subsets: ["cyrillic"] });

export const metadata = {
  title: "BRANDPAL",
  description:
    "Make your marketing something show off. And effective strategies your need and branding goal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={ubuntu.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
