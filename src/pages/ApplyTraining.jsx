import { useState } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { courses } from '../data/courses';
import { useLanguage } from '../hooks/useLanguage';

export default function ApplyTraining() {
  const { t, L } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    courseId: courses[0]?.id || '',
  });
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-margin-mobile py-space-2xl text-center">
        <span className="material-symbols-outlined text-[48px] text-tertiary">school</span>
        <h1 className="font-headline-xl text-headline-xl-mobile text-on-surface mt-space-md">
          {t('pages.applyDoneTitle')}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          {t('pages.applyDoneBody')}
        </p>
        <Button to="/training" className="mt-space-xl">
          {t('pages.viewPrograms')}
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-margin-mobile md:px-margin py-space-xl md:py-space-2xl">
      <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">
        {t('pages.applyTitle')}
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-xl">
        {t('pages.applyIntro')}
      </p>
      <form
        className="flex flex-col gap-space-md"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <Input label={t('pages.fullName')} name="name" required value={form.name} onChange={onChange} />
        <Input label={t('pages.phone')} name="phone" type="tel" required value={form.phone} onChange={onChange} />
        <Input
          label={t('pages.email')}
          name="email"
          type="email"
          required
          value={form.email}
          onChange={onChange}
        />
        <label className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface-variant">{t('pages.program')}</span>
          <select
            name="courseId"
            value={form.courseId}
            onChange={onChange}
            className="w-full rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-space-md py-2.5 font-body-md text-body-md"
          >
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {L(c.title)}
              </option>
            ))}
          </select>
        </label>
        <Button type="submit" variant="tertiary" className="w-full sm:w-auto">
          {t('pages.applySubmit')}
        </Button>
      </form>
    </div>
  );
}
