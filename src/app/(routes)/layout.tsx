import type { PropsWithChildren } from "react";

import "@/styles/globals.css";
import { MenuSidebar } from "@/components/menu-side-bar/MenuSidebar";
import { Header } from "@/components/Header/Header";
import { ThemeProvider } from "@/components/providers";

export default function MainRoutesLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <html lang="en" className="">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-row">
            <MenuSidebar />
            <div className="flex flex-col space-y-[20px]">
              <Header />
              <main className="ml-[20px]">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
