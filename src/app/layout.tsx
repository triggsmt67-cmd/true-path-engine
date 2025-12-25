import { draftMode } from "next/headers";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {isEnabled && <PreviewNotice />}
        {children}
      </body>
    </html>
  );
}