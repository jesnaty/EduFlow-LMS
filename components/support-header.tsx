import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MessageCircle } from "lucide-react"

export function SupportHeader() {
  return (
    <div className="text-center space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">How can we help you?</h1>
        <p className="text-muted-foreground text-lg">Get instant answers or connect with our support team</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search for help articles, tutorials, or common issues..."
            className="pl-12 pr-4 py-4 text-lg bg-card border-border text-foreground"
          />
          <Button className="absolute right-2 top-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Search
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
          <MessageCircle className="w-4 h-4 mr-2" />
          Live Chat
        </Button>
        <span className="text-muted-foreground">•</span>
        <span className="text-sm text-muted-foreground">Average response time: 2 minutes</span>
      </div>
    </div>
  )
}
