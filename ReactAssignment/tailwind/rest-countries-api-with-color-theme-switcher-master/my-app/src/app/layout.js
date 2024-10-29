
import "./globals.css";
import { Nunito_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
const Nunito_Sans_init = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800'],
  variable: '--font-nunito-sans',
})
export const metadata = {
  title: "RestCountries",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body
        className={Nunito_Sans_init.variable}>
        <ThemeProvider attribute="class"> {children}</ThemeProvider>
      </body>
    </html>

  );
}