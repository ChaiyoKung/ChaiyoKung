import type { Metadata } from "next";
import "./globals.css";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "ChaiyoKung",
  description: "ChaiyoKung – Software Engineer, DevOps Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={prompt.className}>
      <body className="bg-gradient-to-br from-[#0A2EFC] to-[#0AFCC4]">{children}</body>
    </html>
  );
}
