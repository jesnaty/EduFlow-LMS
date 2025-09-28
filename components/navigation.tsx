import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, MessageSquare, Settings } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">EduFlow</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/courses" className="text-foreground hover:text-primary transition-colors">
                Courses
              </Link>
              <Link href="/calendar" className="text-foreground hover:text-primary transition-colors">
                Calendar
              </Link>
              <Link href="/support" className="text-foreground hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <MessageSquare className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Link href="/profile">
              <Avatar className="w-8 h-8 cursor-pointer">
                <AvatarImage src="/professional-avatar.png" />
                <AvatarFallback>AX</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
