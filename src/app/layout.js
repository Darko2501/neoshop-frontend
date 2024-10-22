import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from "@/components/Navbar";
import { AuthProvider } from '@/context/AuthContext';
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Your Site Title',
    description: 'Your site description goes here.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AuthProvider>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </AuthProvider>
        </body>
        </html>
    );
}
