export type Tenant = {
  id: string;
  name: string;
  domain: string;
  industry: string;
  channels: Channel[];
};

export type Channel = {
  id: string;
  name: string;
  persona: string;
  tone: string;
  platforms: string[];
};

export type Briefing = {
  weekLabel: string;
  headline: string;
  summary: string;
  recommendedActions: string[];
};

export type Kpi = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "flat";
};

export type Trend = {
  keyword: string;
  volume: string;
  growth: string;
  competition: "low" | "medium" | "high";
};

export type CompetitorMove = {
  competitor: string;
  action: string;
  detail: string;
  timeAgo: string;
  impact: "low" | "medium" | "high";
};

export type TodayTask = {
  id: string;
  label: string;
  count: number;
  href: string;
};

export type DraftContent = {
  id: string;
  channelId: string;
  channelName: string;
  platform: string;
  title: string;
  body: string;
  score: number;
  status: "pending" | "approved" | "scheduled" | "published";
  scheduledAt?: string;
  imageUrl?: string;
};
