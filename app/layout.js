import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "StrongX - Your Fitness Mantra",
  description: "Get your desired body shape with StrongX, a trusted gym offering variety of services that help your body remove all detox and make you fit enough to enjoy your life.",
  keywords:[
    "Gym",
    "Yoga",
    "Fitness",
    "Fitness Packages",
    "Swimming"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
