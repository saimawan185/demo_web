"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** Soft fade when navigating between pages */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const t = window.setTimeout(() => setVisible(true), 30);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <div
      className={`page-enter ${visible ? "page-enter-active" : ""}`}
      key={pathname}
    >
      {children}
    </div>
  );
}
