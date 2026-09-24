import { useState } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { services } from '../data/services';
import { bookingLocations } from '../data/laptops';
import { useLanguage } from '../hooks/useLanguage';

export default function BookService() {
  const { t, L } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    serviceId: services[0]?.id || '',
    location: bookingLocations[0]?.id || 'gasabo',
    address: '',
    description: '',
  });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-margin-mobile py-space-2xl text-center">
        <span className="material-symbols-outlined text-[48px] text-tertiary">check_circle</span>
        <h1 className="font-headline-xl text-headline-xl-mobile text-on-surface mt-space-md">
          {t('pages.bookDoneTitle')}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          {t('pages.bookDoneBody')} LO-{Date.now().toString().slice(-6)}
        </p>
        <Button to="/" className="mt-space-xl">
          {t('common.backHome')}
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-margin-mobile md:px-margin py-space-xl md:py-space-2xl">
      <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">
        {t('pages.bookTitle')}
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-xl">
        {t('pages.bookIntro')}
      </p>
      <form onSubmit={onSubmit} className="flex flex-col gap-space-md">
        <Input
          label={t('pages.fullName')}
          name="name"
          required
          autoComplete="name"
          value={form.name}
          onChange={onChange}
        />
        <Input
          label={t('pages.phone')}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          value={form.phone}
          onChange={onChange}
        />
        <Input
          label={t('pages.email')}
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={onChange}
        />
        <label className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface-variant">{t('pages.service')}</span>
          <select
            name="serviceId"
            value={form.serviceId}
            onChange={onChange}
            className="w-full rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-space-md py-2.5 font-body-md text-body-md"
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {L(s.title)}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface-variant">{t('pages.location')}</span>
          <select
            name="location"
            value={form.location}
            onChange={onChange}
            required
            className="w-full rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-space-md py-2.5 font-body-md text-body-md"
          >
            {bookingLocations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {L(loc.label)}
              </option>
            ))}
          </select>
        </label>
        <Input
          label={t('pages.address')}
          name="address"
          required
          placeholder={t('pages.addressPlaceholder')}
          autoComplete="street-address"
          value={form.address}
          onChange={onChange}
        />
        <Input
          as="textarea"
          label={t('pages.describeIssue')}
          name="description"
          rows={4}
          required
          value={form.description}
          onChange={onChange}
        />
        <Button type="submit" className="w-full sm:w-auto">
          {t('pages.bookSubmit')}
        </Button>
      </form>
    </div>
  );
}
