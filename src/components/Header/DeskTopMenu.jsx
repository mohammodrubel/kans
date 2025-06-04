"use client"

import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import ListItem from "./MenuListItem"


export default function DeskTopMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <Link
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href="/"
                                >
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                        shadcn/ui
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                        Beautifully designed components built with Tailwind CSS.
                                    </p>
                                </Link>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                                Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/pricing">
                        Pricing
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem href="/services/design" title="Design">
                                Custom UI/UX design services
                            </ListItem>
                            <ListItem href="/services/development" title="Development">
                                Full-stack development solutions
                            </ListItem>
                            <ListItem href="/services/consulting" title="Consulting">
                                Expert advice for your projects
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/customers">
                        Customers
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-2 p-4">
                            <ListItem href="/about" title="About Us">
                                Learn about our company
                            </ListItem>
                            <ListItem href="/team" title="Team">
                                Meet our team
                            </ListItem>
                            <ListItem href="/contact" title="Contact">
                                Get in touch
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}