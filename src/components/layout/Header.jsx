import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Button from '../common/Button';
import LanguageSwitcher from '../common/LanguageSwitcher';
import WhatsAppButton from '../../features/contact/WhatsAppButton';
import { useLanguage } from '../../hooks/useLanguage';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const mobileLinks = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/services', label: t('nav.services') },
    { to: '/market', label: t('nav.market') },
    { to: '/training', label: t('nav.training') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
    { to: '/book-service', label: t('nav.bookService') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] safe-pt">
      <div className="h-16 sm:h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-2 sm:gap-gutter">
        <div className="flex items-center gap-space-sm min-w-0 flex-1">
          <Link to="/" className="flex items-center gap-space-sm group min-w-0" onClick={() => setMenuOpen(false)}>
            <img
              src="/logo.png"
              alt={t('header.logoAlt')}
              className="h-8 sm:h-10 md:h-12 w-auto max-w-[100px] xs:max-w-[120px] sm:max-w-[160px] object-contain"
            />
          </Link>
        </div>

        <Navbar onNavigate={() => setMenuOpen(false)} />

        <div className="flex items-center gap-1 sm:gap-space-sm shrink-0">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <WhatsAppButton className="hidden lg:flex items-center gap-space-xs px-space-md py-space-xs bg-tertiary text-on-tertiary hover:bg-tertiary-container transition-all shadow-[0_2px_8px_rgba(0,98,121,0.25)] rounded-lg" />
          <Button to="/book-service" className="hidden md:inline-flex">
            {t('nav.bookService')}
          </Button>
          <button
            type="button"
            aria-label={t('header.toggleNav')}
            aria-expanded={menuOpen}
            className="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="xl:hidden border-t border-surface-container bg-surface-container-lowest px-margin-mobile py-space-md max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="mb-space-sm flex items-center justify-between">
            <span className="font-label-md text-label-md text-secondary">{t('lang.label')}</span>
            <LanguageSwitcher />
          </div>
          <div className="flex flex-col gap-1">
            {mobileLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-space-md py-2.5 rounded-lg font-label-lg text-label-lg ${
                    isActive
                      ? 'bg-surface-container-high text-on-surface font-semibold'
                      : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
