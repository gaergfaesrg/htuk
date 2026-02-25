import OverviewStats from "@/components/OverviewStats";
import OwnerCard from "@/components/OwnerCard";
import { owners } from "@/data/actionPlanData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">
              Hassantuk Action Plan Dashboard
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">Last updated: 23 Feb 2026</p>
          </div>
        </div>

        {/* Overview */}
        <OverviewStats />

        {/* Owner cards grid */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Owner Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {owners.map((owner) => (
              <OwnerCard key={owner} owner={owner} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
