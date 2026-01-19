import { Video, FileText, Clock, TrendingUp } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { MeetingCard } from "@/components/dashboard/MeetingCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { AIAssistant } from "@/components/dashboard/AIAssistant";
import { SmartRecordings } from "@/components/dashboard/SmartRecordings";
import { UpcomingMeetings } from "@/components/dashboard/UpcomingMeetings";

const recentMeetings = [
  {
    title: "Weekly Team Standup",
    date: "Today, 10:00 AM",
    duration: "32 min",
    participants: 8,
    hasSummary: true,
    hasRecording: true,
  },
  {
    title: "Product Strategy Session",
    date: "Yesterday, 2:00 PM",
    duration: "1h 15min",
    participants: 12,
    hasSummary: true,
    hasRecording: true,
  },
  {
    title: "Client Onboarding Call",
    date: "Yesterday, 11:00 AM",
    duration: "45 min",
    participants: 4,
    hasSummary: true,
    hasRecording: false,
  },
];

export default function Index() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6 overflow-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-foreground">
              Good afternoon, John 👋
            </h1>
            <p className="text-muted-foreground mt-1">
              Here's what's happening with your meetings today
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard
              icon={Video}
              label="Meetings This Week"
              value="24"
              change="12%"
              trend="up"
            />
            <StatsCard
              icon={FileText}
              label="Summaries Generated"
              value="18"
              change="8%"
              trend="up"
            />
            <StatsCard
              icon={Clock}
              label="Hours Saved"
              value="6.5h"
              change="15%"
              trend="up"
            />
            <StatsCard
              icon={TrendingUp}
              label="Productivity Score"
              value="92%"
              change="3%"
              trend="up"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - 2/3 width */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Actions */}
              <QuickActions />

              {/* Recent Meetings */}
              <div className="glass-panel rounded-xl p-6">
                <h2 className="font-semibold text-foreground mb-5">Recent Meetings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {recentMeetings.map((meeting, index) => (
                    <MeetingCard key={index} {...meeting} />
                  ))}
                </div>
              </div>

              {/* Smart Recordings */}
              <SmartRecordings />
            </div>

            {/* Right Column - 1/3 width */}
            <div className="space-y-6">
              {/* Upcoming Meetings */}
              <UpcomingMeetings />

              {/* AI Assistant */}
              <AIAssistant />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
