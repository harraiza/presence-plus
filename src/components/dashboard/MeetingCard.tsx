import { Clock, Users, FileText, Play, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MeetingCardProps {
  title: string;
  date: string;
  duration: string;
  participants: number;
  hasSummary: boolean;
  hasRecording: boolean;
}

export function MeetingCard({
  title,
  date,
  duration,
  participants,
  hasSummary,
  hasRecording,
}: MeetingCardProps) {
  return (
    <div className="glass-panel rounded-xl p-5 card-hover group">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-foreground truncate">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{date}</p>
        </div>
        <button className="p-1.5 rounded-lg hover:bg-secondary opacity-0 group-hover:opacity-100 transition-all">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          {duration}
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="w-4 h-4" />
          {participants}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
        {hasSummary && (
          <Button variant="glass" size="sm" className="flex-1 gap-2">
            <FileText className="w-4 h-4" />
            Summary
          </Button>
        )}
        {hasRecording && (
          <Button variant="glass" size="sm" className="flex-1 gap-2">
            <Play className="w-4 h-4" />
            Recording
          </Button>
        )}
      </div>
    </div>
  );
}
