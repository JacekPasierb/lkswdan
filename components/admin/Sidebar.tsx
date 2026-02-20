"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import { Separator } from "@/components/ui/seperator";


const items = [
  {href: "/admin", label: "Dashboard"},
  {href: "/admin/settings", label: "Ustawienia"},

  {href: "/admin/posts", label: "Aktualności"},
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-72 border-r bg-background md:block">
      <div className="flex h-full flex-col p-4">
        <div className="flex items-center justify-between px-2 py-2">
          <div className="text-lg font-semibold tracking-tight">CMS</div>
          <div className="text-xs text-muted-foreground">v1</div>
        </div>

        <Separator className="my-3" />

        <nav className="flex flex-col gap-1">
          {items.map((it) => {
            const active =
              pathname === it.href ||
              (it.href !== "/admin" && pathname.startsWith(it.href));

            return (
              <Link
                key={it.href}
                href={it.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition hover:bg-muted",
                  active && "bg-muted font-medium"
                )}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-4 text-xs text-muted-foreground">
          Multi-site:{" "}
          <span className="font-medium">
            {process.env.NEXT_PUBLIC_SITE_KEY ?? "demo"}
          </span>
        </div>
      </div>
    </aside>
  );
}
