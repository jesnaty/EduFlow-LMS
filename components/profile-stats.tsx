"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Award, Clock, Target } from "lucide-react"

const stats = [
  {
    title: "Courses Completed",
    value: "12",
    total: "15",
    icon: BookOpen,
    color: "text-blue-600"
  },
  {
    title: "Certificates Earned",
    value: "8",
    total: "10",
    icon: Award,
    color: "text-green-600"
  },
  {
    title: "Study Hours",
    value: "156",
    total: "200",
    icon: Clock,
    color: "text-purple-600"
  },
  {
    title: "Goals Achieved",
    value: "23",
    total: "30",
    icon: Target,
    color: "text-orange-600"
  }
]

export function ProfileStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            const percentage = (parseInt(stat.value) / parseInt(stat.total)) * 100
            
            return (
              <div key={stat.title} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                    <span className="text-sm font-medium">{stat.title}</span>
                  </div>
                  <Badge variant="secondary">
                    {stat.value}/{stat.total}
                  </Badge>
                </div>
                <Progress value={percentage} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {percentage.toFixed(0)}% complete
                </p>
              </div>
            )
          })}
        </div>
        
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2">Current Streak</h4>
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full mr-1 ${
                    i < 5 ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">5 days</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Keep it up! Study for 2 more days to reach your weekly goal.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
