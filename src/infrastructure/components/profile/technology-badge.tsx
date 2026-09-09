import { cn } from "@heroui/styles";

const ICON_MAP: Record<string, string> = {
  bash: "gnubash",
  csharp: "sharp",
  dart: "dart",
  html: "html5",
  css: "css",
  java: "openjdk",
  javascript: "javascript",
  php: "php",
  python: "python",
  r: "r",
  typescript: "typescript",
  docker: "docker",
  git: "git",
  labview: "labview",
  bootstrap: "bootstrap",
  codeigniter: "codeigniter",
  daisyui: "daisyui",
  fastapi: "fastapi",
  flask: "flask",
  flutter: "flutter",
  heroui: "heroui",
  javafx: "openjdk",
  laravel: "laravel",
  nextjs: "nextdotjs",
  "open api": "openapiinitiative",
  pydantic: "pydantic",
  react: "react",
  shadcnui: "shadcnui",
  streamlit: "streamlit",
  swagger: "swagger",
  tailwindcss: "tailwindcss",
  ggplot: "tidyverse",
  pandas: "pandas",
  plotly: "plotly",
  seaborn: "python",
  sklearn: "scikitlearn",
  "grafana k6": "k6",
  "robot framework": "robotframework",
  jupyter: "jupyter",
  allure: "circle",
  "aws cloud": "iCloud",
  cloudformation: "ebox",
  "hashicorp vault": "vault",
  influxdb: "influxdb",
  mysql: "mysql",
  nocodb: "airtable",
  pocketbase: "pocketbase",
  postgresql: "postgresql",
  supabase: "supabase",
  browserstack: "bt",
  github: "github",
  grafana: "grafana",
  "grafana loki": "grafana",
  jenkins: "jenkins",
  "aws ec2": "cloudways",
  vapi: "vectary",
  arduino: "arduino",
  n8n: "n8n",
  vscodium: "vscodium",
  neovim: "neovim",
  tmux: "tmux",
  hyprland: "hyprland",
  linux: "linux",
  arch: "archlinux",
  cachyos: "codio",
  ubuntu: "ubuntu",
  zorin: "zorin",
  macos: "macos",
  indesign: "aframe",
  photoshop: "aframe",
  premiere: "aframe",
};

type TechnologyBadgeProps = {
  className?: string;
  name: string;
};

export const TechnologyBadge = ({ className, name }: TechnologyBadgeProps) => {
  const iconKey = ICON_MAP[name];
  const iconUrl = `https://cdn.simpleicons.org/${iconKey}/000000/0070f0`;

  return (
    <div
      className={cn(
        "bg-default xs:text-sm flex h-full items-center justify-center gap-2 rounded-md px-4 text-xs font-bold",
        className,
      )}
    >
      <img width={14} height={14} src={iconUrl} />
      {name}
    </div>
  );
};
