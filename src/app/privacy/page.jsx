import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Database, Users, Globe } from "lucide-react";

export default function PrivacyPage() {
  const dataTypes = [
    {
      icon: <Users className="h-5 w-5" />,
      type: "Personal Information",
      examples: [
        "Name, email address, phone number",
        "Billing and shipping addresses",
        "Payment information",
      ],
      purpose: "Account creation, order processing, customer service",
    },
    {
      icon: <Database className="h-5 w-5" />,
      type: "Usage Data",
      examples: [
        "Pages visited, time spent on site",
        "Device information, IP address",
        "Browser type and version",
      ],
      purpose: "Website improvement, analytics, security",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      type: "Communication Data",
      examples: [
        "Email communications",
        "Customer service interactions",
        "Marketing preferences",
      ],
      purpose: "Customer support, marketing communications, service updates",
    },
  ];

  const privacyRights = [
    {
      right: "Access",
      description: "Request a copy of the personal data we hold about you",
    },
    {
      right: "Correction",
      description:
        "Request correction of inaccurate or incomplete personal data",
    },
    {
      right: "Deletion",
      description:
        "Request deletion of your personal data under certain circumstances",
    },
    {
      right: "Portability",
      description: "Request transfer of your data to another service provider",
    },
    {
      right: "Opt-out",
      description: "Unsubscribe from marketing communications at any time",
    },
    {
      right: "Restriction",
      description:
        "Request restriction of processing under certain circumstances",
    },
  ];

  const securityMeasures = [
    "SSL encryption for all data transmission",
    "Secure payment processing with PCI compliance",
    "Regular security audits and vulnerability assessments",
    "Access controls and employee training",
    "Data backup and disaster recovery procedures",
    "Incident response and breach notification protocols",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We are committed to protecting your privacy and ensuring the security
          of your personal information.
        </p>
        <div className="flex items-center justify-center mt-6">
          <Badge variant="outline" className="text-sm">
            Last updated: December 2024
          </Badge>
        </div>
      </div>

      {/* Privacy Commitment */}
      <div className="bg-[#e0ffcd] rounded-lg p-6 mb-12">
        <div className="flex items-start space-x-4">
          <Shield className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Our Privacy Commitment
            </h2>
            <p className="text-muted-foreground">
              At FreshFruit, we respect your privacy and are committed to
              protecting your personal information. This policy explains how we
              collect, use, and safeguard your data when you use our services.
            </p>
          </div>
        </div>
      </div>

      {/* Information We Collect */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Information We Collect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dataTypes.map((data, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <div className="text-primary mr-2">{data.icon}</div>
                  {data.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {data.examples.map((example, eIndex) => (
                        <li key={eIndex}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Purpose:</h4>
                    <p className="text-sm text-muted-foreground">
                      {data.purpose}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How We Use Information */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          How We Use Your Information
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Eye className="h-4 w-4 mr-2 text-primary" />
                  Service Provision
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Process and fulfill your orders</li>
                  <li>• Provide customer support and service</li>
                  <li>• Send order confirmations and updates</li>
                  <li>• Manage your account and preferences</li>
                  <li>• Process payments and prevent fraud</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-primary" />
                  Communication & Marketing
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Send promotional offers and newsletters</li>
                  <li>• Notify you about new products and services</li>
                  <li>• Conduct surveys and gather feedback</li>
                  <li>• Provide personalized recommendations</li>
                  <li>• Send important service announcements</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Information Sharing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Information Sharing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">
                We Share Information With:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Delivery partners for order fulfillment</li>
                <li>• Payment processors for transaction processing</li>
                <li>• Customer service providers</li>
                <li>• Analytics providers (anonymized data only)</li>
                <li>• Legal authorities when required by law</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">We Never Share:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  • Your personal information for marketing by third parties
                </li>
                <li>
                  • Credit card or payment details with unauthorized parties
                </li>
                <li>• Your data with competitors</li>
                <li>• Personal information without your consent</li>
                <li>• Data for purposes unrelated to our service</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Your Privacy Rights */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Your Privacy Rights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {privacyRights.map((right, index) => (
            <Card key={index}>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-2 text-primary">
                  {right.right}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {right.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Data Security */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Data Security
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="h-5 w-5 mr-2 text-primary" />
              Security Measures
            </CardTitle>
            <CardDescription>
              We implement comprehensive security measures to protect your
              personal information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Shield className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {measure}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Cookies and Tracking */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Cookies and Tracking
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Essential Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Required for basic website functionality and cannot be disabled.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Shopping cart functionality</li>
                <li>• User authentication</li>
                <li>• Security features</li>
                <li>• Payment processing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Optional Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Help us improve your experience and can be disabled in your
                browser settings.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Analytics and performance</li>
                <li>• Personalized recommendations</li>
                <li>• Marketing and advertising</li>
                <li>• Social media integration</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Retention */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Data Retention
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We retain your personal information only as long as necessary to
                provide our services and comply with legal obligations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    Account Data
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Retained while account is active + 3 years
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    Order History
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Retained for 7 years for tax purposes
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    Marketing Data
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Until you unsubscribe or request deletion
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Information */}
      <section>
        <Card className="bg-[#e0ffcd]">
          <CardContent className="pt-6">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Privacy Questions or Concerns?
              </h3>
              <p className="text-muted-foreground mb-4">
                Contact our Privacy Officer for any questions about this policy
                or your data rights.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Email: privacy@freshfruit.com</p>
                <p>Phone: (555) 123-FRUIT</p>
                <p>Address: 123 Fresh Street, Organic City, State 12345</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
