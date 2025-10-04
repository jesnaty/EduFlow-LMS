"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Star, Play } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Advanced React Development",
    instructor: "Sarah Johnson",
    progress: 85,
    duration: "12 weeks",
    rating: 4.8,
    status: "in-progress",
    thumbnail: "/react-performance-optimization.png"
  },
  {
    id: 2,
    title: "TypeScript Fundamentals",
    instructor: "Mike Chen",
    progress: 100,
    duration: "8 weeks",
    rating: 4.9,
    status: "completed",
    thumbnail: "/typescript-development-course.jpg"
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    instructor: "Alex Rodriguez",
    progress: 45,
    duration: "16 weeks",
    rating: 4.7,
    status: "in-progress",
    thumbnail: "/nodejs-backend-development.jpg"
  },
  {
    id: 4,
    title: "Vue.js Composition API",
    instructor: "Emma Wilson",
    progress: 0,
    duration: "10 weeks",
    rating: 4.6,
    status: "enrolled",
    thumbnail: "/vuejs-composition-api-course.jpg"
  }
]

const statusColors = {
  "in-progress": "bg-blue-100 text-blue-800",
  "completed": "bg-green-100 text-green-800",
  "enrolled": "bg-yellow-100 text-yellow-800"
}

export function ProfileCourses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          My Courses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-muted-foreground" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{course.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        by {course.instructor}
                      </p>
                    </div>
                    <Badge className={statusColors[course.status as keyof typeof statusColors]}>
                      {course.status.replace("-", " ")}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  {course.status !== "enrolled" && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button size="sm" className="flex-1">
                  <Play className="h-3 w-3 mr-1" />
                  {course.status === "completed" ? "Review" : "Continue"}
                </Button>
                <Button variant="outline" size="sm">
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="outline" className="w-full mt-4">
          View All Courses
        </Button>
      </CardContent>
    </Card>
  )
}
