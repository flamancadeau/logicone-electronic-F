import { useState } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

export default function TrackRequest() {
  const [ref, setRef] = useState('');
  const [result, setResult] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setResult({
      number: ref || 'LO-000000',
      status: 'In diagnostics (mock)',
      updatedAt: new Date().toLocaleString(),
    });
  };

  return (
    <div className="max-w-xl mx-auto px-margin-mobile md:px-margin py-space-2xl">
      <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">
        Track a Request
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-xl">
        Enter a request number. Status shown is mock until the API exists.
      </p>
      <form onSubmit={onSubmit} className="flex flex-col gap-space-md">
        <Input
          label="Request number"
          name="ref"
          placeholder="LO-123456"
          value={ref}
          onChange={(e) => setRef(e.target.value)}
        />
        <Button type="submit">Track</Button>
      </form>
      {result && (
        <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container-low">
          <p className="font-label-tech text-label-tech text-secondary uppercase">{result.number}</p>
          <p className="font-headline-md text-headline-md text-on-surface mt-1">{result.status}</p>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Updated: {result.updatedAt}</p>
        </div>
      )}
    </div>
  );
}
