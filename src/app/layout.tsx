import type { Metadata } from "next";
import { Nunito, Oswald } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Johnley Mark D. Delgado - Mobile & Full-stack Developer",
  description: "Passionate Mobile & Full-stack Developer dedicated to crafting seamless digital experiences and robust applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${nunito.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
