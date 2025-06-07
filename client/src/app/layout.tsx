import type { Metadata } from "next";
import "@/app/globals.css";
import ReduxProvider from "@/components/providers/ReduxProvider";

export const metadata: Metadata = {
  title: "MediMart",
  description: "Medicine Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary`} cz-shortcut-listen="true">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
