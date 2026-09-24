import { generateWhatsAppLink, formatPhoneDisplay } from '../../utils/generateWhatsAppLink';
import { useLanguage } from '../../hooks/useLanguage';

export default function WhatsAppButton({
  className = '',
  message,
  children,
}) {
  const { t, lang } = useLanguage();
  const defaultMessage =
    lang === 'rw'
      ? 'Muraho LogicOne, nkeneye ubufasha ku gikoresho.'
      : 'Hi LogicOne, I need help with a device.';
  const href = generateWhatsAppLink(undefined, message || defaultMessage);
  const display = formatPhoneDisplay();

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children || (
        <>
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <div className="flex flex-col text-left">
            <span className="font-label-tech text-label-tech uppercase tracking-wider text-on-tertiary/80 leading-none">
              {t('common.whatsappDesk')}
            </span>
            <span className="font-label-md text-label-md leading-none font-bold">{display}</span>
          </div>
        </>
      )}
    </a>
  );
}
