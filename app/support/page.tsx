import { Navigation } from "@/components/navigation"
import { SupportHeader } from "@/components/support-header"
import { SupportCategories } from "@/components/support-categories"
import { SupportContact } from "@/components/support-contact"
import { SupportFAQ } from "@/components/support-faq"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-8">
        <SupportHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <SupportCategories />
            <SupportFAQ />
          </div>
          <div>
            <SupportContact />
          </div>
        </div>
      </main>
    </div>
  )
}
