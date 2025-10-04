"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  HelpCircle, 
  BookOpen, 
  CreditCard, 
  Settings, 
  Users, 
  Bug,
  FileText,
  Smartphone
} from "lucide-react"

const categories = [
  {
    title: "Course Help",
    description: "Get help with your courses, assignments, and learning materials",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600",
    count: 24
  },
  {
    title: "Technical Issues",
    description: "Report bugs, login problems, and technical difficulties",
    icon: Bug,
    color: "bg-red-100 text-red-600",
    count: 12
  },
  {
    title: "Account & Billing",
    description: "Manage your account settings, subscriptions, and payments",
    icon: CreditCard,
    color: "bg-green-100 text-green-600",
    count: 8
  },
  {
    title: "Platform Features",
    description: "Learn about platform features, navigation, and functionality",
    icon: Settings,
    color: "bg-purple-100 text-purple-600",
    count: 15
  },
  {
    title: "Community",
    description: "Connect with other learners, join discussions, and get peer support",
    icon: Users,
    color: "bg-orange-100 text-orange-600",
    count: 31
  },
  {
    title: "Mobile App",
    description: "Support for our mobile application and mobile-specific features",
    icon: Smartphone,
    color: "bg-indigo-100 text-indigo-600",
    count: 6
  }
]

export function SupportCategories() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5" />
          Support Categories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            
            return (
              <div
                key={category.title}
                className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {category.title}
                      </h4>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {category.count} articles
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    
                    <Button variant="ghost" size="sm" className="h-8 px-0 text-xs">
                      Browse Articles →
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="h-4 w-4" />
            <h4 className="font-semibold">Popular Articles</h4>
          </div>
          <div className="space-y-1 text-sm">
            <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
              • How to reset your password
            </a>
            <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
              • Understanding course progress tracking
            </a>
            <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
              • Mobile app troubleshooting guide
            </a>
            <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
              • Billing and subscription FAQ
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
