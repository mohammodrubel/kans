'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp, Globe2 } from "lucide-react";
import { useState } from "react";

function NavbarDropDownLanguage() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <DropdownMenu onOpenChange={setOpen}>
                <DropdownMenuTrigger className="flex items-center gap-1 outline-none">
                    <Globe2 className="w-5 h-5 text-gray-600" />
                    <span>English</span>
                    {open ? (
                        <ChevronUp className="w-4 h-4 text-gray-600" />
                    ) : (
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                    )}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Languages</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex gap-2"><span className="fi fi-fr"></span>France</DropdownMenuItem>
                    <DropdownMenuItem className="flex gap-2"><span className="fi fi-de"></span>German</DropdownMenuItem>
                    <DropdownMenuItem className="flex gap-2"><span className="fi fi-it"></span>Italian</DropdownMenuItem>
                    <DropdownMenuItem className="flex gap-2"><span className="fi fi-es"></span>NameSpanish</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default NavbarDropDownLanguage;
