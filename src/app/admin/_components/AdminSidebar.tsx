"use client";

export type Section = "game" | "activities" | "teams" | "leaderboard";

type AdminSidebarProps = {
  activeSection: Section;
  onSelect: (section: Section) => void;
};

const navItems: { label: string; value: Section }[] = [
  { label: "Game", value: "game" },
  { label: "Activities", value: "activities" },
  { label: "Teams", value: "teams" },
  { label: "Leaderboard", value: "leaderboard" },
];

export function AdminSidebar({ activeSection, onSelect }: AdminSidebarProps) {
  return (
    <aside className="flex w-52 flex-shrink-0 flex-col border-r bg-white">
      <nav className="flex flex-col gap-1 p-4">
        {navItems.map((item) => (
          <button
            key={item.value}
            onClick={() => onSelect(item.value)}
            className={`rounded px-3 py-2 text-left text-sm font-medium transition-colors ${
              activeSection === item.value
                ? "bg-gray-100 font-semibold text-gray-900"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
