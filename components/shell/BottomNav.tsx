"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Radar, Sparkles, Calendar, BarChart3, MoreHorizontal } from "lucide-react";

const tabs = [
  { href: "/radar", label: "Radar", icon: Radar },
  { href: "/studio", label: "Studio", icon: Sparkles },
  { href: "/calendar", label: "Calendar", icon: Calendar },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/more", label: "More", icon: MoreHorizontal },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-paper-border bg-paper/95 backdrop-blur md:hidden">
      <ul className="grid grid-cols-5">
        {tabs.map((tab) => {
          const active = pathname === tab.href || pathname?.startsWith(tab.href + "/");
          const Icon = tab.icon;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className={`flex flex-col items-center gap-1 px-2 py-2.5 text-[10px] ${
                  active ? "text-ink" : "text-ink-subtle"
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? "stroke-2" : "stroke-[1.5]"}`} />
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
