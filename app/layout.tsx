import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indian Stocks Under ?50 - 2-Day Momentum Analyzer",
  description: "Speculative scanner to surface a short-term momentum candidate among Indian stocks priced under ?50. Not financial advice.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
