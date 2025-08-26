import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Search,
  HelpCircle,
  Truck,
  CreditCard,
  RotateCcw,
  User,
} from "lucide-react";

export default function SupportPage() {
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      details: "(555) 123-FRUIT",
      availability: "7 days a week, 8 AM - 8 PM EST",
      responseTime: "Immediate",
      primary: true,
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Live Chat",
      description: "Get instant help through live chat",
      details: "Available on website",
      availability: "7 days a week, 8 AM - 10 PM EST",
      responseTime: "Under 2 minutes",
      primary: true,
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Support",
      description: "Send us a detailed message",
      details: "support@freshfruit.com",
      availability: "24/7 submission",
      responseTime: "Within 4 hours",
      primary: false,
    },
  ];

  const faqCategories = [
    {
      icon: <Truck className="h-5 w-5" />,
      category: "Orders & Delivery",
      questions: [
        {
          question: "How do I track my order?",
          answer:
            "Once your order ships, you'll receive a tracking number via email and SMS. You can also track your order by logging into your account and visiting the 'My Orders' section.",
        },
        {
          question: "What if I'm not home for delivery?",
          answer:
            "Our delivery partners will attempt delivery and leave a notice if you're not available. For perishable items, we recommend scheduling delivery when someone will be home, or use our delivery instructions feature to specify a safe location.",
        },
        {
          question: "Can I change my delivery address after ordering?",
          answer:
            "Yes, you can change your delivery address within 1 hour of placing your order. Contact our support team immediately, and we'll update your delivery details if the order hasn't been processed yet.",
        },
        {
          question: "Do you deliver on weekends?",
          answer:
            "Yes! We offer delivery 7 days a week. Weekend delivery slots are popular, so we recommend booking in advance to secure your preferred time.",
        },
      ],
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      category: "Payment & Billing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, Mastercard, American Express, Discover), digital wallets (Apple Pay, Google Pay, PayPal), and bank transfers for orders over $100.",
        },
        {
          question: "When will I be charged?",
          answer:
            "Your payment method is charged when your order is prepared for shipping. For pre-orders, payment is processed when items become available.",
        },
        {
          question: "Can I get a receipt for my order?",
          answer:
            "Yes! You'll automatically receive an email receipt after your order is placed. You can also download receipts from your account dashboard at any time.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Currently, we don't offer payment plans, but we do offer subscription discounts for recurring orders and bulk order discounts for large purchases.",
        },
      ],
    },
    {
      icon: <RotateCcw className="h-5 w-5" />,
      category: "Returns & Quality",
      questions: [
        {
          question: "What if my fruits arrive damaged?",
          answer:
            "We're sorry to hear that! Please contact us within 24 hours with photos of the damaged items. We'll provide a full refund plus a $5 credit for the inconvenience.",
        },
        {
          question: "How long do I have to report quality issues?",
          answer:
            "Quality issues should be reported within 24-48 hours of delivery, depending on the issue type. Check our Return Policy page for specific timeframes for different situations.",
        },
        {
          question: "Can I return fruits I don't like?",
          answer:
            "If the fruits don't meet your taste expectations, contact us within 24 hours. We'll provide store credit for future orders as part of our satisfaction guarantee.",
        },
        {
          question: "Do I need to return spoiled items?",
          answer:
            "No, for food safety reasons, we don't require you to return spoiled items. Simply provide photos and dispose of them safely. We'll process your refund immediately.",
        },
      ],
    },
    {
      icon: <User className="h-5 w-5" />,
      category: "Account & Subscriptions",
      questions: [
        {
          question: "How do I reset my password?",
          answer:
            "Click 'Forgot Password' on the login page and enter your email address. You'll receive a password reset link within a few minutes. Check your spam folder if you don't see it.",
        },
        {
          question: "Can I pause my subscription?",
          answer:
            "Yes! You can pause your subscription for up to 8 weeks through your account dashboard. You can also skip individual deliveries or modify your subscription anytime.",
        },
        {
          question: "How do I cancel my subscription?",
          answer:
            "You can cancel your subscription anytime through your account settings or by contacting our support team. There are no cancellation fees, and you'll receive confirmation via email.",
        },
        {
          question: "Can I change my subscription frequency?",
          answer:
            "You can change from weekly to bi-weekly or monthly delivery, or vice versa. Changes take effect with your next scheduled delivery.",
        },
      ],
    },
  ];

  const quickActions = [
    {
      title: "Track Order",
      description: "Check your delivery status",
      icon: <Truck className="!h-10 !w-10 !text-[#42b883]" />,
    },
    {
      title: "Report Issue",
      description: "Quality or delivery problems",
      icon: <HelpCircle className="!h-10 !w-10 text-[#a8e6cf]" />,
    },
    {
      title: "Manage Account",
      description: "Update profile and preferences",
      icon: <User className="!h-10 !w-10 text-[#7dd87d]" />,
    },
    {
      title: "View Orders",
      description: "See order history",
      icon: <Search className="!h-10 !w-10 text-[#044a42]" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center py-10 bg-[#defcf9] rounded-2xl mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Help & Support
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're here to help! Find answers to common questions or get in touch
          with our support team.
        </p>
      </div>

      {/* Quick Actions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-4">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className="cursor-pointer text-center  hover:shadow-md transition-shadow"
            >
              <CardContent className="pt-6 ">
                <div className="text-primary flex justify-center mb-3 text-primary mb-3">
                  {action.icon}
                </div>
                <h3 className="font-semibold mb-1">{action.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Contact Our Support Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className={`relative ${
                method.primary ? "ring-2 ring-primary" : ""
              }`}
            >
              {method.primary && (
                <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                  Recommended
                </Badge>
              )}
              <CardHeader className="text-center">
                <div className="flex justify-center text-primary mb-4">
                  {method.icon}
                </div>
                <CardTitle className="text-xl text-[#287D50]">
                  {method.title}
                </CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-center">
                  <div>
                    <p className="font-semibold text-primary">
                      {method.details}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {method.availability}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Response: {method.responseTime}
                    </p>
                  </div>
                  <Button
                    className="w-full bg-[#287D50] hover:bg-[#287D50]"
                    
                  >
                    {method.title === "Phone Support" && "Call Now"}
                    {method.title === "Live Chat" && "Start Chat"}
                    {method.title === "Email Support" && "Send Email"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 grid grid-cols-1 lg:grid-cols-2 item-center gap-10">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="text-primary mr-2">{category.icon}</div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                    >
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Additional Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <Truck className="h-8 w-8 text-[#1bf5af] mx-auto mb-3 " />
              <h3 className="font-semibold mb-2">Delivery Info</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Learn about our delivery zones and timing
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-[#287D50] text-white"
              >
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <RotateCcw className="h-8 w-8 text-[#00b7c2] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Return Policy</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Understand our quality guarantee
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-[#287D50] text-white"
              >
                Read Policy
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <CreditCard className="h-8 w-8 text-[#3a9679] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Payment Methods</h3>
              <p className="text-sm text-muted-foreground mb-3">
                See all accepted payment options
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-[#287D50] text-white"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <HelpCircle className="h-8 w-8 text-[#36d1c4] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">About Us</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Learn about our mission and values
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-[#287D50] text-white"
              >
                Our Story
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section>
        <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-red-800 mb-2">
                Urgent Issues?
              </h3>
              <p className="text-red-700 mb-4">
                For urgent delivery issues, food safety concerns, or billing
                emergencies, call our priority support line.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Call Emergency Line: (555) 911-FRUIT
              </Button>
              <p className="text-sm text-red-600 mt-2">
                Available 24/7 for urgent matters only
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
