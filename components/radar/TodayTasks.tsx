import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { TodayTask } from "@/lib/types";

export default function TodayTasks({ tasks }: { tasks: TodayTask[] }) {
  return (
    <section>
      <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-ink-muted">
        Today
      </h3>
      <div className="rounded-xl border border-paper-border bg-paper-card divide-y divide-paper-border">
        {tasks.map((t) => (
          <Link
            key={t.id}
            href={t.href}
            className="flex items-center justify-between px-4 py-3.5 transition-colors hover:bg-paper"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-accent-soft px-2 text-xs font-medium text-accent">
                {t.count}
              </span>
              <span className="text-sm">{t.label}</span>
            </div>
            <ChevronRight className="h-4 w-4 text-ink-subtle" />
          </Link>
        ))}
      </div>
    </section>
  );
}
