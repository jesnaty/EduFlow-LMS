import { Navigation } from "@/components/navigation"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentCourses } from "@/components/recent-courses"
import { UpcomingEvents } from "@/components/upcoming-events"
import { QuickActions } from "@/components/quick-actions"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back, Alex</h1>
          <p className="text-muted-foreground text-lg">Continue your learning journey with EduFlow LMS</p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <RecentCourses />
          </div>
          <div className="space-y-8">
            <UpcomingEvents />
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  )
}
