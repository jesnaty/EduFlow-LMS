import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Play } from "lucide-react"
import Link from "next/link"

export function CourseGrid() {
  const courses = [
    {
      id: 1,
      title: "Advanced TypeScript Development",
      instructor: "Sarah Chen",
      rating: 4.9,
      students: 1240,
      duration: "8 hours",
      level: "Advanced",
      price: "$89",
      image: "/typescript-development-course.jpg",
      tags: ["TypeScript", "JavaScript", "Web Development"],
    },
    {
      id: 2,
      title: "Vue.js 3 Composition API",
      instructor: "Marcus Rodriguez",
      rating: 4.8,
      students: 890,
      duration: "12 hours",
      level: "Intermediate",
      price: "$79",
      image: "/vuejs-composition-api-course.jpg",
      tags: ["Vue.js", "JavaScript", "Frontend"],
    },
    {
      id: 3,
      title: "Modern JavaScript Patterns",
      instructor: "Emily Watson",
      rating: 4.7,
      students: 2100,
      duration: "6 hours",
      level: "Intermediate",
      price: "$69",
      image: "/javascript-patterns-course.jpg",
      tags: ["JavaScript", "Design Patterns", "ES6+"],
    },
    {
      id: 4,
      title: "React Performance Optimization",
      instructor: "David Kim",
      rating: 4.9,
      students: 1560,
      duration: "10 hours",
      level: "Advanced",
      price: "$99",
      image: "/react-performance-optimization.png",
      tags: ["React", "Performance", "Optimization"],
    },
    {
      id: 5,
      title: "Node.js Backend Development",
      instructor: "Lisa Zhang",
      rating: 4.6,
      students: 980,
      duration: "14 hours",
      level: "Beginner",
      price: "$59",
      image: "/nodejs-backend-development.jpg",
      tags: ["Node.js", "Backend", "API Development"],
    },
    {
      id: 6,
      title: "Full-Stack Web Development",
      instructor: "Alex Johnson",
      rating: 4.8,
      students: 3200,
      duration: "20 hours",
      level: "Intermediate",
      price: "$129",
      image: "/fullstack-web-development.jpg",
      tags: ["Full-Stack", "React", "Node.js", "MongoDB"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id} className="bg-card border-border hover:shadow-lg transition-shadow">
          <CardHeader className="p-0">
            <div className="relative">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">{course.level}</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">{course.title}</h3>
                <p className="text-muted-foreground text-sm">by {course.instructor}</p>
              </div>

              <div className="flex flex-wrap gap-1">
                {course.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{course.price}</span>
                <Link href={`/courses/${course.id}`}>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Play className="w-4 h-4 mr-2" />
                    Enroll Now
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
