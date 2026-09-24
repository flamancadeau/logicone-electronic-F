import { useState } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import WhatsAppButton from '../features/contact/WhatsAppButton';
import { generateWhatsAppLink, formatPhoneDisplay } from '../utils/generateWhatsAppLink';

const phone = import.meta.env.VITE_PHONE_NUMBER || '+250 780 800 050';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-2xl">
        <div>
          <span className="font-label-tech text-label-tech uppercase tracking-widest text-primary">Contact</span>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-xs">
            Reach the Kigali Lab
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
            Walk in, call, or WhatsApp our bench desk. Form submissions are mock-only for now.
          </p>
          <ul className="mt-space-xl space-y-space-md font-body-md text-body-md text-on-surface">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">location_on</span>
              Downtown Kigali, Gasabo District
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">call</span>
              <a href={`tel:${phone}`} className="hover:text-primary">
                {formatPhoneDisplay()}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">chat</span>
              <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                WhatsApp Desk
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">schedule</span>
              Mon–Sat 08:00–18:30 CAT
            </li>
          </ul>
          <WhatsAppButton className="mt-space-xl inline-flex items-center gap-space-xs px-space-md py-space-sm bg-tertiary text-on-tertiary rounded-lg" />
        </div>

        <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-md">
          {sent ? (
            <div className="text-center py-space-xl">
              <span className="material-symbols-outlined text-[40px] text-tertiary">mail</span>
              <p className="font-headline-md text-headline-md mt-space-md">Message queued (mock)</p>
              <Button type="button" className="mt-space-lg" onClick={() => setSent(false)}>
                Send another
              </Button>
            </div>
          ) : (
            <form
              className="flex flex-col gap-space-md"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <h2 className="font-headline-md text-headline-md text-on-surface">Send a message</h2>
              <Input label="Name" name="name" required />
              <Input label="Email" name="email" type="email" required />
              <Input as="textarea" label="Message" name="message" rows={4} required />
              <Button type="submit">Send</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
