import type { PropsWithChildren } from "react";

import "@/styles/globals.css";

export default function TransactionLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}