import { Activity, Sparkles, Moon, Coffee, Heart, TrendingUp } from "lucide-react";

const channelTheme: Record<
  string,
  { from: string; to: string; accent: string; Icon: typeof Activity }
> = {
  athlete: {
    from: "from-sky-500",
    to: "to-indigo-600",
    accent: "text-sky-50",
    Icon: Activity,
  },
  femtech: {
    from: "from-rose-400",
    to: "to-fuchsia-600",
    accent: "text-rose-50",
    Icon: Heart,
  },
  lifestyle: {
    from: "from-amber-400",
    to: "to-orange-500",
    accent: "text-amber-50",
    Icon: Coffee,
  },
};

const platformByTag: Record<string, typeof Activity> = {
  睡眠: Moon,
  集中力: Coffee,
  PMS: Heart,
  マラソン: TrendingUp,
};

export default function DraftThumb({
  channelId,
  title,
  tags,
  size = "md",
}: {
  channelId: string;
  title: string;
  tags?: string[];
  size?: "md" | "lg";
}) {
  const theme = channelTheme[channelId] ?? channelTheme.lifestyle;
  const Icon =
    (tags || []).map((t) => platformByTag[t]).find(Boolean) ?? theme.Icon;

  const heightCls = size === "lg" ? "h-56 md:h-72" : "h-36 md:h-44";

  return (
    <div
      className={`relative w-full ${heightCls} bg-gradient-to-br ${theme.from} ${theme.to} overflow-hidden`}
    >
      {/* Soft pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-12 -right-10 h-44 w-44 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/30 blur-3xl" />
      </div>
      {/* Icon glyph */}
      <Icon
        className={`absolute right-4 top-4 h-10 w-10 ${theme.accent} opacity-70`}
        strokeWidth={1.5}
      />
      <Sparkles
        className={`absolute left-4 top-4 h-3.5 w-3.5 ${theme.accent} opacity-80`}
      />
      {/* Title overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <div
          className={`${theme.accent} text-[10px] uppercase tracking-wider opacity-80`}
        >
          {channelId === "athlete"
            ? "for Athlete"
            : channelId === "femtech"
            ? "for Femtech"
            : "Lifestyle"}
        </div>
        <div
          className={`mt-1 line-clamp-2 text-sm font-semibold leading-snug text-white md:text-base`}
        >
          {title}
        </div>
      </div>
    </div>
  );
}
