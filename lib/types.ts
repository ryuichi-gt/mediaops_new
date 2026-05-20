export type Tenant = {
  id: string;
  name: string;
  domain: string;
  tagline?: string;
  industry: string;
  founder?: string;
  research?: string;
  price?: string;
  channels: Channel[];
};

export type Channel = {
  id: string;
  name: string;
  persona: string;
  tone: string;
  platforms: string[];
  pillars?: string[];
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

export type DraftRationale = {
  knowledge: string;
  trend: string;
  strategy: string;
};

export type DraftScores = {
  claude: number;
  gpt4o: number;
  gemini: number;
  avg: number;
};

export type DraftContent = {
  id: string;
  channelId: string;
  channelName: string;
  platform: string;
  format?: string;
  title: string;
  body: string;
  image?: string;
  scores: DraftScores;
  status: "pending" | "approved" | "scheduled" | "published";
  scheduledAt?: string;
  rationale?: DraftRationale;
  tags?: string[];
  needsReview?: boolean;
};

export type Persona = {
  name: string;
  channel: string;
  summary: string;
  pains: string[];
};

export type CompetitorProfile = {
  name: string;
  position: string;
  diff: string;
};
