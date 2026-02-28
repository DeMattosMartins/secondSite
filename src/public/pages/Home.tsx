import { useTranslation } from 'react-i18next'
import mePhoto from '../../assets/me.png'
import linkedinLogo from '../../assets/linkedin.png'
import githubLogo from '../../assets/github.png'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-20 py-10 md:py-0 h-full">
      {/* Left — text content */}
      <div className="flex flex-col gap-4 text-white text-center md:text-left items-center md:items-start">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Mateus de Mattos
            <br />
            Martins
          </h1>
          <h2 className="text-white/60 text-lg md:text-xl mt-2">
            {t('home.role')}
          </h2>
        </div>

        <div className="w-12 h-px bg-white/30" />

        <p className="text-white/70 text-sm md:text-base max-w-xs leading-relaxed">
          {t('home.description')}
        </p>

        <div className="flex flex-row gap-4 pt-2">
          <a
            href="https://www.linkedin.com/in/mateus-de-mattos-martins-57b7a6282/"
            target="_blank"
            rel="noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity">
            <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8 md:w-9 md:h-9" />
          </a>
          <a
            href="https://github.com/DeMattosMartins"
            target="_blank"
            rel="noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity">
            <img src={githubLogo} alt="GitHub" className="w-8 h-8 md:w-9 md:h-9" />
          </a>
        </div>
      </div>

      {/* Right — photo */}
      <div className="flex-shrink-0">
        <img
          src={mePhoto}
          alt="Profile photo"
          className="w-[260px] h-[300px] sm:w-[320px] sm:h-[370px] md:w-[420px] md:h-[480px] object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  )
}
