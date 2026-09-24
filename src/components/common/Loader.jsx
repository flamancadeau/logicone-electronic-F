export default function Loader({ label = 'Loading…' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-space-sm py-space-2xl text-secondary">
      <span className="material-symbols-outlined animate-spin text-[32px] text-primary">progress_activity</span>
      <span className="font-label-md text-label-md">{label}</span>
    </div>
  );
}
