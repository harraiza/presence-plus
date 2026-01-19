import { Calendar, Clock, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UpcomingMeeting {
  id: string;
  title: string;
  time: string;
  participants: string[];
  isNext: boolean;
}

const upcomingMeetings: UpcomingMeeting[] = [
  {
    id: "1",
    title: "Design Review",
    time: "2:00 PM",
    participants: ["AK", "JD", "SM"],
    isNext: true,
  },
  {
    id: "2",
    title: "Engineering Sync",
    time: "3:30 PM",
    participants: ["TW", "ML"],
    isNext: false,
  },
  {
    id: "3",
    title: "1:1 with Manager",
    time: "4:00 PM",
    participants: ["RB"],
    isNext: false,
  },
];

export function UpcomingMeetings() {
  return (
    <div className="glass-panel rounded-xl p-6">
      <div className="flex items-center gap-2 mb-5">
        <Calendar className="w-5 h-5 text-primary" />
        <h2 className="font-semibold text-foreground">Upcoming Today</h2>
      </div>

      <div className="space-y-3">
        {upcomingMeetings.map((meeting) => (
          <div
            key={meeting.id}
            className={`p-4 rounded-xl border transition-all ${
              meeting.isNext
                ? "border-primary/30 bg-primary/5"
                : "border-border/50 hover:border-border"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  {meeting.isNext && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wide bg-primary/20 text-primary">
                      Next
                    </span>
                  )}
                  <h3 className="font-medium text-foreground">{meeting.title}</h3>
                </div>
                <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {meeting.time}
                  </span>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <div className="flex -space-x-1.5">
                      {meeting.participants.map((p) => (
                        <div
                          key={p}
                          className="w-5 h-5 rounded-full bg-secondary border border-card text-[10px] font-medium flex items-center justify-center"
                        >
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {meeting.isNext && (
                <Button variant="glow" size="sm" className="gap-1.5">
                  <Video className="w-4 h-4" />
                  Join
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
