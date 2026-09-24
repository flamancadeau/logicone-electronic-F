import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-margin-mobile py-space-2xl text-center">
      <p className="font-label-tech text-label-tech text-primary uppercase">404</p>
      <h1 className="font-headline-xl text-headline-xl-mobile text-on-surface mt-space-xs">Page not found</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
        That route doesn&apos;t exist yet. Head back to the home landing page.
      </p>
      <Link
        to="/"
        className="mt-space-xl inline-flex px-space-xl py-3 bg-primary text-on-primary rounded-lg font-label-lg"
      >
        Go home
      </Link>
    </div>
  );
}
