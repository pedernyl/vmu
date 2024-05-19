import Navigation from "./components/navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ski-VM Trondheim solidaritet med Ukraina",
  description: "Nettsted for solidaritet med Ukraina Ski-VM Trondheim 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <meta
            name="format-detection"
            content="telephone=no, date=no, email=no, address=no"
        />
    </head>
    <body className={inter.className}>
    <Navigation/>
    {children}
    </body>
    </html>
  );
}
