import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-surface">
      <aside className="w-64 border-r border-surface-container p-space-md hidden lg:block">
        <p className="font-headline-md text-headline-md">Admin</p>
      </aside>
      <main className="flex-1 p-space-lg">
        <Outlet />
      </main>
    </div>
  );
}
