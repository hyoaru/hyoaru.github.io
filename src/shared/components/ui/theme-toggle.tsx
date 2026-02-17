import { useTheme } from "next-themes";
import { Button } from "@heroui/react";
import { Sun, Moon } from "lucide-react";
import { Ripple } from "m3-ripple";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      isIconOnly
      size="sm"
      variant="secondary"
      className="rounded-lg"
      onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Ripple />
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};
