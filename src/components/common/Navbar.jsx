import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

export default function Navbar({ className = '', onNavigate }) {
  const { t } = useLanguage();

  const links = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/services', label: t('nav.services') },
    { to: '/market', label: t('nav.market') },
    { to: '/training', label: t('nav.training') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav
      className={`hidden xl:flex items-center gap-space-xs p-space-xs bg-surface-container-low/60 rounded-xl ${className}`}
    >
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          onClick={onNavigate}
          className={({ isActive }) =>
            `px-space-md py-space-xs transition-colors font-label-lg text-label-lg rounded-lg ${
              isActive
                ? 'bg-surface-container-high text-on-surface font-semibold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
