import { Link } from 'react-router-dom';

export default function StubPage({ title, description, children }) {
  return (
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-2xl">
      <div className="max-w-2xl">
        <span className="font-label-tech text-label-tech uppercase tracking-widest text-primary">Coming soon</span>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-xs">
          {title}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
          {description ||
            'This page is scaffolded for the frontend. Full forms and API wiring will connect when the backend is ready. Mock data powers the Home experience today.'}
        </p>
        {children}
        <div className="mt-space-xl flex flex-wrap gap-space-md">
          <Link
            to="/"
            className="inline-flex items-center gap-space-xs px-space-lg py-2.5 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg"
          >
            Back to Home
          </Link>
          <Link
            to="/book-service"
            className="inline-flex items-center gap-space-xs px-space-lg py-2.5 bg-surface-container-high text-on-surface rounded-lg font-label-lg text-label-lg"
          >
            Book Service
          </Link>
        </div>
      </div>
    </div>
  );
}
