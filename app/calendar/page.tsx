import { Navigation } from "@/components/navigation"
import { CalendarView } from "@/components/calendar-view"
import { EventsSidebar } from "@/components/events-sidebar"

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Events Calendar</h1>
          <p className="text-muted-foreground text-lg">
            Stay organized with your learning schedule and upcoming events
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <CalendarView />
          </div>
          <div>
            <EventsSidebar />
          </div>
        </div>
      </main>
    </div>
  )
}
