import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-primary hover:bg-primary-container text-on-primary shadow-[0_4px_14px_rgba(220,38,38,0.25)] hover:shadow-[0_6px_18px_rgba(220,38,38,0.35)]',
  tertiary:
    'bg-tertiary hover:bg-tertiary-container text-on-tertiary shadow-[0_2px_8px_rgba(0,98,121,0.25)]',
  dark: 'bg-inverse-surface hover:bg-on-background text-inverse-on-surface shadow-md',
  ghost: 'bg-surface-container-high hover:bg-surface-container-highest text-on-surface',
  outline: 'bg-transparent border border-outline-variant text-on-surface hover:bg-surface-container-low',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  to,
  href,
  type = 'button',
  onClick,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-space-sm px-space-md py-2.5 font-label-lg text-label-lg rounded-lg transition-all font-semibold active:scale-[0.98] ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
