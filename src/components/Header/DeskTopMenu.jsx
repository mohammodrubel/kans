"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"
import ListItem from "./MenuListItem"
import MegaMenu from "./MegaMenu"

export default function DeskTopMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Products */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Category</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MegaMenu/>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Pricing */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/products">Products</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        

        {/* Customers */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/customers">Customers</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


        {/* Contact Us */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/contact-us">Contact Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
