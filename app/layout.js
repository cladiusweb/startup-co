import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "StartupCo // B2B Otonom Robotik ve Gömülü Yazılım Sistemleri",
  description:
    "Yazılım ve robotik sistemler geliştiren B2B odaklı derin teknoloji şirketi. Endüstriyel 6-DOF manipülatörler, deterministik mikrosaniye mikroçekirdekler ve yapay zeka entegrasyonu.",
  keywords: [
    "StartupCo",
    "B2B robotik sistemler",
    "endüstriyel manipülatör",
    "ApexArm",
    "SynapseOS",
    "deterministik RTOS",
    "derin teknoloji",
    "Clean Tech",
  ],
  authors: [{ name: "StartupCo Robotics Lab" }],
  openGraph: {
    title: "StartupCo // Kurumsal Robotik & Yazılım",
    description: "Donanım ve yazılımın mikrosaniye hassasiyetle bütünleştiği ultra-minimalist B2B teknoloji şirketi.",
    type: "website",
    locale: "tr_TR",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
