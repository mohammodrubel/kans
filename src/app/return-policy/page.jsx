import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  RotateCcw,
  Shield,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Phone,
} from "lucide-react";

export default function ReturnPolicyPage() {
  const returnReasons = [
    {
      reason: "Quality Issues",
      icon: <AlertTriangle className="h-5 w-5" />,
      timeframe: "24 hours",
      refundType: "Full refund + credit",
      description: "Damaged, spoiled, or not fresh upon delivery",
      color: "text-red-500",
    },
    {
      reason: "Wrong Item",
      icon: <XCircle className="h-5 w-5" />,
      timeframe: "48 hours",
      refundType: "Full refund",
      description: "Received different fruits than ordered",
      color: "text-orange-500",
    },
    {
      reason: "Not Satisfied",
      icon: <RotateCcw className="h-5 w-5" />,
      timeframe: "24 hours",
      refundType: "Store credit",
      description: "Taste or quality doesn't meet expectations",
      color: "text-yellow-500",
    },
    {
      reason: "Delivery Issues",
      icon: <Clock className="h-5 w-5" />,
      timeframe: "72 hours",
      refundType: "Full refund",
      description: "Late delivery causing spoilage",
      color: "text-blue-500",
    },
  ];

  const returnProcess = [
    {
      step: 1,
      title: "Contact Us",
      description: "Report the issue within the specified timeframe",
      action: "Call, email, or use our online form",
    },
    {
      step: 2,
      title: "Provide Details",
      description: "Share photos and order information",
      action: "Upload photos of the issue",
    },
    {
      step: 3,
      title: "Get Approval",
      description: "We'll review and approve your return request",
      action: "Receive confirmation within 2 hours",
    },
    {
      step: 4,
      title: "Return or Keep",
      description: "Dispose of spoiled items or return as instructed",
      action: "Follow our disposal or return instructions",
    },
    {
      step: 5,
      title: "Receive Refund",
      description: "Get your refund or store credit",
      action: "Processed within 3-5 business days",
    },
  ];

  const qualityStandards = [
    {
      standard: "Freshness Guarantee",
      description: "All fruits delivered at peak freshness",
      coverage: "100% satisfaction or money back",
    },
    {
      standard: "Damage Protection",
      description: "Items damaged during shipping",
      coverage: "Full replacement + expedited delivery",
    },
    {
      standard: "Temperature Control",
      description: "Proper cold chain maintenance",
      coverage: "Refund if temperature compromised",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Return Policy
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your satisfaction is our priority. We stand behind the quality of our
          fresh fruits with a comprehensive return and refund policy.
        </p>
      </div>

      {/* Quality Guarantee Banner */}
      <div className="bg-[#defcf9] rounded-lg p-6 mb-12">
        <div className="flex items-center justify-center mb-4">
          <Shield className="h-8 w-8 text-primary mr-3" />
          <h2 className="text-2xl font-bold text-primary">
            100% Freshness Guarantee
          </h2>
        </div>
        <p className="text-center text-muted-foreground">
          If you're not completely satisfied with the quality and freshness of
          your fruits, we'll make it right with a full refund or replacement.
        </p>
      </div>

      {/* Return Reasons */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Valid Return Reasons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {returnReasons.map((item, index) => (
            <Card key={index} className="bg-[#93e4c1] relative">
              <CardHeader className="text-center">
                <div className={`flex justify-center  mb-3 ${item.color}`}>
                  {item.icon}
                </div>
                <CardTitle className="text-lg">{item.reason}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Timeframe:</span>
                    <Badge variant="outline">{item.timeframe}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Refund:</span>
                    <span className="text-sm text-primary font-medium">
                      {item.refundType}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Return Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          How to Return
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {returnProcess.map((step, index) => (
            <div key={index} className=" text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.step}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {step.description}
              </p>
              <p className="text-xs text-primary font-medium">{step.action}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Standards */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Our Quality Standards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {qualityStandards.map((standard, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                  {standard.standard}
                </CardTitle>
                <CardDescription>{standard.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-sm font-medium text-primary">
                    {standard.coverage}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Detailed Return Policy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#93e4c1]">
            <CardHeader>
              <CardTitle className="text-green-600">What We Accept</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Fruits that arrive damaged or spoiled</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Incorrect items or quantities delivered</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Items that don't meet freshness standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Delivery delays causing quality issues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Temperature-related damage during shipping</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#defcf9]">
            <CardHeader>
              <CardTitle className="text-red-600">
                What We Don't Accept
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Returns after the specified timeframe</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Fruits consumed or partially consumed</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Natural ripening or aging after delivery</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Damage due to improper storage by customer</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Change of mind without quality issues</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Refund Information */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Refund Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#defcf9]">
            <CardHeader>
              <CardTitle className="text-lg">Processing Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Approval: Within 2 hours</li>
                <li>• Credit card: 3-5 business days</li>
                <li>• Digital wallet: 1-2 business days</li>
                <li>• Store credit: Instant</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#defcf9]">
            <CardHeader>
              <CardTitle className="text-lg">Refund Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Original payment method</li>
                <li>• Store credit (with bonus 10%)</li>
                <li>• Account credit for future orders</li>
                <li>• Gift card (upon request)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#defcf9]">
            <CardHeader>
              <CardTitle className="text-lg">Special Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Quality issues: Full refund + $5 credit</li>
                <li>• Our mistake: Free replacement delivery</li>
                <li>• Subscription orders: Prorated refunds</li>
                <li>• Bulk orders: Case-by-case review</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Need to Return Something?
        </h2>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Contact Our Support Team
              </h3>
              <p className="text-muted-foreground mb-6">
                Our customer service team is ready to help with your return
                request
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="w-full">Call: (555) 123-FRUIT</Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Email: returns@freshfruit.com
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Live Chat Support
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Available 7 days a week, 8 AM - 8 PM EST
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Important Notes */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Important Notes
        </h2>
        <Card className="bg-[#defcf9]">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-primary" />
                  Perishable Items Policy
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Fresh fruits are perishable and have limited return
                    windows
                  </li>
                  <li>• Report quality issues immediately upon delivery</li>
                  <li>• Take photos of any issues for faster processing</li>
                  <li>
                    • Store fruits properly while awaiting return approval
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  Seasonal Considerations
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Holiday periods may have extended processing times</li>
                  <li>• Weather delays may affect return timeframes</li>
                  <li>• Seasonal fruits have specific quality expectations</li>
                  <li>• Peak season orders processed with priority</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
