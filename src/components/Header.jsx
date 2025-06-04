import { User } from 'lucide-react'; // or any icon lib you're using
import Logo from './Logo';
import { MainMenu } from './MainMenu';
import MobileMenu from './MobileMenu';
import NavbarDropDownLanguage from './NavbarDropDownLanguage';
import { Button } from './ui/button';


function Header() {
  return (
    <header className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <Logo />
        <MainMenu />
        <div className='flex items-center gap-4'>

          <div className="hidden xl:block">
            <NavbarDropDownLanguage />
          </div>
          <div className="flex items-center gap-0.5">
            <User /> <span>Login</span>
          </div>
          <div className="hidden lg:block">
            <Button className="bg-[#016630d8] hover:bg-[#016630]">Request Demo</Button>
          </div>
        </div>
        <div className="lg:hidden mx-2">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
