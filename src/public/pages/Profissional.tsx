import { useTranslation } from 'react-i18next'

export const ProfessionalExperience = () => {
  const { t } = useTranslation()

  return (
    <div className="h-full w-full flex items-center justify-center py-10 md:py-0">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-10 text-white px-4">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">{t('professional.title')}</h1>
          <div className="w-24 h-[2px] bg-white/30 mx-auto mt-3" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 text-center max-w-2xl text-white/80 leading-relaxed">

          {/* KRUZER - Junior */}
          <div>
            <h2 className="font-semibold text-white text-lg md:text-xl">
              {t('professional.kruzer_junior_role')}
            </h2>
            <p className="text-base md:text-lg text-white/60">{t('professional.kruzer_junior_period')}</p>
            <ul className="mt-2 text-base md:text-lg text-white/70 space-y-1">
              <li>• {t('professional.kruzer_junior_li1')}</li>
              <li>• {t('professional.kruzer_junior_li2')} <span className="text-white">{t('professional.kruzer_junior_li2_tech')}</span></li>
            </ul>
          </div>

          {/* KRUZER - Intern */}
          <div>
            <h2 className="font-semibold text-white text-lg md:text-xl">
              {t('professional.kruzer_intern_role')}
            </h2>
            <p className="text-base md:text-lg text-white/60">{t('professional.kruzer_intern_period')}</p>
            <ul className="mt-2 text-base md:text-lg text-white/70 space-y-1">
              <li>• {t('professional.kruzer_intern_li1')}</li>
              <li>• {t('professional.kruzer_intern_li2')} <span className="text-white">{t('professional.kruzer_intern_li2_tech')}</span></li>
            </ul>
          </div>

          {/* JA VENDEU */}
          <div>
            <h2 className="font-semibold text-white text-lg md:text-xl">
              {t('professional.javendeu_role')}
            </h2>
            <p className="text-base md:text-lg text-white/60">{t('professional.javendeu_period')}</p>
            <ul className="mt-2 text-base md:text-lg text-white/70 space-y-1">
              <li>• {t('professional.javendeu_li1')}</li>
              <li>• {t('professional.javendeu_li2')} <span className="text-white">{t('professional.javendeu_li2_skills')}</span></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
