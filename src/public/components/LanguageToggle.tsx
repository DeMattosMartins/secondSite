import { useTranslation } from 'react-i18next'

export const LanguageToggle = () => {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  const toggle = () => {
    i18n.changeLanguage(isEn ? 'pt' : 'en')
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 px-3 py-1 rounded-[4px] text-sm text-white/60 hover:text-white hover:bg-white/15 transition-all cursor-pointer">
      <span className="text-xs font-semibold tracking-wide">
        {isEn ? 'PT' : 'EN'}
      </span>
    </button>
  )
}
