import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import MegaMenu from './MegaMenu';

function DesktopNavigatoin({ labels }) {
    const megaMenuRef = useRef(null);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const handleMouseEnter = () => {
        clearTimeout(hoverTimeout);
        setShowMegaMenu(true);
    };

    const handleMouseLeave = () => {
        setHoverTimeout(setTimeout(() => setShowMegaMenu(false), 200));
    };
    // Close mega menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
                setShowMegaMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {/* Category with MegaMenu */}
            <div
                ref={megaMenuRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button
                    className={`flex items-center gap-1 py-2 hover:text-green-600 transition-colors ${showMegaMenu ? "text-green-600 font-semibold" : ""
                        }`}
                >
                    {labels.category}
                    <svg
                        className={`w-4 h-4 transition-transform ${showMegaMenu ? "rotate-180" : ""
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {showMegaMenu && (
                    <div className="fixed left-0 right-0 top-[64px] bg-white shadow-xl z-[9999] rounded-b-lg overflow-auto max-h-[70vh]">
                        <MegaMenu />
                    </div>)}
            </div>

            <Link
                href="/products"
                className="py-2 hover:text-green-600 transition-colors"
            >
                {labels.products}
            </Link>
            <Link
                href="/customers"
                className="py-2 hover:text-green-600 transition-colors"
            >
                {labels.customers}
            </Link>
            <Link
                href="/contact-us"
                className="py-2 hover:text-green-600 transition-colors"
            >
                {labels.contact}
            </Link>
        </nav>
    )
}

export default DesktopNavigatoin