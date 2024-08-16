import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/item/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EverCart',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <main> */}
        <Header />
        {children}
        {/* </main> */}
      </body>
    </html>
  );
}
