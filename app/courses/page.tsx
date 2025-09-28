import { Navigation } from "@/components/navigation"
import { CourseGrid } from "@/components/course-grid"
import { CourseFilters } from "@/components/course-filters"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Explore Courses</h1>
          <p className="text-muted-foreground text-lg">Discover new skills with our comprehensive course library</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0">
            <CourseFilters />
          </div>

          <div className="flex-1">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search courses..." className="pl-10 bg-background border-border text-foreground" />
              </div>
            </div>
            <CourseGrid />
          </div>
        </div>
      </main>
    </div>
  )
}
