import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, MapPin, Package, Shield, Calendar } from "lucide-react";

export default function DeliveryPage() {
  const deliveryZones = [
    {
      zone: "Zone 1 - City Center",
      areas: ["Downtown", "Business District", "Central Park Area"],
      deliveryTime: "Same Day",
      cost: "Free over $50",
      standardCost: "$4.99",
    },
    {
      zone: "Zone 2 - Suburbs",
      areas: ["North Hills", "West End", "East Valley", "South Ridge"],
      deliveryTime: "Next Day",
      cost: "Free over $75",
      standardCost: "$6.99",
    },
    {
      zone: "Zone 3 - Extended Areas",
      areas: ["Outer Districts", "Rural Areas", "Mountain View"],
      deliveryTime: "2-3 Days",
      cost: "Free over $100",
      standardCost: "$9.99",
    },
  ];

  const deliveryTimes = [
    { time: "8:00 AM - 12:00 PM", label: "Morning Delivery", popular: true },
    { time: "12:00 PM - 4:00 PM", label: "Afternoon Delivery", popular: false },
    { time: "4:00 PM - 8:00 PM", label: "Evening Delivery", popular: true },
    { time: "6:00 PM - 10:00 PM", label: "Late Evening", popular: false },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Delivery Information
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Fresh fruits delivered to your doorstep with care and precision. Learn
          about our delivery zones, timing, and policies.
        </p>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center bg-[#e0ffcd]">
          <CardContent className="pt-6">
            <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Fast Delivery</h3>
            <p className="text-sm text-muted-foreground">Same-day available</p>
          </CardContent>
        </Card>
        <Card className="text-center bg-[#93e4c1]">
          <CardContent className="pt-6">
            <Package className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Secure Packaging</h3>
            <p className="text-sm text-muted-foreground">
              Temperature controlled
            </p>
          </CardContent>
        </Card>
        <Card className="text-center bg-[#feffdf]">
          <CardContent className="pt-6">
            <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Freshness Guarantee</h3>
            <p className="text-sm text-muted-foreground">100% satisfaction</p>
          </CardContent>
        </Card>
        <Card className="text-center bg-[#ecfeff]">
          <CardContent className="pt-6">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Wide Coverage</h3>
            <p className="text-sm text-muted-foreground">3 delivery zones</p>
          </CardContent>
        </Card>
      </div>

      {/* Delivery Zones */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Delivery Zones & Pricing
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {deliveryZones.map((zone, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {zone.zone}
                  <Badge variant="outline">{zone.deliveryTime}</Badge>
                </CardTitle>
                <CardDescription>
                  <div className="space-y-2">
                    <p className="font-medium">Coverage Areas:</p>
                    <ul className="text-sm space-y-1">
                      {zone.areas.map((area, areaIndex) => (
                        <li key={areaIndex} className="flex items-center">
                          <MapPin className="h-3 w-3 mr-2 text-primary" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      Standard Delivery:
                    </span>
                    <span className="font-semibold">{zone.standardCost}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Free Delivery:</span>
                    <span className="font-semibold text-primary">
                      {zone.cost}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Delivery Time Slots */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Available Time Slots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliveryTimes.map((slot, index) => (
            <Card
              key={index}
              className={`relative  ${
                slot.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Clock className="h-5 w-5 text-primary" />
                  {slot.popular && <Badge variant="secondary">Popular</Badge>}
                </div>
                <CardTitle className="text-lg">{slot.label}</CardTitle>
                <CardDescription className="font-medium">
                  {slot.time}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Delivery Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full  text-primary-foreground bg-[#42b883] flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Place Your Order</h3>
            <p className="text-sm text-muted-foreground">
              Select your fresh fruits and choose delivery time
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full  text-primary-foreground bg-[#42b883] flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">We Prepare</h3>
            <p className="text-sm text-muted-foreground">
              Fruits are carefully selected and packed
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full  text-primary-foreground bg-[#42b883] flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">On The Way</h3>
            <p className="text-sm text-muted-foreground">
              Track your delivery in real-time
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full  text-primary-foreground bg-[#42b883] flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="font-semibold mb-2">Delivered Fresh</h3>
            <p className="text-sm text-muted-foreground">
              Enjoy your fresh, quality fruits
            </p>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Special Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#edf7fa]">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Scheduled Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Set up recurring deliveries for your favorite fruits. Perfect
                for busy families and health-conscious individuals.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Weekly, bi-weekly, or monthly options
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  5% discount on recurring orders
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Skip or modify anytime
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#f4eeff]">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2 text-primary" />
                Express Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Need fruits urgently? Our express service delivers within 2
                hours in Zone 1 areas.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  2-hour delivery window
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Additional $9.99 fee
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Available 9 AM - 6 PM
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Important Notes */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Important Information
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Delivery Requirements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Someone must be present to receive the delivery</li>
                  <li>
                    • We require a valid phone number for delivery updates
                  </li>
                  <li>• Apartment deliveries require buzzer/unit number</li>
                  <li>
                    • Special delivery instructions can be added at checkout
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Weather & Delays</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Severe weather may cause delivery delays</li>
                  <li>• You'll be notified of any schedule changes</li>
                  <li>
                    • Temperature-controlled vehicles ensure fruit quality
                  </li>
                  <li>• Holiday schedules may vary - check our updates</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
