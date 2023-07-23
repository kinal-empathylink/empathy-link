import Provider from "./Provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Kinal EmpathyLink",
  description: "Denuncias de violencia escolar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} scrollbar-thin scrollbar-track-black scrollbar-thumb-zinc-600`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
