export default function Input({
  label,
  id,
  error,
  className = '',
  as: Tag = 'input',
  ...rest
}) {
  const inputId = id || rest.name;
  return (
    <label className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <span className="font-label-md text-label-md text-on-surface-variant">{label}</span>
      )}
      <Tag
        id={inputId}
        className={`w-full rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-space-md py-2.5 font-body-md text-body-md text-on-surface outline-none focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 ${
          error ? 'border-error' : ''
        }`}
        {...rest}
      />
      {error && <span className="font-label-md text-label-md text-error">{error}</span>}
    </label>
  );
}
