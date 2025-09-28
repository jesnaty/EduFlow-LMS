import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Play, Clock, Users } from "lucide-react"
import Link from "next/link"

export function RecentCourses() {
  const courses = [
    {
      id: 1,
      title: "Advanced TypeScript Development",
      instructor: "Sarah Chen",
      progress: 75,
      duration: "8 hours",
      students: 1240,
      image: "/typescript-coding-course.jpg",
    },
    {
      id: 2,
      title: "Vue.js 3 Composition API",
      instructor: "Marcus Rodriguez",
      progress: 45,
      duration: "12 hours",
      students: 890,
      image: "/vuejs-development-course.jpg",
    },
    {
      id: 3,
      title: "Modern JavaScript Patterns",
      instructor: "Emily Watson",
      progress: 90,
      duration: "6 hours",
      students: 2100,
      image: "/javascript-patterns-course.jpg",
    },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Continue Learning</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="flex gap-4 p-4 rounded-lg bg-muted/50">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                </div>
                <Link href={`/courses/${course.id}`}>
                  <Button size="sm" className="bg-primary text-primary-foreground">
                    <Play className="w-4 h-4 mr-1" />
                    Continue
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {course.students.toLocaleString()}
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-foreground font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
