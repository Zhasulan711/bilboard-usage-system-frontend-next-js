import type { PropsWithChildren } from "react";

import "@/styles/globals.css";

export default function SignUpLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <html lang="en" className="hidden mcb-pro-16:block">
      <body>{children}</body>
    </html>
  );
}
