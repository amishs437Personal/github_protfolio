import { useMemo } from "react";

export const ContributionGraph = () => {
  const weeks = 52;
  const daysPerWeek = 7;

  // Generate mock contribution data
  const contributions = useMemo(() => {
    return Array.from({ length: weeks }, () =>
      Array.from({ length: daysPerWeek }, () => Math.floor(Math.random() * 5))
    );
  }, []);

  const getContribClass = (level: number) => {
    switch (level) {
      case 0: return "bg-contrib-0";
      case 1: return "bg-contrib-1";
      case 2: return "bg-contrib-2";
      case 3: return "bg-contrib-3";
      case 4: return "bg-contrib-4";
      default: return "bg-contrib-0";
    }
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["", "Mon", "", "Wed", "", "Fri", ""];

  const totalContributions = contributions.flat().reduce((a, b) => a + b * 3, 0);

  return (
    <div className="animate-fade-up opacity-0 stagger-2" style={{ animationFillMode: 'forwards' }}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-foreground">
          {totalContributions} contributions in the last year
        </h3>
        <div className="text-xs text-muted-foreground">
          Contribution activity
        </div>
      </div>

      <div className="p-4 border border-border rounded-md bg-card overflow-x-auto">
        <div className="inline-flex flex-col gap-1 min-w-fit">
          {/* Month labels */}
          <div className="flex gap-1 text-xs text-muted-foreground mb-1 ml-8">
            {months.map((month, i) => (
              <span key={month} className="w-[calc(52px*4/12)]" style={{ width: `${(weeks / 12) * 12}px` }}>
                {month}
              </span>
            ))}
          </div>

          <div className="flex gap-1">
            {/* Day labels */}
            <div className="flex flex-col gap-1 text-xs text-muted-foreground pr-2">
              {days.map((day, i) => (
                <span key={i} className="h-2.5 flex items-center text-[10px]">
                  {day}
                </span>
              ))}
            </div>

            {/* Contribution grid */}
            <div className="flex gap-0.5">
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-0.5">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`contrib-cell ${getContribClass(day)}`}
                      title={`${day * 3} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-2 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((level) => (
                <div key={level} className={`contrib-cell ${getContribClass(level)}`} />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};
