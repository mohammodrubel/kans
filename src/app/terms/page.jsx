import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, Scale, FileText } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using FreshFruit's website and services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use the service.",
      ],
    },
    {
      title: "Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials on FreshFruit's website for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        "• Modify or copy the materials",
        "• Use the materials for any commercial purpose or for any public display",
        "• Attempt to reverse engineer any software contained on the website",
        "• Remove any copyright or other proprietary notations from the materials",
      ],
    },
    {
      title: "Product Information",
      content: [
        "We strive to provide accurate product information, including descriptions, images, and pricing.",
        "However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.",
        "All fruits are subject to seasonal availability and may be substituted with similar quality alternatives.",
        "Prices are subject to change without notice, but changes will not affect orders already placed.",
      ],
    },
    {
      title: "Orders and Payment",
      content: [
        "All orders are subject to acceptance and availability.",
        "We reserve the right to refuse or cancel any order for any reason at any time.",
        "Payment must be received before order processing and shipment.",
        "We accept major credit cards, digital wallets, and other payment methods as displayed at checkout.",
        "You are responsible for providing accurate billing and shipping information.",
      ],
    },
    {
      title: "Delivery Terms",
      content: [
        "Delivery times are estimates and not guaranteed.",
        "Risk of loss and title for items pass to you upon delivery to the carrier.",
        "We are not responsible for delays caused by weather, natural disasters, or other circumstances beyond our control.",
        "Someone must be available to receive perishable deliveries.",
        "Delivery address changes may incur additional fees.",
      ],
    },
    {
      title: "Returns and Refunds",
      content: [
        "Our return policy is detailed on our Return Policy page and is incorporated by reference into these terms.",
        "Returns must be reported within specified timeframes due to the perishable nature of our products.",
        "Refunds will be processed to the original payment method within 3-5 business days of approval.",
        "We reserve the right to refuse returns that do not meet our policy requirements.",
      ],
    },
    {
      title: "User Accounts",
      content: [
        "You are responsible for maintaining the confidentiality of your account and password.",
        "You agree to accept responsibility for all activities that occur under your account.",
        "You must notify us immediately of any unauthorized use of your account.",
        "We reserve the right to terminate accounts that violate these terms.",
      ],
    },
    {
      title: "Prohibited Uses",
      content: [
        "You may not use our service:",
        "• For any unlawful purpose or to solicit others to perform unlawful acts",
        "• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances",
        "• To infringe upon or violate our intellectual property rights or the intellectual property rights of others",
        "• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate",
        "• To submit false or misleading information",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "FreshFruit shall not be liable for any indirect, incidental, special, consequential, or punitive damages.",
        "Our total liability to you for any damages shall not exceed the amount paid by you for the specific product or service.",
        "Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for damages.",
        "In such jurisdictions, our liability shall be limited to the maximum extent permitted by law.",
      ],
    },
    {
      title: "Governing Law",
      content: [
        "These terms and conditions are governed by and construed in accordance with the laws of [State/Province].",
        "Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of [State/Province].",
        "If any provision of these terms is deemed invalid or unenforceable, the remaining provisions shall remain in effect.",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl  font-bold text-foreground mb-4">
          Terms & Conditions
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Please read these terms and conditions carefully before using our
          service.
        </p>
        <div className="flex items-center justify-center mt-6">
          <Badge variant="outline" className="text-sm">
            Last updated: December 2024
          </Badge>
        </div>
      </div>

      {/* Important Notice */}
      <div className=" bg-red-100 rounded-lg p-6 mb-12">
        <div className="flex items-start space-x-4">
          <AlertTriangle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-primary mb-2">
              Important Legal Information
            </h2>
            <p className="text-muted-foreground">
              These terms constitute a legally binding agreement between you and
              FreshFruit. By using our services, you agree to these terms in
              their entirety. Please contact us if you have any questions.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Quick Navigation
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4 text-center">
                <FileText className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{section.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Terms Sections */}
      <div className="space-y-8 grid grid-cos-1 grid-cols-2 gap-10 item-center">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="h-5 w-5 mr-2 text-primary" />
                {index + 1}. {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      
    </div>
  );
}
