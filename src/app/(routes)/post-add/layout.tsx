import type { PropsWithChildren } from "react";

import "@/styles/globals.css";

export default function PostAddLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <html lang="en" className="">
      <body>{children}</body>
    </html>
  );
}
