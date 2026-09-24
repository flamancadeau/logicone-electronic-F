import { workflowSteps } from '../../data/services';
import { useLanguage } from '../../hooks/useLanguage';

export default function WorkflowSection() {
  const { t, L } = useLanguage();

  return (
    <section className="w-full py-space-xl md:py-space-2xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl md:mb-space-2xl px-1">
          <span className="font-label-tech text-label-tech uppercase tracking-widest text-secondary">
            {t('workflow.eyebrow')}
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight mt-1 break-anywhere">
            {t('workflow.title')}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            {t('workflow.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative">
          {workflowSteps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col p-space-md sm:p-space-lg rounded-xl bg-surface-container-lowest shadow-sm min-w-0"
            >
              <div className="flex items-center justify-between mb-space-md">
                <span className={`font-headline-lg text-headline-lg font-extrabold ${step.numberColor}`}>
                  {step.number}
                </span>
                <span className="material-symbols-outlined text-secondary text-[24px]">{step.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">{L(step.title)}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{L(step.description)}</p>
              <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-xs rounded font-label-tech text-label-tech text-secondary">
                {L(step.output)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
