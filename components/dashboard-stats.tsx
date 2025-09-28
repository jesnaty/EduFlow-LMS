import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Trophy, TrendingUp } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Courses Enrolled",
      value: "12",
      change: "+2 this month",
      icon: BookOpen,
      color: "text-chart-1",
    },
    {
      title: "Hours Learned",
      value: "47.5",
      change: "+8.2 this week",
      icon: Clock,
      color: "text-chart-2",
    },
    {
      title: "Certificates",
      value: "8",
      change: "+3 completed",
      icon: Trophy,
      color: "text-chart-3",
    },
    {
      title: "Progress Rate",
      value: "85%",
      change: "+12% improvement",
      icon: TrendingUp,
      color: "text-chart-4",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
