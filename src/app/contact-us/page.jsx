"use client"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone } from "lucide-react"
import { useState } from "react"

export default function Component() {
    const [formData, setFormData] = useState({
        fullName: "",
        businessEmail: "",
        company: "",
        phone: "",
        message: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {


    }

    return (
        <div className="min-h-screen bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Left side - Form */}
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Get in touch with Sales
                                <div className="w-16 h-1 bg-[#016630] mt-2"></div>
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Want to learn more about how BestFoodImporters can help your business?
                                <br />
                                Fill in the form below and a member of our sales team will be in touch.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName" className="sr-only">
                                        Full Name
                                    </Label>
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Full Name"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="h-12 bg-white border-gray-200 placeholder:text-gray-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="businessEmail" className="sr-only">
                                        Business Email
                                    </Label>
                                    <Input
                                        id="businessEmail"
                                        name="businessEmail"
                                        type="email"
                                        placeholder="Business Email"
                                        value={formData.businessEmail}
                                        onChange={handleInputChange}
                                        className="h-12 bg-white border-gray-200 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="company" className="sr-only">
                                        Company
                                    </Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        placeholder="Company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="h-12 bg-white border-gray-200 placeholder:text-gray-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="sr-only">
                                        Phone
                                    </Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="h-12 bg-white border-gray-200 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="sr-only">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="min-h-32 bg-white border-gray-200 placeholder:text-gray-400 resize-none"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <Button
                                    type="submit"
                                    className="bg-[#016630] hover:bg-[#016630] text-white  font-semibold px-8 py-3 rounded-full h-auto"
                                >
                                    Submit
                                </Button>

                                <div className="text-sm text-gray-500 max-w-md">
                                    By submitting this form, you are agreeing to BestDataNet{" "}
                                    <a href="#" className="text-gray-700 underline">
                                        Terms of Use
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-gray-700 underline">
                                        Privacy Policy
                                    </a>
                                    .
                                    <br />
                                    You are also agreeing to receive information and offers relevant to BestFoodImporters service, and can{" "}
                                    <a href="#" className="text-gray-700 underline">
                                        opt-out
                                    </a>{" "}
                                    at any time.
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right side - Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Give Our Sales Team a call</h2>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#016630] rounded-full flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg font-semibold text-gray-900">+44 20 4572 5515</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Support</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Simply leave a message using the chat button and we'll get back to you within 24 hours, Monday-Friday.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
