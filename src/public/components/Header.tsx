import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TabsList, TabsTrigger } from './tabs'
import { LanguageToggle } from './LanguageToggle'

export const TabsHeader = () => {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const TAB_ITEMS = [
    { value: 'Home', label: t('header.home') },
    { value: 'About', label: t('header.about') },
    { value: 'Education', label: t('header.education') },
    { value: 'ProfessionalExperience', label: t('header.professional') },
  ]

  return (
    <div className="w-[calc(100%-20px)] text-white mx-[10px] mt-[10px] rounded-[5px] flex items-center px-2 relative">
      {/* Desktop nav */}
      <TabsList className="hidden md:flex gap-1 bg-transparent w-full pl-[calc(100%-60%)]">
        {TAB_ITEMS.map(tab => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="px-3 py-1 text-sm rounded-[4px] text-white/60 hover:text-white transition-colors cursor-pointer data-[state=active]:bg-white/15 data-[state=active]:text-white">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Mobile: hamburger + language toggle */}
      <div className="flex md:hidden items-center justify-between w-full py-1">
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="flex flex-col gap-[5px] p-2 cursor-pointer"
          aria-label="Toggle menu">
          <span className={`block w-5 h-[2px] bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
        <LanguageToggle />
      </div>

      {/* Desktop language toggle */}
      <div className="hidden md:block ml-auto flex-shrink-0">
        <LanguageToggle />
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <TabsList className="absolute top-full left-0 right-0 flex flex-col bg-[#707070] rounded-b-[5px] z-50 py-1 shadow-lg md:hidden">
          {TAB_ITEMS.map(tab => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              onClick={() => setMenuOpen(false)}
              className="w-full text-left px-4 py-3 text-base text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer data-[state=active]:bg-white/15 data-[state=active]:text-white">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      )}
    </div>
  )
}
