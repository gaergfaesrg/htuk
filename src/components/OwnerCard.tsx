import { getOwnerStats } from "@/data/actionPlanData";
import { CheckCircle2, Clock, Hourglass, Layers, AlertTriangle } from "lucide-react";

interface OwnerCardProps {
  owner: string;
}

const OwnerCard = ({ owner }: OwnerCardProps) => {
  const stats = getOwnerStats(owner);

  const pendingBreakdown = [
    { label: "In Progress", value: stats.inProgress, icon: Hourglass, dot: "bg-warning" },
    { label: "Dependency", value: stats.dependency, icon: Layers, dot: "bg-destructive" },
    { label: "Phase 2", value: stats.phase2, icon: AlertTriangle, dot: "bg-accent" },
  ].filter(b => b.value > 0);

  // Only show pending items that are "Pending" status
  const pendingActions = stats.pendingItems;

  return (
    <div className="rounded-xl bg-card border border-border shadow-sm flex flex-col overflow-hidden h-full">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border bg-secondary/40">
        <h3 className="text-base font-semibold text-card-foreground">{owner}</h3>
        <div className="flex items-center gap-4 mt-2 text-sm">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <span className="inline-block w-2 h-2 rounded-full bg-success" />
            Done: <span className="font-semibold text-card-foreground">{stats.done}</span>
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <span className="inline-block w-2 h-2 rounded-full bg-warning" />
            Pending: <span className="font-semibold text-card-foreground">{stats.pending}</span>
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            Total: <span className="font-semibold text-card-foreground">{stats.total}</span>
          </span>
        </div>
      </div>

      {/* Pending breakdown */}
      {pendingBreakdown.length > 0 && (
        <div className="px-5 py-3 border-b border-border flex flex-wrap gap-3">
          {pendingBreakdown.map((b) => (
            <span key={b.label} className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <span className={`w-2 h-2 rounded-full ${b.dot}`} />
              {b.label}: <span className="text-card-foreground font-semibold">{b.value}</span>
            </span>
          ))}
        </div>
      )}

      {/* Pending planned actions list */}
      <div className="px-5 py-3 flex-1 overflow-auto">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Pending Planned Actions ({pendingActions.length})
        </p>
        {pendingActions.length === 0 ? (
          <p className="text-sm text-muted-foreground italic">No pending actions</p>
        ) : (
          <ul className="space-y-2.5">
            {pendingActions.map((item) => (
              <li key={item.id} className="flex gap-2 text-sm">
                <span className={`mt-1 shrink-0 w-2 h-2 rounded-full ${
                  item.pendingReason === "In Progress" ? "bg-warning" :
                  item.pendingReason === "Dependency" ? "bg-destructive" :
                  "bg-accent"
                }`} />
                <div className="min-w-0">
                  <p className="text-card-foreground leading-snug">{item.plannedAction}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      item.pendingReason === "In Progress" ? "bg-warning/10 text-warning" :
                      item.pendingReason === "Dependency" ? "bg-destructive/10 text-destructive" :
                      "bg-accent/10 text-accent"
                    }`}>
                      {item.pendingReason}
                    </span>
                    {item.priority && (
                      <span className="text-[10px] font-medium text-muted-foreground">{item.priority}</span>
                    )}
                    {item.ecd && (
                      <span className="text-[10px] text-muted-foreground">ECD: {item.ecd}</span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OwnerCard;
