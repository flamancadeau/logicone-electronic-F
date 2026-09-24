import { useState } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', device: '', details: '' });
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-margin-mobile py-space-2xl text-center">
        <span className="material-symbols-outlined text-[48px] text-tertiary">request_quote</span>
        <h1 className="font-headline-xl text-headline-xl-mobile text-on-surface mt-space-md">Quote requested</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          Mock only — we&apos;ll wire email/API later. Thank you, {form.name || 'customer'}.
        </p>
        <Button to="/" className="mt-space-xl">
          Home
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-margin-mobile md:px-margin py-space-2xl">
      <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">Request a Quote</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-xl">
        Transparent estimates — mock form until the backend is live.
      </p>
      <form
        className="flex flex-col gap-space-md"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <Input label="Name" name="name" required value={form.name} onChange={onChange} />
        <Input label="Phone" name="phone" required value={form.phone} onChange={onChange} />
        <Input label="Device / model" name="device" required value={form.device} onChange={onChange} />
        <Input
          as="textarea"
          label="Issue details"
          name="details"
          rows={4}
          required
          value={form.details}
          onChange={onChange}
        />
        <Button type="submit">Get estimate</Button>
      </form>
    </div>
  );
}
