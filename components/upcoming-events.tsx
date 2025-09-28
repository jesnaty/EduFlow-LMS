import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

export function UpcomingEvents() {
  const events = [
    {
      title: "Web Development Workshop",
      date: "Today, 2:00 PM",
      location: "Virtual Room A",
      type: "Workshop",
    },
    {
      title: "JavaScript Fundamentals Quiz",
      date: "Tomorrow, 10:00 AM",
      location: "Online Assessment",
      type: "Assessment",
    },
    {
      title: "Career Guidance Session",
      date: "Friday, 3:30 PM",
      location: "Conference Hall",
      type: "Session",
    },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="p-3 rounded-lg bg-muted/50 space-y-2">
            <div className="flex items-start justify-between">
              <h4 className="font-medium text-foreground">{event.title}</h4>
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{event.type}</span>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {event.date}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {event.location}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
