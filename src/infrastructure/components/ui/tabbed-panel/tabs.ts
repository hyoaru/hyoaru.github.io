export const TAB_IDS = [
  "career",
  "certifications",
  "projects",
  "contact",
] as const;

export type TabId = (typeof TAB_IDS)[number];
