"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RouteRefresh() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [pathname, router]);

  return null;
}
