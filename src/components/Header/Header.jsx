import { User } from 'lucide-react';
import Logo from '../Logo';
import { MainMenu } from './MainMenu';
import MobileMenu from './MobileMenu';
import NavbarDropDownLanguage from './NavbarDropDownLanguage';
import { Button } from '../ui/button';
import Link from 'next/link';

function Header() {
  return (
    <header className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <Link href="/"><Logo /></Link>

        {/* Desktop Main Menu */}
        <div className="hidden lg:block">
          <MainMenu />
        </div>

        <div className="flex items-center gap-4">
          {/* Login + MobileMenu Toggle */}
          <div className="flex items-center gap-2">
            <User />
            <span>Login</span>

            {/* ✅ Show on mobile only */}
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>

          {/* Desktop button only */}
          <div className="hidden lg:block">
            <Button className="bg-[#016630d8] hover:bg-[#016630]">Request Demo</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
