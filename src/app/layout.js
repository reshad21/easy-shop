import Footer from '@/components/Footer';
import Navber from '@/components/Navber';
import Providers from '@/providers';
import classNames from '@/utils/classNames';
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
    <html lang="en" data-theme="dark" className='transition-all'>
      <body className={classNames(roboto.variable, "container mx-auto px-2 font-roboto")}>

        <Providers>
          <div className="flex min-h-screen flex-col justify-between">
            <Navber />
              <main className='mt-5 max-w-7xl mx-auto'>{children}</main>
            <Footer />
          </div>
        </Providers>

      </body>
    </html>
  )
}
