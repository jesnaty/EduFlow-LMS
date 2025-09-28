import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, MapPin, Calendar, Award } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="bg-card border border-border rounded-lg p-8">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/professional-student-avatar.jpg" />
          <AvatarFallback className="text-2xl">AX</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Alex Rodriguez</h1>
            <p className="text-muted-foreground text-lg">Full-Stack Developer & Lifelong Learner</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              San Francisco, CA
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Joined March 2023
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />8 Certificates Earned
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className="bg-primary/20 text-primary">JavaScript Expert</Badge>
            <Badge className="bg-chart-2/20 text-chart-2">Vue.js Specialist</Badge>
            <Badge className="bg-chart-3/20 text-chart-3">TypeScript Pro</Badge>
          </div>
        </div>

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>
    </div>
  )
}
