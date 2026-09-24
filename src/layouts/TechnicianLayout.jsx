import { Outlet } from 'react-router-dom';

export default function TechnicianLayout() {
  return (
    <div className="min-h-screen p-space-lg bg-surface">
      <h1 className="font-headline-lg text-headline-lg mb-space-md">Technician Dashboard</h1>
      <Outlet />
    </div>
  );
}
