import type { PropsWithChildren } from "react";

import "@/styles/globals.css";
import { MenuSidebar } from "@/components/menu-side-bar/MenuSidebar";
import { Header } from "@/components/header/Header";

export default function PostAddLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <html lang="en" className="">
      <body>
        <div className="flex flex-row">
          <MenuSidebar />
          <div className="flex flex-col space-y-[20px]">
            <Header />
            <main className="ml-[20px]">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
