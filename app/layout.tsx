
import type { Metadata } from "next";
import {Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/themeprovider";
const FontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  // src: "./fonts/GeistVF.woff",//check me if anything regarding font comes up odd
  variable: "--font-sans",
  weight: ['300','400','500','600','700']
});
// const geistMono = Plus_Jakarta_Sans({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "CarePro",
  description: "Healthcare management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-dark-300 font-sans antialiased", FontSans.variable)} 
      ><ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
        
      </body>
    </html>
  );
}
