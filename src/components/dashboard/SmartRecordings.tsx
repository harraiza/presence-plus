import { Play, Clock, Bookmark, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Recording {
  id: string;
  title: string;
  duration: string;
  highlights: number;
  thumbnail: string;
}

const recordings: Recording[] = [
  {
    id: "1",
    title: "Product Roadmap Review",
    duration: "45:23",
    highlights: 5,
    thumbnail: "bg-gradient-to-br from-blue-600/30 to-purple-600/20",
  },
  {
    id: "2",
    title: "Customer Feedback Session",
    duration: "32:15",
    highlights: 3,
    thumbnail: "bg-gradient-to-br from-emerald-600/30 to-cyan-600/20",
  },
  {
    id: "3",
    title: "Sprint Planning",
    duration: "58:42",
    highlights: 7,
    thumbnail: "bg-gradient-to-br from-amber-600/30 to-orange-600/20",
  },
];

export function SmartRecordings() {
  return (
    <div className="glass-panel rounded-xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-semibold text-foreground">Smart Recordings</h2>
        <Button variant="ghost" size="sm" className="text-primary gap-1">
          View all
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {recordings.map((recording) => (
          <div
            key={recording.id}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer group"
          >
            {/* Thumbnail */}
            <div
              className={`relative w-24 h-16 rounded-lg ${recording.thumbnail} flex items-center justify-center shrink-0 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-foreground truncate">{recording.title}</h3>
              <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {recording.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Bookmark className="w-3.5 h-3.5" />
                  {recording.highlights} highlights
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
