import { getOverallStats } from "@/data/actionPlanData";
import { CheckCircle2, Clock, AlertTriangle, XCircle, ListTodo, Hourglass, Layers } from "lucide-react";

const OverviewStats = () => {
  const stats = getOverallStats();
  const completionRate = Math.round((stats.done / stats.total) * 100);

  const statCards = [
    { label: "Total Actions", value: stats.total, icon: ListTodo, colorClass: "bg-primary/10 text-primary" },
    { label: "Completed", value: stats.done, icon: CheckCircle2, colorClass: "bg-success/10 text-success" },
    { label: "Pending", value: stats.pending, icon: Clock, colorClass: "bg-warning/10 text-warning" },
    { label: "In Progress", value: stats.inProgress, icon: Hourglass, colorClass: "bg-info/10 text-info" },
    { label: "Dependency", value: stats.dependency, icon: Layers, colorClass: "bg-destructive/10 text-destructive" },
    { label: "Phase 2", value: stats.phase2, icon: AlertTriangle, colorClass: "bg-accent/10 text-accent" },
    { label: "Rejected", value: stats.rejected, icon: XCircle, colorClass: "bg-destructive/10 text-destructive" },
  ];

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="rounded-xl bg-card p-5 shadow-sm border border-border">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-card-foreground">Hassantuk Action Plan — Overall Progress</h2>
          <span className="text-2xl font-bold text-primary">{completionRate}%</span>
        </div>
        <div className="w-full h-3 rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
            style={{ width: `${completionRate}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {stats.done} of {stats.total} actions completed · {stats.pending} pending · {stats.rejected} rejected
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {statCards.map((s) => (
          <div key={s.label} className="rounded-xl bg-card p-4 shadow-sm border border-border flex flex-col items-center gap-2 text-center">
            <div className={`rounded-lg p-2 ${s.colorClass}`}>
              <s.icon className="h-5 w-5" />
            </div>
            <span className="text-2xl font-bold text-card-foreground">{s.value}</span>
            <span className="text-xs font-medium text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewStats;
