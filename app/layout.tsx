import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';
import "./globals.css";
import { FloatButton } from 'antd';
import { ConfigProvider, theme } from 'antd';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WishlistCartProvider } from "./context/WishlistCartContext";
import LangFloatSwitch from "./language";
import GoogleTranslateFloatButton from "./language";

export const dynamic = "force-dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atrafi",
  description: "Atrafi  is dedicated to provide and maintain the highest quality of comprehensive orthotic and prosthetic (O&P) and rehabilitation care for our patients in a scientific and professional environment.",
  keywords: "orthotic, prosthetic, rehabilitation, orthopaedic care, O&P clinic, custom orthotics, prosthetic limbs, patient care, rehabilitation services",
  authors: {
    name:"Atrafi Medical Team"
  },
  robots:"index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WishlistCartProvider>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                  colorPrimary: '#357ABD',
                  colorLink: '#000',
                  colorLinkHover: '#000',
                  colorLinkActive: 'blue'
                },
              }}
            >
                <Header />
                {children}
                <GoogleTranslateFloatButton />
                <Footer />
            </ConfigProvider>
          </AntdRegistry>
        </WishlistCartProvider>
      </body>
    </html>
  );
}
