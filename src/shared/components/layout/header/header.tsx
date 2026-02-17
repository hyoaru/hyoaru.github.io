import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";

export const Header = () => {
  return (
    <>
      <div className="hidden lg:block">
        <HeaderDesktop />
      </div>
      <div className="block lg:hidden">
        <HeaderMobile />
      </div>
    </>
  );
};
