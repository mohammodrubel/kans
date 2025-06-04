"use client"
import { AlignJustify, X } from 'lucide-react'
import React, { useState } from 'react'

function MobileMenu() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div>
            {openMenu ? <X onClick={()=> setOpenMenu(!openMenu)} /> : <AlignJustify onClick={()=> setOpenMenu(!openMenu)} />}
        </div>
    )
}

export default MobileMenu