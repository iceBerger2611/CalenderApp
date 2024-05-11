import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calender App",
  description: "Web App to Manage your Calander",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{ height: "100%" }} lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
