import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";

export const Header = () => {
  return (
    <>
      <div className="hidden sm:block">
        <HeaderDesktop />
      </div>
      <div className="block sm:hidden">
        <HeaderMobile />
      </div>
    </>
  );
};
