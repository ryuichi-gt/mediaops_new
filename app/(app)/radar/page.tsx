import Header from "@/components/shell/Header";
import BriefingCard from "@/components/radar/BriefingCard";
import KpiGrid from "@/components/radar/KpiGrid";
import TrendingList from "@/components/radar/TrendingList";
import CompetitorMoves from "@/components/radar/CompetitorMoves";
import TodayTasks from "@/components/radar/TodayTasks";
import radar from "@/data/radar.json";
import type { Briefing, Kpi, Trend, CompetitorMove, TodayTask } from "@/lib/types";

export default function RadarPage() {
  return (
    <>
      <Header title="Market Radar" />
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10">
        <div className="space-y-8 md:space-y-10">
          <BriefingCard briefing={radar.briefing as Briefing} />
          <KpiGrid kpis={radar.kpis as Kpi[]} />
          <TrendingList trends={radar.trends as Trend[]} />
          <CompetitorMoves moves={radar.competitorMoves as CompetitorMove[]} />
          <TodayTasks tasks={radar.todayTasks as TodayTask[]} />
        </div>
      </div>
    </>
  );
}
