"use client"

import DeskTopMenu from "./DeskTopMenu"
import MobileMenu from "./MobileMenu"

export function MainMenu() {
  return (
    <>
      {/* Desktop Navigation - hidden on mobile */}
      <div className="hidden md:block">
        <DeskTopMenu />
      </div>
    </>
  )
}

