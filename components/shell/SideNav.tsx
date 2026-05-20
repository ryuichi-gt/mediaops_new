"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Radar,
  Lightbulb,
  BookOpen,
  Layers,
  Sparkles,
  CheckCircle2,
  Calendar,
  BarChart3,
  Search,
  Zap,
  Settings,
  PlayCircle,
} from "lucide-react";

const items = [
  { href: "/radar", label: "Market Radar", icon: Radar },
  { href: "/strategy", label: "Strategy", icon: Lightbulb },
  { href: "/knowledge", label: "Knowledge", icon: BookOpen },
  { href: "/channels", label: "Channels", icon: Layers },
  { href: "/studio", label: "Content Studio", icon: Sparkles },
  { href: "/review", label: "Review", icon: CheckCircle2 },
  { href: "/calendar", label: "Calendar", icon: Calendar },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/seo", label: "SEO / GEO", icon: Search },
  { href: "/auto", label: "Auto Mode", icon: Zap },
  { href: "/onboarding", label: "Onboarding", icon: PlayCircle },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function SideNav() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex md:w-60 md:flex-col md:border-r md:border-paper-border md:bg-paper">
      <div className="px-6 pt-6 pb-8">
        <div className="text-sm font-semibold tracking-tight">MediaOps</div>
        <div className="mt-0.5 text-xs text-ink-muted">SympaFit</div>
      </div>
      <nav className="flex-1 px-3">
        {items.map((item) => {
          const active = pathname === item.href || pathname?.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mb-0.5 flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                active
                  ? "bg-accent-soft text-ink"
                  : "text-ink-muted hover:bg-paper-border/40 hover:text-ink"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-paper-border px-6 py-4 text-xs text-ink-subtle">
        v0.1 · mock
      </div>
    </aside>
  );
}
