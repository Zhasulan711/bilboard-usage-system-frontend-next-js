import type { PropsWithChildren } from "react";

import "@/styles/globals.css";
import { MenuSidebar } from "@/components/menu-side-bar/MenuSidebar";
import { Header } from "@/components/Header/Header";
import { ThemeProvider } from "@/components/providers";
import { ClickedIndexProvider } from "@/context/ClickedIndexContext";

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
          <ClickedIndexProvider>
            <div className="flex flex-row">
              <MenuSidebar />
              <div className="flex flex-col space-y-[20px]">
                <Header />
                <main className="ml-[20px]">{children}</main>
              </div>
            </div>
          </ClickedIndexProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
