// Project color palette
export const PROJECT_COLORS = [
  { name: "Blue", value: "#3B82F6" },
  { name: "Green", value: "#10B981" },
  { name: "Red", value: "#EF4444" },
  { name: "Purple", value: "#8B5CF6" },
  { name: "Orange", value: "#F97316" },
  { name: "Pink", value: "#EC4899" },
  { name: "Yellow", value: "#F59E0B" },
  { name: "Teal", value: "#14B8A6" },
] as const;

// Default project color
export const DEFAULT_PROJECT_COLOR = PROJECT_COLORS[0].value; // Blue
