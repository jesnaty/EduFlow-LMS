"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "React Workshop",
    date: "2024-01-15",
    time: "10:00 AM",
    location: "Virtual",
    attendees: 45,
    type: "workshop"
  },
  {
    id: 2,
    title: "JavaScript Study Group",
    date: "2024-01-18",
    time: "2:00 PM",
    location: "Room 101",
    attendees: 23,
    type: "study"
  },
  {
    id: 3,
    title: "Project Presentation",
    date: "2024-01-22",
    time: "3:30 PM",
    location: "Main Hall",
    attendees: 67,
    type: "presentation"
  },
  {
    id: 4,
    title: "Code Review Session",
    date: "2024-01-25",
    time: "11:00 AM",
    location: "Virtual",
    attendees: 12,
    type: "review"
  }
]

const eventTypeColors = {
  workshop: "bg-blue-100 text-blue-800",
  study: "bg-green-100 text-green-800",
  presentation: "bg-purple-100 text-purple-800",
  review: "bg-orange-100 text-orange-800"
}

export function EventsSidebar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-sm">{event.title}</h4>
              <Badge className={`text-xs ${eventTypeColors[event.type as keyof typeof eventTypeColors]}`}>
                {event.type}
              </Badge>
            </div>
            
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-3 w-3" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-3 w-3" />
                <span>{event.attendees} attendees</span>
              </div>
            </div>
            
            <Button size="sm" className="w-full mt-3">
              Join Event
            </Button>
          </div>
        ))}
        
        <Button variant="outline" className="w-full">
          View All Events
        </Button>
      </CardContent>
    </Card>
  )
}
