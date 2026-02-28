import { useTranslation } from 'react-i18next'

export const Education = () => {
  const { t } = useTranslation()

  return (
    <div className="h-full w-full flex items-center justify-center py-10 md:py-0">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-10 text-white px-4">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-3xl font-bold tracking-wide">{t('education.title')}</h1>
          <div className="w-16 h-[2px] bg-white/30 mx-auto mt-3" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 text-center max-w-2xl text-white/80 leading-relaxed">

          <div>
            <h2 className="font-semibold text-white text-base md:text-lg">
              {t('education.feup_name')}
            </h2>
            <p className="text-sm md:text-base text-white/60">
              {t('education.feup_desc')}
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base md:text-lg">
              {t('education.fiap_name')}
            </h2>
            <p className="text-sm md:text-base text-white/60">
              {t('education.fiap_desc')}
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base md:text-lg">
              {t('education.alura_name')}
            </h2>
            <p className="text-sm md:text-base text-white/60">
              {t('education.alura_desc')}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
