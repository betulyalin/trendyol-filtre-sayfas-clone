import React from "react";
import "./globals.css"; 
import Header from "../components/Header";

export const metadata = {
  title: 'Trendyol UI',
};
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-gray-50 min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}