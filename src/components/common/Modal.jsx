import { useEffect } from 'react';

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-margin-mobile">
      <button
        type="button"
        aria-label="Close overlay"
        className="absolute inset-0 bg-on-background/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-surface-container-lowest p-space-lg shadow-2xl">
        <div className="mb-space-md flex items-center justify-between gap-space-md">
          {title && <h3 className="font-headline-md text-headline-md text-on-surface">{title}</h3>}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-on-surface-variant hover:bg-surface-container-high"
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
