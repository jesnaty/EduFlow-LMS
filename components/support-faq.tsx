"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How do I reset my password?",
    answer: "To reset your password, go to the login page and click 'Forgot Password'. Enter your email address and follow the instructions sent to your email. If you don't receive the email, check your spam folder."
  },
  {
    question: "Can I access courses on mobile devices?",
    answer: "Yes! Our platform is fully responsive and works on all devices. We also have a dedicated mobile app available for iOS and Android devices. Download it from the App Store or Google Play Store."
  },
  {
    question: "How do I track my learning progress?",
    answer: "Your progress is automatically tracked as you complete lessons and assignments. You can view your progress in the 'My Courses' section of your dashboard, where you'll see completion percentages and certificates earned."
  },
  {
    question: "What happens if I miss a live session?",
    answer: "Don't worry! All live sessions are recorded and made available within 24 hours. You can access recordings in your course dashboard under the 'Recordings' tab."
  },
  {
    question: "How do I download my certificates?",
    answer: "Once you complete a course, your certificate will be automatically generated. You can download it from the 'Certificates' section in your profile or from the course completion page."
  },
  {
    question: "Can I get a refund for a course?",
    answer: "We offer a 30-day money-back guarantee for all courses. If you're not satisfied with your purchase, contact our support team within 30 days of enrollment for a full refund."
  },
  {
    question: "How do I contact my instructor?",
    answer: "You can contact your instructor through the course discussion forum, direct messaging within the platform, or during live Q&A sessions. Most instructors respond within 24-48 hours."
  },
  {
    question: "What technical requirements do I need?",
    answer: "Our platform works on any modern web browser (Chrome, Firefox, Safari, Edge). For the best experience, we recommend a stable internet connection and updated browser version."
  }
]

export function SupportFAQ() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5" />
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2">Still need help?</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Can't find what you're looking for? Our support team is here to help!
          </p>
          <div className="flex gap-2">
            <Button size="sm">Contact Support</Button>
            <Button variant="outline" size="sm">Browse Articles</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
