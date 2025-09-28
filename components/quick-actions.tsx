import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageSquare, Download, Settings } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  const actions = [
    {
      title: "Browse Courses",
      description: "Explore new learning opportunities",
      icon: BookOpen,
      href: "/courses",
      color: "bg-chart-1/20 text-chart-1",
    },
    {
      title: "Get Support",
      description: "Contact our support team",
      icon: MessageSquare,
      href: "/support",
      color: "bg-chart-2/20 text-chart-2",
    },
    {
      title: "Download Materials",
      description: "Access course resources",
      icon: Download,
      href: "/downloads",
      color: "bg-chart-3/20 text-chart-3",
    },
    {
      title: "Account Settings",
      description: "Manage your profile",
      icon: Settings,
      href: "/profile",
      color: "bg-chart-4/20 text-chart-4",
    },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action, index) => (
          <Link key={index} href={action.href}>
            <Button variant="ghost" className="w-full justify-start h-auto p-3 hover:bg-muted/50">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${action.color}`}>
                <action.icon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-medium text-foreground">{action.title}</div>
                <div className="text-sm text-muted-foreground">{action.description}</div>
              </div>
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
