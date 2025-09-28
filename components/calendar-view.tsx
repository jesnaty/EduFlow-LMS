import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

export function CalendarView() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString("default", { month: "long", year: "numeric" })

  // Generate calendar days (simplified)
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 6 // Start from previous month
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    return {
      date: date.getDate(),
      isCurrentMonth: date.getMonth() === currentDate.getMonth(),
      isToday: date.toDateString() === currentDate.toDateString(),
      events: day === 15 ? ["TypeScript Workshop"] : day === 22 ? ["Quiz: JavaScript"] : [],
    }
  })

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground">{currentMonth}</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="border-border bg-transparent">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-border bg-transparent">
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 ml-2">
              <Plus className="w-4 h-4 mr-2" />
              Add Event
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 mb-4">
          {days.map((day) => (
            <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`
                min-h-[100px] p-2 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors
                ${day.isCurrentMonth ? "bg-background" : "bg-muted/20 text-muted-foreground"}
                ${day.isToday ? "ring-2 ring-primary bg-primary/10" : ""}
              `}
            >
              <div className={`text-sm font-medium mb-1 ${day.isToday ? "text-primary" : "text-foreground"}`}>
                {day.date}
              </div>
              <div className="space-y-1">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded truncate">
                    {event}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
