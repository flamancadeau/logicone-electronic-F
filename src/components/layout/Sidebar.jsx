/** Placeholder for future admin/technician sidebars */
export default function Sidebar({ items = [] }) {
  return (
    <aside className="w-64 shrink-0 border-r border-surface-container bg-surface-container-lowest p-space-md hidden lg:block">
      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href || '#'}
            className="px-space-md py-space-sm rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-low"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
