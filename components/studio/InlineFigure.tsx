import { BarChart3, LineChart, PieChart, Activity } from "lucide-react";

const ICONS = [LineChart, BarChart3, Activity, PieChart];

export default function InlineFigure({
  caption,
  index,
  channelId,
}: {
  caption: string;
  index: number;
  channelId: string;
}) {
  const Icon = ICONS[index % ICONS.length];
  const tint =
    channelId === "athlete"
      ? "from-sky-50 to-indigo-100 text-sky-700"
      : channelId === "femtech"
      ? "from-rose-50 to-fuchsia-100 text-rose-700"
      : "from-amber-50 to-orange-100 text-amber-700";

  // Mock data line for visual interest
  const points = Array.from({ length: 20 }, (_, i) => {
    const seed = (i * 17 + index * 31 + channelId.length * 7) % 100;
    return 40 + ((seed * 60) / 100) - (i > 10 ? 15 : 0);
  });
  const poly = points
    .map((p, i) => `${(i / (points.length - 1)) * 100},${100 - p}`)
    .join(" ");

  return (
    <figure className="overflow-hidden rounded-xl border border-paper-border bg-paper-card">
      <div
        className={`relative h-44 w-full bg-gradient-to-br ${tint} md:h-56`}
      >
        <Icon
          className="absolute right-3 top-3 h-5 w-5 opacity-60"
          strokeWidth={1.5}
        />
        {/* Mock chart */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-2/3 w-full"
        >
          <polyline
            points={poly}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="opacity-70"
          />
          <polyline
            points={`${poly} 100,100 0,100`}
            fill="currentColor"
            className="opacity-15"
          />
        </svg>
        <div className="absolute left-3 top-3 text-[10px] uppercase tracking-wider opacity-60">
          Figure {index + 1}
        </div>
      </div>
      <figcaption className="px-4 py-2.5 text-xs text-ink-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
