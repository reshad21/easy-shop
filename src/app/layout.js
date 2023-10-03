import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ['latin'],
  variable: "--font-roboto",
});

export const metadata = {
  title: 'Easy Shop',
  description: 'Easy Shop is an e-commerce web application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
