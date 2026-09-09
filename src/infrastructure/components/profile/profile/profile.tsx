import { ProfileDesktop } from "./profile-desktop";
import { ProfileMobile } from "./profile-mobile";

export const Profile = () => {
  return (
    <>
      <div className="hidden sm:block">
        <ProfileDesktop />
      </div>
      <div className="block sm:hidden">
        <ProfileMobile />
      </div>
    </>
  );
};
