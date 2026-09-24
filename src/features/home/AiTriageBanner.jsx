import { useChatbot } from '../../hooks/useChatbot';
import { useLanguage } from '../../hooks/useLanguage';

export default function AiTriageBanner() {
  const { openChat } = useChatbot();
  const { t } = useLanguage();

  return (
    <section className="w-full py-space-xl bg-surface" id="ai-assistant">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="relative rounded-2xl bg-gradient-to-r from-inverse-surface via-surface-container-highest/20 to-inverse-surface p-space-lg md:p-space-xl text-inverse-on-surface shadow-xl overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#007C99_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-lg">
            <div className="flex items-start gap-space-md min-w-0">
              <div className="relative flex shrink-0 mt-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-tertiary flex items-center justify-center text-on-tertiary shadow-lg">
                  <span className="material-symbols-outlined text-[28px] sm:text-[32px]">neurology</span>
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary-fixed rounded-full ring-4 ring-inverse-surface animate-pulse" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-label-tech text-label-tech px-2 py-0.5 bg-tertiary/30 text-tertiary-fixed rounded uppercase">
                    {t('aiBanner.badge')}
                  </span>
                  <span className="font-label-tech text-label-tech text-inverse-on-surface/70 break-anywhere">
                    {t('aiBanner.trained')}
                  </span>
                </div>
                <h3 className="font-headline-lg text-[20px] leading-7 sm:text-headline-lg text-on-tertiary mb-space-xs break-anywhere">
                  {t('aiBanner.title')}
                </h3>
                <p className="font-body-md text-body-md text-inverse-on-surface/80 max-w-2xl">
                  {t('aiBanner.body')}
                </p>
              </div>
            </div>
            <div className="shrink-0 w-full lg:w-auto">
              <button
                className="w-full lg:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-3.5 bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-xl shadow-lg transition-all"
                type="button"
                onClick={openChat}
              >
                <span className="material-symbols-outlined text-[20px]">forum</span>
                <span>{t('aiBanner.cta')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
