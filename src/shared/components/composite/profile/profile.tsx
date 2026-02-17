import { ProfileDesktop } from "./profile-desktop";
import { ProfileMobile } from "./profile-mobile";

export const Profile = () => {
  return (
    <>
      <div className="hidden lg:block">
        <ProfileDesktop />
      </div>
      <div className="block lg:hidden">
        <ProfileMobile />
      </div>
    </>
  );
};
