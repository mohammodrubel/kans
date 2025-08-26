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
  CreditCard,
  Smartphone,
  Wallet,
  Shield,
  Lock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function PaymentPage() {


  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "SSL Encryption",
      description: "All transactions are protected with 256-bit SSL encryption",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "PCI Compliance",
      description: "We meet the highest standards for payment card security",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Fraud Protection",
      description: "Advanced fraud detection systems monitor all transactions",
    },
  ];

  const billingInfo = [
    {
      title: "Billing Address",
      details: [
        "Must match your payment method address",
        "Required for all credit card transactions",
        "Can be different from delivery address",
        "Verified for security purposes",
      ],
    },
    {
      title: "Payment Processing",
      details: [
        "Charges processed when order ships",
        "Pre-authorization may appear immediately",
        "Refunds processed within 3-5 business days",
        "Currency: USD only",
      ],
    },
    {
      title: "Subscription Billing",
      details: [
        "Recurring orders billed automatically",
        "5% discount on all subscription orders",
        "Cancel or modify anytime before next billing",
        "Email notifications before each charge",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Payment Methods
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We accept multiple secure payment options to make your fresh fruit
          shopping experience convenient and safe.
        </p>
      </div>

      {/* Security Banner */}
      <div className="bg-[#defcf9] rounded-lg p-6 mb-12">
        <div className="flex items-center justify-center mb-4">
          <Shield className="h-8 w-8 text-primary mr-3" />
          <h2 className="text-2xl font-bold text-primary">
            100% Secure Payments
          </h2>
        </div>
        <p className="text-center text-muted-foreground">
          Your payment information is encrypted and secure. We never store your
          credit card details on our servers.
        </p>
      </div>

      {/* Security Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Security Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="bg-[#a8e6cf]">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Billing Information */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Billing Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {billingInfo.map((info, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Payment Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          How Payment Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Add to Cart</h3>
            <p className="text-sm text-muted-foreground">
              Select your fresh fruits and proceed to checkout
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">Choose Payment</h3>
            <p className="text-sm text-muted-foreground">
              Select your preferred payment method
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">Secure Processing</h3>
            <p className="text-sm text-muted-foreground">
              Payment is encrypted and processed securely
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="font-semibold mb-2">Order Confirmed</h3>
            <p className="text-sm text-muted-foreground">
              Receive confirmation and tracking information
            </p>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Payment Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-green-100 to-green-200 border-green-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="h-5 w-5 mr-2 text-green-600" />
                First-Time Customer Discount
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get 15% off your first order when you pay with any digital
                wallet.
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent border-green-200 text-green-700"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-100 to-green-200 border-green-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                Subscription Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Save 5% on all recurring orders with automatic billing setup.
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent border-green-400 text-green-700"
              >
                Set Up Subscription
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">Payment FAQ</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-primary" />
                  When will I be charged?
                </h3>
                <p className="text-sm text-muted-foreground ml-6">
                  Your payment method will be charged when your order is
                  prepared for shipping. For pre-orders, payment is processed
                  when items become available.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-primary" />
                  Can I change my payment method after ordering?
                </h3>
                <p className="text-sm text-muted-foreground ml-6">
                  Payment methods can be updated within 1 hour of placing your
                  order. Contact our support team for assistance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-primary" />
                  What if my payment fails?
                </h3>
                <p className="text-sm text-muted-foreground ml-6">
                  If payment fails, we'll notify you immediately and hold your
                  order for 24 hours while you update your payment information.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
