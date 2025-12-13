import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight:["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "You are special!",
  description: "A cute little website filled with compliments, surprises, and a heartfelt message made just for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} bg-black antialiased select-none`}
      >
        {children}
        <div className="fixed bottom-2 right-2 text-pink-300/50 text-xs font-light flex items-center gap-1">
          made with <span className="text-pink-400">♥</span> by jeet
        </div>
      </body>
    </html>
  );
}
