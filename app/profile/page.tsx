import { Navigation } from "@/components/navigation"
import { ProfileHeader } from "@/components/profile-header"
import { ProfileStats } from "@/components/profile-stats"
import { ProfileSettings } from "@/components/profile-settings"
import { ProfileCourses } from "@/components/profile-courses"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-8">
        <ProfileHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <ProfileStats />
            <ProfileCourses />
          </div>
          <div>
            <ProfileSettings />
          </div>
        </div>
      </main>
    </div>
  )
}
