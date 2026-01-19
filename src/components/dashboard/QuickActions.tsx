import { FileText, MessageSquare, Lightbulb, Scissors, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionItem {
  icon: React.ElementType;
  label: string;
  description: string;
  color: string;
}

const actions: ActionItem[] = [
  {
    icon: FileText,
    label: "Summarize Meeting",
    description: "Get AI-powered summary",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: MessageSquare,
    label: "Draft Response",
    description: "Generate email or chat",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: Lightbulb,
    label: "Generate Ideas",
    description: "Brainstorm on whiteboard",
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    icon: Scissors,
    label: "Create Clip",
    description: "Highlight key moments",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
];

export function QuickActions() {
  return (
    <div className="glass-panel rounded-xl p-6">
      <div className="flex items-center gap-2 mb-5">
        <Sparkles className="w-5 h-5 text-primary" />
        <h2 className="font-semibold text-foreground">Quick Actions</h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className={cn(
              "relative p-4 rounded-xl text-left transition-all duration-200 hover:scale-[1.02] group overflow-hidden",
              "bg-gradient-to-br border border-border/50 hover:border-primary/30"
            )}
            style={{
              backgroundImage: `linear-gradient(135deg, ${action.color.split(" ")[0].replace("from-", "").replace("/20", "")}20, transparent)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity" 
                 style={{ backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.1), transparent)` }} />
            <action.icon className="w-5 h-5 text-primary mb-3 relative z-10" />
            <p className="font-medium text-sm text-foreground relative z-10">{action.label}</p>
            <p className="text-xs text-muted-foreground mt-1 relative z-10">{action.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
