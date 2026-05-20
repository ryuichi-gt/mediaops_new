"use client";

import { ChevronDown } from "lucide-react";

export default function Header({ title }: { title?: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-paper-border bg-paper/95 px-5 py-3 backdrop-blur md:px-8 md:py-4">
      <div className="flex items-center justify-between">
        <div className="md:hidden">
          <div className="text-[10px] uppercase tracking-wider text-ink-subtle">SympaFit</div>
          <div className="text-sm font-semibold tracking-tight">{title ?? "MediaOps"}</div>
        </div>
        <div className="hidden md:block">
          <div className="text-xs text-ink-subtle">Tenant</div>
          <button className="mt-0.5 flex items-center gap-1.5 text-sm font-medium">
            SympaFit
            <ChevronDown className="h-3.5 w-3.5 text-ink-muted" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:block text-xs text-ink-muted">
            Week 21 · 2026
          </div>
          <div className="h-8 w-8 rounded-full bg-accent-soft text-[11px] font-medium text-ink flex items-center justify-center">
            R
          </div>
        </div>
      </div>
    </header>
  );
}
